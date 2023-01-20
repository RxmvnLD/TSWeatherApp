import { Navigate, Outlet } from "react-router-dom";

interface ProtectedRoutesProps {
  isAuth: boolean;
}

const ProtectedRoutes = ({ isAuth }: ProtectedRoutesProps) => {
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
