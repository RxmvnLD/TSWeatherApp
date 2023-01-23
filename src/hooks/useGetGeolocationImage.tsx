import { useState, useEffect } from "react";
import { axiosGet } from "../helpers/axiosInstance";
import { NASA_KEY } from "../config/constants";

type GeolocationImage = {
  date: string;
  id: string;
  resource: {
    dataset: string;
    planet: string;
  };
  servoce_version: string;
  url: string;
};
const geolocationImageInitState = {
  date: "",
  id: "",
  resource: {
    dataset: "",
    planet: "",
  },
  servoce_version: "",
  url: "",
};

type GeolocationError = {
  msg: string;
  service_version: string;
};

const GeolocationErrorInitState = {
  msg: "",
  service_version: "",
};
interface useGetGeolocationImageProps {
  latitude: number;
  longitude: number;
}

const useGetGeolocationImage = ({
  latitude,
  longitude,
}: useGetGeolocationImageProps) => {
  const [geolocationImage, setGeolocationImage] = useState<GeolocationImage>(
      geolocationImageInitState
    ),
    [error, setError] = useState<GeolocationError>(GeolocationErrorInitState),
    [loading, setLoading] = useState<boolean>(true);

  async function getImage(): Promise<void> {
    try {
      const res = await axiosGet(
        `https://api.nasa.gov/planetary/earth/assets?lon=${longitude}&lat=${latitude}&date=2022-01-01&dim=0.15&api_key=${NASA_KEY}`
      );
      setLoading(false);
      setGeolocationImage(res);
      setError(GeolocationErrorInitState);
    } catch (error) {
      setError(error.data);
    }
  }
  useEffect(() => {
    console.log("new cords: ", latitude, longitude);
    getImage();
  }, [latitude, longitude]);

  return { geolocationImage, loading, error };
};

export default useGetGeolocationImage;
