import { useEffect, useState } from "react";
import useGetWeather from "../hooks/useGetWeather";
import WeatherInfo from "../components/WeatherInfo";
import MapView from "../components/MapView";
import { Coordinates } from "../config/types";
import { MORELIA_CORDS } from "../config/constants";
import useGetCityPicture from "../hooks/useGetCityPicture";

const SearchCity = () => {
  const [cords, setCords] = useState<Coordinates>(MORELIA_CORDS),
    [cityName, setCityName] = useState({ cityName: "Morelia" });
  const { weather } = useGetWeather(cords);
  const { cityPicture } = useGetCityPicture(cityName);

  useEffect(() => {
    console.log("city name: ", weather?.name);
    setCityName({ cityName: weather.name });
    console.log("url: ", cityPicture?.url);
  }, [weather]);

  function getDataFromForm(MapCords: Coordinates) {
    setCords(MapCords);
  }

  return (
    <main className="flex flex-col items-center py-10 gap-10">
      <div className="flex flex-col lg:flex-row gap-20 w-full justify-center h-full mb-20">
        {/*Mapbox Map*/}
        <MapView sendDataToParent={getDataFromForm} />
        {/*Weather info*/}
        <WeatherInfo data={weather} bgURL={cityPicture?.src?.original} />
      </div>
    </main>
  );
};

export default SearchCity;
