import { createSlice } from "@reduxjs/toolkit";

const settingsSlice = createSlice({
  name: "settings",
  initialState: {
    settings: {
      difficult: "easy",
      size: "small",
    },
  },
  reducers: {
    setSettings: (state, action) => {
      state.settings = action.payload;
    },
  },
});

export const { setSettings } = settingsSlice.actions;
export default settingsSlice.reducer;
