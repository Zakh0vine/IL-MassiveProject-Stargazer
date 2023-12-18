import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import PublicRoutes from "./PublicRoutes";
import AuthRoutes from "./AuthRoutes";

import { Login, Home, Register, Profile, DashContent, Report, Notifikasi } from "../pages";

const Routing = () => {

    const [login, setlogin] = useState(false);
    const [user, setUser] = useState();

    const location = useLocation();
    const key = location.state && location.state.key;

    axios.defaults.withCredentials = true;

    useEffect(() => {
        axios.get("http://localhost:4923/api/v1/user")
            .then(res => {
                // const { email, password, firstname, lastname, phone_number } = res.data.userData[0];
                if (res.data.Status === "Success") {
                    setlogin(true)
                    setUser(res.data.userData[0])
                } else {
                    setlogin(false)
                }
            })
            .then(err => console.log(err));
    }, [key])

    return (
        <Routes>
            <Route path="/">
                <Route path="/" element={<Home setLogin={login} />} />

                {/* Public routes */}
                <Route element={<PublicRoutes isLoggin={login} />}>
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                </Route>

                {/* Private routes */}
                <Route element={<AuthRoutes isLoggin={login} />}>
                    <Route path="profile" element={<Profile getUser={user} />} />
                    <Route path="dashboard" element={<DashContent />} />
                    <Route path="report" element={<Report />} />
                    <Route path="notifikasi" element={<Notifikasi />} />
                </Route>
            </Route>
        </Routes>
    );
};

export default Routing;
