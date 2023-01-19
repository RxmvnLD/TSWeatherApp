import axios from "axios";

const axiosInstance = axios.create({});

const axiosGet = async (url: string) => {
  try {
    const res = await axiosInstance.get(url);
    return res.data;
  } catch (error: unknown) {
    throw error.response;
  }
};

export { axiosGet };
