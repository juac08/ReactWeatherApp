import { useEffect, useState } from "react";
import { axiosInstance } from "../../axios";
import { WeatherData } from "../../types/weather.types";

export const useFetchData = (url: string) => {
  const [data, setData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get(
        `?q=${url}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
      );
      setData(response.data);
    } catch (error: any) {
      setError(error.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (!url) return;
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return { data, loading, error };
};

export const useFetchLocation = () => {
  const [cityName, setCityName] = useState("");

  const getLocation = async (latitude: number, longitude: number) => {
    try {
      const data = await axiosInstance.get(
        `?lat=${latitude}&lon=${longitude}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
      );
      setCityName(data.data.name);
      localStorage.setItem("location", JSON.stringify(data.data.name));
    } catch (error: any) {
      console.log(error);
    }
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      getLocation(latitude, longitude);
    });
  }, []);

  return { cityName };
};
