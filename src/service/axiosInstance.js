//! USEAXIOS HOOK WAS WRITTEN INSTEAD OF USING THIS
/*
import axios from "axios";

const BASE_URL = "https://13791.fullstack.clarusway.com/";

export const axiosPublic = axios.create({
  baseURL: BASE_URL,
});

const escapedToken = JSON.parse(localStorage.getItem("persist:root"))?.token;
const token = escapedToken && JSON.parse(escapedToken);

export const axiosWithToken = axios.create({
  baseURL: BASE_URL,
  headers: { Authorization: `Token ${token}` },
});

axiosWithToken.interceptors.request.use((config) => {
  console.log("interceptor run");

  if (!config.headers["Authorization"]) {
    config.headers["Authorization"] = `Token ${token}`;
  }
  return config;
});


*/
