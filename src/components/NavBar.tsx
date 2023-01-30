import { TfiWorld } from "react-icons/tfi";
import logo from "../assets/images/logo.webp";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import BurguerMenu from "./BurguerMenu";

const NavBar = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="sticky top-0 z-30 w-full">
      <nav className="flex flex-row py-3 lg:py-5 px-5 md:pr-10 lg:px-16 w-full bg-[#0a192f]">
        <Link to="/" className="w-1/3">
          <img
            className="w-full lg:w-1/4 justify-self-start cursor-pointer"
            src={logo}
            alt="Cantera Digital"
          />
        </Link>
        <BurguerMenu />
        <div className="justify-self-end ml-auto font-bold text-sm">
          <ul className=" flex-row gap-2 hidden lg:flex">
            <li className="px-6 py-3 cursor-pointer">
              <Link to="/">HOME</Link>
            </li>
            {isAuthenticated ? (
              <>
                <li className="px-6 py-3 cursor-pointer">
                  <Link to="/geolocation">GEOLOCATION</Link>
                </li>
                <li className="px-6 py-3 cursor-pointer">
                  <Link to="/city">SEARCH CITY</Link>
                </li>
                <li className="bg-teal-300 text-[#0a192f] px-6 py-3 cursor-pointer">
                  <Link to="/account">ACCOUNT</Link>
                </li>
              </>
            ) : (
              <>
                <li className="px-6 py-3 cursor-pointer">SOLUTIONS</li>
                <li className="px-6 py-3 cursor-pointer">CLIENTS</li>
                <li className="px-6 py-3 cursor-pointer">COMPANY</li>
                <li className="bg-teal-300 text-[#0a192f] px-6 py-3 cursor-pointer">
                  <Link to="/login">LOGIN</Link>
                </li>
              </>
            )}
            <li className="px-6 py-3 flex flex-row items-center gap-3 cursor-pointer">
              {" "}
              <TfiWorld className="text-lg font-bold cursor-pointer" />
              ENGLISH
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
