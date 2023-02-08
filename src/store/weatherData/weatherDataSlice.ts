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
    RESET: (state) => {
      state.weatherData = [];
    },
  },
});

// Action creators are generated for each case reducer function

export const { ADD_WEATHER_DATA, RESET } = weatherDataSlice.actions;

export default weatherDataSlice.reducer;
