import { useState, useEffect } from "react";
import { axiosGet } from "../helpers/axiosInstance";
import { NASA_KEY } from "../config/constants";
import {
  Coordinates,
  GeolocationImage,
  GeolocationError,
} from "../config/types";

const geolocationImageInitState: GeolocationImage = {
  date: "",
  id: "",
  resource: {
    dataset: "",
    planet: "",
  },
  servoce_version: "",
  url: "",
};

const GeolocationErrorInitState: GeolocationError = {
  /* msg: "",
  service_version: "", */
  message: "",
  name: "",
};

const useGetGeolocationImage = ({ latitude, longitude }: Coordinates) => {
  const [geolocationImage, setGeolocationImage] = useState<GeolocationImage>(
      geolocationImageInitState
    ),
    [error, setError] = useState<Error>(GeolocationErrorInitState),
    [loading, setLoading] = useState<boolean>(true);

  async function getImage(): Promise<void> {
    try {
      const res = await axiosGet(
        `https://api.nasa.gov/planetary/earth/assets?lat=${latitude}&lon=${longitude}&date=2022-01-01&dim=0.15&api_key=${NASA_KEY}`
      );
      setLoading(false);
      setGeolocationImage(res);
      setError(GeolocationErrorInitState);
    } catch (error) {
      if (error instanceof Error) {
        setError(error);
      }
    }
  }
  useEffect(() => {
    console.log("new cords: ", latitude, longitude);
    getImage();
  }, [latitude, longitude]);

  return { geolocationImage, loading, error };
};

export default useGetGeolocationImage;
