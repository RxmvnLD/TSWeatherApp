import { useEffect, useState } from "react";
import useGetWeather from "../hooks/useGetWeather";
import WeatherInfo from "../components/WeatherInfo";
import Map, { MapCords, MapInitialState } from "../components/Map";

const City = () => {
  const [cords, setCords] = useState<MapCords>(MapInitialState);
  const { weather } = useGetWeather(cords);

  function getDataFromForm(MapCords: MapCords) {
    setCords(MapCords);
  }

  return (
    <main className="flex flex-col items-center py-10 gap-10">
      {/*Input form*/}

      <div className="flex flex-col lg:flex-row gap-20 w-full justify-center h-full mb-20">
        {/*Mapbox Map*/}
        <Map sendDataToParent={getDataFromForm} />
        {/*Weather info*/}
        <WeatherInfo data={weather} />
      </div>
    </main>
  );
};

export default City;
