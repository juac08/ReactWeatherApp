import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  theme: "light" | "dark";
  tempUnit: "C" | "F";
}

const initialState: InitialState = {
  theme: "light",
  tempUnit: "C",
};

export const settingsSlice = createSlice({
  name: "settings",

  initialState,

  reducers: {
    SET_THEME: (state, action) => {
      return (state.theme = action.payload);
    },
    SET_UNIT: (state, action) => {
      return (state.tempUnit = action.payload);
    },
  },
});

// Action creators are generated for each case reducer function

export const { SET_THEME } = settingsSlice.actions;

export default settingsSlice.reducer;
