import { useEffect } from "react";
import { Weather } from "../config/types";

type WeatherInfoProps = {
  data: Weather;
  bgURL?: string;
};

const WeatherInfo = ({ data, bgURL }: WeatherInfoProps) => {
  useEffect(() => {
    console.log(bgURL);
  }, [data, bgURL]);
  return (
    <section
      className="w-full lg:w-1/4 flex justify-center text-center bg-no-repeat bg-cover bg-center p-5"
      style={{ backgroundImage: `url(${bgURL})` }}
    >
      <div className="self-center flex flex-col justify-center gap-5 bg-gray-600/70 p-5 rounded-md">
        <h1 className="text-2xl font-semibold">
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
      </div>
    </section>
  );
};

export default WeatherInfo;
