import { useEffect, useState } from "react";
import { axiosGet } from "../helpers/axiosInstance";
import { APOD_URL } from "../config";

type BackgroundData = {
  date: string;
  explanation: string;
  hdurl: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
};

const backgroundDataInitState = {
  date: "",
  explanation: "",
  hdurl: "",
  media_type: "",
  service_version: "",
  title: "",
  url: "",
};
const useGetBackground = () => {
  const [background, setBackground] = useState<BackgroundData>(
      backgroundDataInitState
    ),
    [error, setError] = useState<unknown>(),
    [loading, setLoading] = useState<boolean>(true);

  const getBackground = async () => {
    try {
      const res = await axiosGet(APOD_URL);
      setBackground(res);
      setLoading(false);
    } catch (error: unknown) {
      console.log(error);
      setError(error);
    }
  };

  useEffect(() => {
    if (loading) {
      setBackground({
        ...backgroundDataInitState,
        hdurl:
          "https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
      });
    }
    getBackground();
  }, []);
  return { background };
};

export default useGetBackground;
