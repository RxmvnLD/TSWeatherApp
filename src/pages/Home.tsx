import { NASA_SATELLITE_URL, CITY_URL } from "../config/constants";
import { SiNasa } from "react-icons/si";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <main>
      <section className="w-full self-center h-[calc(100vh_-_4.1rem)] lg:h-[calc(100vh_-_5rem)] bg-no-repeat bg-cover bg-center flex flex-col lg:flex-row justify-center">
        {/*SATELLITE*/}
        <div
          className="w-full lg:w-1/2 h-full bg-no-repeat bg-cover bg-center text-xs lg:text-4xl px-5 lg:px-10 flex flex-col gap-5 lg:gap-10"
          style={{ backgroundImage: `url(${NASA_SATELLITE_URL})` }}
        >
          <div className="flex flex-row gap-5 lg:gap-10">
            <Link
              to="/geolocation"
              className="mt-4 lg:mt-14 h-min bg-black w-max"
            >
              How's the weather on your city? <br /> Check for it with
              geolocation{" "}
              <span className="text-[0.3rem] lg:text-xs">
                Powered by{" "}
                <SiNasa className="inline text-[1rem] lg:text-[2rem] font-extrabold text-red-500" />
              </span>{" "}
            </Link>
            <Link
              to="/geolocation"
              className="text-[0.5rem] self-center lg:text-xl h-min mt-4 lg:mt-14 bg-gradient-to-b from-[#004774] to-[#051e37]  px-5 lg:px-10 py-1 lg:py-2 rounded-sm"
            >
              Go
            </Link>
          </div>
        </div>

        <div className="w-full lg:w-2 h-2 lg:h-full bg-blue-950"></div>

        {/*MAPBOX*/}
        <div
          className="w-full lg:w-1/2 h-full bg-no-repeat bg-cover bg-right text-xs text-right lg:text-4xl px-5 lg:px-10 flex flex-col-reverse"
          style={{ backgroundImage: `url(${CITY_URL})` }}
        >
          <div className="flex flex-row-reverse items-center gap-5 lg:gap-10">
            <Link to="/city" className="mb-2 lg:mb-5 mr-2 lg:mr-12">
              Or search for a city <br /> and check the weather{" "}
            </Link>{" "}
            <Link
              to="/city"
              className="text-[0.5rem] lg:text-xl h-min bg-gradient-to-br from-[#a5755a] to-[#2f0413] px-5 lg:px-10 py-1 lg:py-2 rounded-sm "
            >
              Go
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
