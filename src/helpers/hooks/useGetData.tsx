import { useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { axiosInstance } from "../../axios";
import { RootState } from "../../store/store";
import {
  ADD_WEATHER_DATA,
  SET_LOCATION,
} from "../../store/weatherData/weatherDataSlice";
import { WeatherData } from "../../types/weather.types";

export const useFetchData = (url: string) => {
  const [data, setData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const weatherData = useSelector(
    (state: RootState) => state.weatherData.weatherData
  );
  const Toast = useToast();

  const fetchData = async () => {
    try {
      setLoading(true);
      const isDataAvailable = weatherData.find((data) => data.name === url);
      if (!isDataAvailable) {
        const response = await axiosInstance.get(
          `?q=${url}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
        );
        setData(response.data);
        dispatch(ADD_WEATHER_DATA(response.data));
      } else {
        setData(isDataAvailable);
      }
    } catch (error: any) {
      Toast({
        description: "City not found. Please try again.",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      setError(error.response.statusText);
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
  const dispatch = useDispatch();
  const Toast = useToast();

  const getLocation = async (latitude: number, longitude: number) => {
    try {
      const data = await axiosInstance.get(
        `?lat=${latitude}&lon=${longitude}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
      );
      setCityName(data.data.name);
      dispatch(SET_LOCATION(data.data.name));
    } catch (error: any) {
      Toast({
        description: "There was an error fetching your location.",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    }
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      getLocation(latitude, longitude);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { cityName };
};
