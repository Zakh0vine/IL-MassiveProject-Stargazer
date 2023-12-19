import { Navigate, Outlet } from "react-router-dom";

const AuthRoutes = ({ isLoggin }) => {
    return isLoggin ? <Outlet /> : <Navigate to="/" replace />;
};

export default AuthRoutes;
