import axios from "axios";
//@ts-ignore
const baseURL = process.env.REACT_APP_WEATHER_API_BASE_URL.replace(/\/$/, "");

export const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});
