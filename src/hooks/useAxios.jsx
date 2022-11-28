import axios from "axios";
import { useSelector } from "react-redux";

const BASE_URL = "https://13791.fullstack.clarusway.com/";
export const axiosPublic = axios.create({
  baseURL: BASE_URL,
});

export const useAxios = () => {
  const { token } = useSelector((state) => state.auth);

  const axiosWithToken = axios.create({
    baseURL: BASE_URL,
    headers: { Authorization: `Token ${token}` },
  });

  return {
    axiosWithToken,
  };
};

export default useAxios;
