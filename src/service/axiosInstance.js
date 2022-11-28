import axios from "axios";

const escapedToken = JSON.parse(localStorage.getItem("persist:root"))?.token;

const token = escapedToken && JSON.parse(escapedToken);

export const axiosWithToken = axios.create({
  baseURL: "https://13791.fullstack.clarusway.com/",
  timeout: 1000,
  headers: { Authorization: `Token ${token}` },
});
