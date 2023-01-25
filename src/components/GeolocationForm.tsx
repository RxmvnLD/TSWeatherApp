import { useForm, SubmitHandler } from "react-hook-form";
import { Coordinates } from "../config/types";
import { MORELIA_CORDS } from "../config/constants";

interface Props {
  sendDataToParent: (data: Coordinates | any) => void;
}

const GeolocationForm = ({ sendDataToParent }: Props) => {
  const { register, handleSubmit } = useForm<Coordinates>();
  const onSubmit: SubmitHandler<Coordinates> = (data) => {
    sendDataToParent(data);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col lg:flex-row items-center gap-5 "
    >
      <label>Latitude</label>

      <input
        {...register("latitude", { required: true, valueAsNumber: true })}
        className="text-black"
        placeholder="Ej: 19.7023"
      />
      <label>Longitude</label>
      <input
        {...register("longitude", { required: true, valueAsNumber: true })}
        className="text-black"
        placeholder="Ej: -101.1928"
      />
      <input
        type="submit"
        className="bg-teal-400 px-4 py-2 text-blue-950 font-semibold rounded-sm"
      />
    </form>
  );
};

export default GeolocationForm;
