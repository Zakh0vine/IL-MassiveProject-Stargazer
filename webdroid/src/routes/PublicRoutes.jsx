import { Navigate, Outlet } from "react-router-dom";

const PublicRoutes = ({ isLoggin }) => {
    return isLoggin ? <Navigate to="/dashboard" replace /> : <Outlet />;
};

export default PublicRoutes;
