import { useState, useEffect } from "react";
import { PEXELS_KEY } from "../config/constants";
import { axiosGet } from "../helpers/axiosInstance";
import { pexelsPhoto } from "../config/types";

interface Props {
  cityName: string;
}

const useGetCityPicture = ({ cityName }: Props) => {
  const [cityPicture, setCityPicture] = useState<pexelsPhoto>();

  const getCityPicture = async () => {
    try {
      const res = await axiosGet(
        `https://api.pexels.com/v1/search?query=${cityName}&size=small&per_page=10`,
        {
          headers: { Authorization: PEXELS_KEY },
        }
      );
      setCityPicture(res.photos[0]);
    } catch (error) {}
  };

  useEffect(() => {
    getCityPicture();
  }, [cityName]);

  return { cityPicture };
};

export default useGetCityPicture;
