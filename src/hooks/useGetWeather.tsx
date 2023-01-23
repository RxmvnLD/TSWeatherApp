import { useState, useEffect } from "react";
import { axiosGet } from "../helpers/axiosInstance";
import { OPEN_WEATHER_KEY } from "../config/constants";

interface useGetWeatherProps {
  latitude: number;
  longitude: number;
}

export type Weather = {
  base: string;
  clouds: { all: number };
  cod: number;
  coord: { lon: number; lat: number };
  dt: number;
  id: number;
  main: {
    feels_like: number;
    grnd_level: number;
    humidity: number;
    pressure: number;
    sea_level: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  name: string;
  sys: {
    country: string;
    id: number;
    sunrise: number;
    sunset: number;
    type: number;
  };
  timezone: number;
  visibility: number;
  weather: [{ description: string; icon: string; id: number; main: string }];
  wind: { deg: number; gust: number; speed: number };
};

const WeatherInitState: Weather = {
  base: "",
  clouds: { all: 0 },
  cod: 0,
  coord: { lon: 0, lat: 0 },
  dt: 0,
  id: 0,
  main: {
    feels_like: 0,
    grnd_level: 0,
    humidity: 0,
    pressure: 0,
    sea_level: 0,
    temp: 0,
    temp_max: 0,
    temp_min: 0,
  },
  name: "",
  sys: {
    country: "",
    id: 0,
    sunrise: 0,
    sunset: 0,
    type: 0,
  },
  timezone: 0,
  visibility: 0,
  weather: [{ description: "", icon: "", id: 0, main: "" }],
  wind: { deg: 0, gust: 0, speed: 0 },
};

const useGetWeather = ({ latitude, longitude }: useGetWeatherProps) => {
  const [weather, setWeather] = useState<Weather>(WeatherInitState);
  const getWeather = async () => {
    try {
      const res = await axiosGet(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${OPEN_WEATHER_KEY}&lang=en&units=metric`
      );
      setWeather(res);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getWeather();
  }, [latitude, longitude]);

  return { weather };
};

export default useGetWeather;
