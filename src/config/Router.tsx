import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Landing from "../pages/Lading";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import Account from "../pages/Account";
import { useAuth0 } from "@auth0/auth0-react";
import Home from "../pages/Home";
import Geolocation from "../pages/Geolocation";
import SearchCity from "../pages/SearchCity";
import ProtectedRoutes from "../components/ProtectedRoutes";

const Router = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={isAuthenticated ? <Home /> : <Landing />} />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoutes isAuth={isAuthenticated} />}>
          <Route path="/account" element={<Account />} />
          <Route path="/geolocation" element={<Geolocation />} />
          <Route path="/city" element={<SearchCity />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
