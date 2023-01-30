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
  const { weather, weatherIconURL } = useGetWeather(cords);
  const { cityPicture } = useGetCityPicture(cityName);

  useEffect(() => {
    setCityName({ cityName: weather.name });
  }, [weather]);

  function getDataFromMap(MapCords: Coordinates) {
    setCords(MapCords);
  }

  return (
    <main className="flex flex-col items-center py-10 gap-10">
      <div className="flex flex-col lg:flex-row gap-20 w-full justify-center h-full mb-20">
        {/*Mapbox Map*/}
        <MapView sendDataToParent={getDataFromMap} />
        {/*Weather info*/}
        <WeatherInfo
          data={weather}
          bgURL={cityPicture?.src?.original}
          icon={weatherIconURL}
        />
      </div>
    </main>
  );
};

export default SearchCity;
