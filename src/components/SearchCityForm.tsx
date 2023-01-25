import { MouseEventHandler, useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { BsSearch } from "react-icons/bs";
import { Coordinates } from "../config/types";
import useGetForwardGeocoding from "../hooks/useGetForwardGeocoding";
import { SearchResult } from "../config/types";

type Inputs = {
  citySearch: string;
};

interface Props {
  sendDataToParent: (data: Coordinates | any) => void;
}

const SearchCityForm = ({ sendDataToParent }: Props) => {
  const [searchedResults, setSearchedResults] = useState<SearchResult[]>([]);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const { searchResults } = useGetForwardGeocoding({
    searchText: watch("citySearch"),
  });

  useEffect(() => {
    setSearchedResults(searchResults);
  }, [searchResults]);

  const onSubmit: SubmitHandler<Inputs> = () =>
    setSearchedResults(searchResults);

  return (
    <section>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="text-black flex flex-row items-center "
      >
        <input
          placeholder={`${
            errors?.citySearch
              ? "Required"
              : "Search for a street, zip code or city"
          }`}
          {...register("citySearch", { required: true })}
          className={`px-10 py-2 rounded-sm placeholder:text-xs w-full ${
            errors?.citySearch && "border-2 border-red-600"
          }`}
        />
        <button type="submit" className="text-1xl p-2 absolute">
          <BsSearch />
        </button>
      </form>
      <div
        className={`${
          searchedResults?.length ? "flex" : "hidden"
        } bg-white text-black flex flex-col text-xs gap-1 max-w-full`}
      >
        {searchedResults?.map((res) => (
          <div
            className="hover:bg-gray-200 p-2 cursor-pointer"
            onClick={() => {
              const cords: Coordinates = {
                latitude: res.center[1],
                longitude: res.center[0],
              };
              sendDataToParent(cords);
              setSearchedResults([]);
            }}
          >
            {res.place_name}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SearchCityForm;
