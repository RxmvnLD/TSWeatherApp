import { Outlet } from "react-router-dom";
import Loader from "./Loader";
interface ProtectedRoutesProps {
  isAuth: boolean;
}

const ProtectedRoutes = ({ isAuth }: ProtectedRoutesProps) => {
  return <>{isAuth ? <Outlet /> : <Loader />}</>;
};

export default ProtectedRoutes;
