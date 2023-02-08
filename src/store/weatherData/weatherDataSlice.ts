import { WeatherData } from "./../../types/weather.types";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  weatherData: WeatherData[];
  location: string;
}

const initialState: InitialState = {
  weatherData: [],
  location: "",
};

export const weatherDataSlice = createSlice({
  name: "weatherData",

  initialState,

  reducers: {
    ADD_WEATHER_DATA: (state, action) => {
      state.weatherData.push(action.payload);
    },

    RESET_WEATHER_DATA: (state) => {
      state.weatherData = [];
    },
    SET_LOCATION: (state, action) => {
      state.location = action.payload;
    },
    RESET_LOCATION: (state, action) => {
      state.location = "";
    },
  },
});

// Action creators are generated for each case reducer function

export const {
  ADD_WEATHER_DATA,
  RESET_WEATHER_DATA,
  SET_LOCATION,
  RESET_LOCATION,
} = weatherDataSlice.actions;

export default weatherDataSlice.reducer;
