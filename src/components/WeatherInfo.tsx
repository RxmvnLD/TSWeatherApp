import { useEffect } from "react";
import { Weather } from "../config/types";
type WeatherInfoProps = {
  data: Weather;
  bgURL?: string;
  icon?: string;
};

const WeatherInfo = ({ data, bgURL, icon }: WeatherInfoProps) => {
  useEffect(() => {}, [data]);
  return (
    <section
      className="w-full lg:w-1/4 flex flex-col py-5 bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${bgURL})` }}
    >
      <div className="self-center flex flex-col justify-center bg-gray-600/70 p-3 rounded-md">
        <div className="flex flex-row gap-5">
          <h1 className="text-2xl font-semibold">
            {data.name}, {data.sys.country}{" "}
          </h1>
          <h2 className="text-xl">
            {" "}
            {data.main.temp} °C
            {icon && (
              <img
                src={icon}
                alt={data?.weather[0].description}
                className="inline w-10 h-10"
              />
            )}
            <span className="text-xs">{data?.weather[0].description}</span>
          </h2>
        </div>
        <div className="text-xs flex flex-row justify-between">
          <h3>Min: {data.main.temp_min} °C</h3>
          <h3>Max: {data.main.temp_max} °C</h3>
        </div>
        {/* <div>
          <h2 className="text-2xl font-semibold ">Temperature</h2>
          <p>
            {" "}
            Actual: 
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
          
        </div> */}
      </div>
    </section>
  );
};

export default WeatherInfo;
