import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_WEATHER_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
