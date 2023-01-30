import { MouseEventHandler, useState } from "react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { TfiWorld } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
const BurguerMenu = () => {
  const { isAuthenticated } = useAuth0();
  const [isOpen, setIsOpen] = useState<Boolean>(false);

  const handleClick: MouseEventHandler<HTMLElement> = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <section
      className="lg:hidden flex justify-end self-center w-full "
      onClick={handleClick}
    >
      <div className="text-xl md:text-3xl font-bold">
        {!isOpen ? <HiOutlineMenuAlt3 /> : <HiOutlineX />}
      </div>
      <ul
        className={`lg:hidden w-max fixed -z-10 bg-[#122a52] transition-all duration-400 ease-in ${
          isOpen ? "top-10" : "top-[-550px]"
        }`}
      >
        <div className="flex flex-col items-end px-5 pt-2 md:pt-10 pb-5">
          <li className="pr-2  py-3 cursor-pointer" onClick={handleClick}>
            <Link to="/">HOME</Link>
          </li>
          {isAuthenticated ? (
            <>
              <li className="pr-2  py-3 cursor-pointer" onClick={handleClick}>
                <Link to="/geolocation">GEOLOCATION</Link>
              </li>
              <li className="pr-2  py-3 cursor-pointer" onClick={handleClick}>
                <Link to="/city">SEARCH CITY</Link>
              </li>
              <li className="pr-2  py-3 cursor-pointer" onClick={handleClick}>
                <Link to="/history">SEARCH HISTORY</Link>
              </li>
              <li
                className="bg-teal-300 text-[#0a192f] w-min px-3 py-2 cursor-pointer"
                onClick={handleClick}
              >
                <Link to="/account">ACCOUNT</Link>
              </li>
            </>
          ) : (
            <>
              <li className="pr-2  py-3 cursor-pointer" onClick={handleClick}>
                SOLUTIONS
              </li>
              <li className="pr-2  py-3 cursor-pointer" onClick={handleClick}>
                CLIENTS
              </li>
              <li className="pr-2  py-3 cursor-pointer" onClick={handleClick}>
                COMPANY
              </li>
              <li
                className="bg-teal-300 text-[#0a192f] w-min px-3 py-2 cursor-pointer"
                onClick={handleClick}
              >
                <Link to="/login">LOGIN</Link>
              </li>
            </>
          )}
          <li
            className="pr-2  py-3 flex flex-row items-center gap-3 cursor-pointer"
            onClick={handleClick}
          >
            {" "}
            ENGLISH
            <TfiWorld className="text-lg font-bold cursor-pointer" />
          </li>
        </div>
      </ul>
    </section>
  );
};

export default BurguerMenu;
