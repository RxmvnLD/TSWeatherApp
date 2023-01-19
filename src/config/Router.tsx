import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Landing from "../pages/Lading";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import Account from "../pages/Account";
import { useAuth0 } from "@auth0/auth0-react";
import Home from "../pages/Home";

const Router = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={isAuthenticated ? <Home /> : <Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<Account />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
