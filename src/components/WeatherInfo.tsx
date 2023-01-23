import { useEffect } from "react";
import { Weather } from "../hooks/useGetWeather";

type WeatherInfoProps = {
  data: Weather;
};
const WeatherInfo = ({ data }: WeatherInfoProps) => {
  useEffect(() => {}, [data]);
  return (
    <section className="w-full lg:w-1/4 text-center flex flex-col justify-center gap-5">
      <h1 className="text-3xl font-semibold">
        City: {data.name}, {data.sys.country}
      </h1>
      <div>
        <h2 className="text-2xl font-semibold ">Temperature</h2>
        <p>
          {" "}
          Actual: {data.main.temp} °C
          <br />
          Feels like: {data.main.feels_like} °C
          <br />
          Min: {data.main.temp_min} °C
          <br />
          Max: {data.main.temp_max} °C
        </p>
      </div>
      <div className="">
        <h2 className="text-2xl font-semibold ">Sky</h2>
        <p>
          {data?.weather[0].description}
          <br />
          {""}
          Wind speed: {data.wind.speed} km/h
        </p>
      </div>
    </section>
  );
};

export default WeatherInfo;
