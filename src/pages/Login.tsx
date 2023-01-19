import { useAuth0 } from "@auth0/auth0-react";
import logo from "../assets/images/logo.webp";
import auth0 from "../assets/images/auth0.png";

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <main className="flex items-center justify-center h-[calc(100vh_-_10rem)] lg:h-[calc(100vh_-_20rem)]">
      <section className="w-10/12 lg:w-1/5 h-96 border-2 border-gray-500 rounded-xl flex flex-col items-center justify-center p-10 gap-3">
        <img src={logo} alt="Cantera Digital" className="w-40" />
        <h1 className="text-2xl font-bold">Ingresa a tu cuenta</h1>
        <div
          onClick={() => loginWithRedirect()}
          className="bg-teal-400 p-2 rounded-sm text-blue-950 font-bold text-center cursor-pointer flex flex-col gap-1"
        >
          <div>Log In</div>
          <img src={auth0} alt="Cantera Digital" className="w-24" />
        </div>
      </section>
    </main>
  );
};

export default Login;
