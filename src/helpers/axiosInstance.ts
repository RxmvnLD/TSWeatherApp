import axios from "axios";
import { PEXELS_KEY} from "../config/constants";

const axiosInstance = axios.create({});

type axiosHeaders={
    headers: {"Authorization": string}
}

const axiosGet = async (url: string, headers?:axiosHeaders) => {
  try {
    const res = await axiosInstance.get(url, headers);
    return res.data;
  } catch (error) {
    throw error.response;
  }
};

export { axiosGet };
