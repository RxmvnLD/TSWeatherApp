import { useState, useEffect } from "react";
import { axiosGet } from "../helpers/axiosInstance";
import { MAPBOX_GEOCODING_KEY } from "../config/constants";
import { SearchResult } from "../config/types";

interface Props {
  searchText: string;
}
const useGetForwardGeocoding = ({ searchText }: Props) => {
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  const getForwardGeocoding = async () => {
    try {
      const res = await axiosGet(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchText}.json?access_token=${MAPBOX_GEOCODING_KEY}&autocomplete=true&fuzzyMatch=true&types=address,place,postcode,neighborhood,poi`
      );
      setSearchResults(res.features);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getForwardGeocoding();
  }, [searchText]);

  return { searchResults };
};

export default useGetForwardGeocoding;
