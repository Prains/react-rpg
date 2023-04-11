import { configureStore } from "@reduxjs/toolkit";
import settingReducer from "./reducers/settings";
import characterReducer from "./reducers/character";

const store = configureStore({
  reducer: {
    settings: settingReducer,
    character: characterReducer,
  },
});

export default store;
