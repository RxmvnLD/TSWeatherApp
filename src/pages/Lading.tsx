import useGetBackground from "../hooks/useGetBackground";
import staff from "../assets/images/staff.jpg";
import phone from "../assets/images/phone.jpg";
import { SiNasa } from "react-icons/si";
import { Link } from "react-router-dom";

const aboutBgUrl: string =
    "https://canteradigital.io/wp-content/uploads/2022/07/dark-pattern-bg.webp",
  gerInTouchBgUrl: string =
    "https://canteradigital.io/wp-content/uploads/2022/07/v748-toon-103-1-scaled.webp";

const Landing = () => {
  const { background } = useGetBackground();
  const bgImage = background.hdurl;

  return (
    <main>
      {/* //Api seccction */}
      <section
        className="w-full self-center h-[calc(100vh_-_4rem)] bg-no-repeat bg-cover bg-center flex flex-col justify-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="text-3xl lg:text-8xl px-10 font-extrabold self-center ">
          Check out our new weather{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-teal-400">
            API
          </span>{" "}
          powered by{" "}
          <SiNasa className="inline text-[4rem] lg:text-[14rem] font-extrabold text-red-500" />{" "}
          geolocation services
        </div>
        <Link
          to="/login"
          className="bg-teal-400 rounded-sm text-blue-950 px-3 lg:px-6 py-1 lg:py-3 m-5 text-xl lg:text-5xl self-center font-extrabold"
        >
          {" "}
          Try it out!
        </Link>
        {/* //Solutions section */}
      </section>
      <section className="h-full pt-20 lg:pt-10 bg-white text-center flex flex-col items-center gap-10 text-blue-950">
        <div className="text-3xl lg:text-4xl lg:mx-20 font-extrabold w-4/5 lg:w-3/5">
          Deliver the Best Experience to Your Clients, With Benefits of
          Nearshore and Top Tech Talent
        </div>
        <div className="flex flex-col lg:flex-row justify-evenly w-full">
          <div className="w-full lg:w-1/2 lg:max-h-max">
            <h3 className="text-3xl lg:text-4xl font-extrabold">
              Staff Augmentation
            </h3>
            <img
              src={staff}
              alt="Staff image"
              className="mt-2 w-full lg:h-80"
            />
          </div>
          <div className="w-full lg:w-1/2 lg:max-h-max">
            <h3 className={`text-3xl lg:text-4xl font-extrabold`}>
              Software Development
            </h3>
            <img
              src={phone}
              alt="Phone image"
              className="mt-2 w-full lg:h-80"
            />
            <div></div>
          </div>
        </div>
      </section>
      {/* //About section */}
      <section
        className="text-center flex flex-col items-center justify-around py-20 lg:py-28 lg:px-46 gap-10 bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url(${aboutBgUrl})` }}
      >
        <div className="text-3xl lg:text-4xl font-extrabold">
          Learn More About Cantera Digital
        </div>
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-0 items-center content-center lg:px-72">
          {/* //Solutions card */}
          <div className="w-full px-10 lg:w-1/3">
            <h2 className="text-2xl lg:text-3xl font-extrabold">Solutions</h2>
            <p className="text-left mt-3 lg:mt-5 mb-5 lg:mb-16">
              As a full-service software development company we provide both
              development staff augmentation services and targeted or
              comprehensive software development solutions.
            </p>
            <div className="cursor-pointer bg-white text-blue-950 font-medium max-w-min m-auto px-10 py-4 text-s">
              SOLUTIONS
            </div>
          </div>
          {/* //Clients card */}
          <div className="w-full px-10 lg:w-1/3 text-red-200">
            <h2 className="text-2xl lg:text-3xl font-extrabold">Clients</h2>
            <p className="text-left mt-3 lg:mt-5 mb-5 lg:mb-16">
              Our clients rely on our ability to be flexible to their aggressive
              and changing development requirements. From market leaders to
              startups, they serve various industries domestically and globally.
            </p>
            <div className="cursor-pointer bg-red-200 text-blue-950 font-medium max-w-min m-auto px-10 py-4 text-s">
              CLIENTS
            </div>
          </div>
          {/* //Company card */}
          <div className="w-full px-10 lg:w-1/3 text-teal-300">
            <h2 className="text-2xl lg:text-3xl font-extrabold">Company</h2>
            <p className="text-left mt-3 lg:mt-5 mb-5 lg:mb-16">
              Since our founding in 2015, we have delivered solutions across
              platforms using the latest technologies and software languages.
              Our partners and employees are experts in their fields and aim to
              deliver the highest quality solutions.
            </p>
            <div className="cursor-pointer bg-teal-300 text-blue-950 font-medium max-w-min m-auto px-10 py-4 text-s">
              COMPANY
            </div>
          </div>
        </div>
      </section>
      {/* //Get in touch section */}
      <section
        className="py-16 lg:py-28 lg:px-72 bg-no-repeat bg-cover bg-center text-blue-950"
        style={{ backgroundImage: `url(${gerInTouchBgUrl})` }}
      >
        <div className="text-center lg:w-1/2">
          <p className="text-3xl lg:text-4xl font-extrabold">GET IN TOUCH!</p>
          <p className="text-2xl lg:text-3xl font-medium">
            Tell us about your project
          </p>
        </div>
        <form className="w-full px-5 lg:w-1/2 mt-10 flex flex-col gap-5">
          <div className="flex flex-row items-center content-center gap-8">
            <input
              className="w-1/2 text-sm placeholder-gray-500 h-9 px-3 bg-gray-100 border rounded-md border-gray-300 "
              type="text"
              placeholder="First Name*"
            />
            <input
              className="w-1/2 text-sm placeholder-gray-500 h-9 px-3 bg-gray-100 border rounded-md border-gray-300 "
              type="text"
              placeholder="Last Name*"
            />
          </div>
          <input
            type="tel"
            className="text-sm placeholder-gray-500 h-9 px-3 bg-gray-100 border rounded-md border-gray-300 "
            placeholder="Phone Number*"
          />
          <input
            type="text"
            className="text-sm placeholder-gray-500 h-9 px-3 bg-gray-100 border rounded-md border-gray-300 "
            placeholder="Email Adress*"
          />
          <input
            type="text"
            className="text-sm placeholder-gray-500 h-9 px-3 bg-gray-100 border rounded-md border-gray-300 "
            placeholder="Topic*"
          />
          <textarea
            rows={4}
            className="text-sm placeholder-gray-500 lg:h-48 px-3 lg:py-2 bg-gray-100 border rounded-md border-gray-300"
            placeholder="Message*"
          />
          <div className="self-center m-auto  px-16 lg:px-24 py-2  bg-blue-950 text-white cursor-pointer">
            SUBMIT
          </div>
        </form>
      </section>
      {/*Steve jobs*/}
      <section className="bg-gradient-to-b from-[#0a192f] to-[#03070e] px-4 lg:px-80 py-16 lg:py-18 flex flex-col gap-10">
        <div className="text-sm lg:text-base flex flex-col lg:flex-row lg:items-center gap-1">
          <p className="tracking-wide">HIRE US TO TRANSFORM YOUR BUSINESS</p>
          <div className="w-32 h-0.5 bg-teal-300 ml-3"></div>
        </div>
        <div className="text-3xl lg:text-6xl lg:w-10/12 font-extrabold">
          “Innovation is what distinguishes leaders from followers.”
        </div>
        <div>{"-"} Steve Jobs</div>
      </section>
    </main>
  );
};

export default Landing;
