import { useState } from "react";
import useGetGeolocationImage from "../hooks/useGetGeolocationImage";
import GeolocationForm from "../components/GeolocationForm";
import Loader from "../components/Loader";
import useGetWeather from "../hooks/useGetWeather";
import WeatherInfo from "../components/WeatherInfo";
import { Coordinates } from "../config/types";
import { MORELIA_CORDS } from "../config/constants";

const Geolocation = () => {
  const [cords, setCords] = useState<Coordinates>(MORELIA_CORDS);
  const { geolocationImage, loading, error } = useGetGeolocationImage(cords);
  const { weather } = useGetWeather(cords);

  function getDataFromForm(formCords: Coordinates) {
    setCords(formCords);
  }

  return (
    <main className="flex flex-col items-center py-10 gap-10">
      {/*Input form*/}
      <GeolocationForm sendDataToParent={getDataFromForm} />
      {error?.msg && <p className="text-red-500">{error.msg}</p>}
      {loading ? (
        <Loader />
      ) : (
        <div className="flex flex-col lg:flex-row gap-10 px-10 w-full justify-center h-full">
          {/*NASA Map*/}
          <img
            src={geolocationImage.url}
            alt={geolocationImage.id}
            className="w-full lg:w-1/3 lg:ml-10"
          />
          {/*Weather info*/}
          <WeatherInfo data={weather} />
        </div>
      )}
    </main>
  );
};

export default Geolocation;
