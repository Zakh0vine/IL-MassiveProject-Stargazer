import { Routes, Route } from "react-router-dom";

import PublicRoutes from "./PublicRoutes";
import AuthRoutes from "./AuthRoutes";

const Routing = () => {
    const token = localStorage.getItem("Authorization");
    const isLoggin = token === null ? false : true;

    return (
        <Routes>
            <Route path="/">
                {/* Public routes */}
                <Route element={<PublicRoutes isLoggin={isLoggin} />}>
                    <Route path="login" element={<Signup />} />
                </Route>

                {/* Private routes */}
                <Route path="/" element={<AuthRoutes isLoggin={isLoggin} />}>
                    <Route path="dashboard" element={<Home />} />
                </Route>

                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
};

export default Routing;
