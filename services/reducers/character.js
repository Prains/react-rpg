import { createSlice } from "@reduxjs/toolkit";

const characterSlice = createSlice({
  name: "character",
  initialState: {
    character: {
      name: "",
      health: 100,
      maxHealth: 100,
      class: "",
      armor: {
        health: 0,
        name: "",
      },
      weapon: {
        damage: 0,
        name: "",
      },
      money: 0,
    },
  },
  reducers: {
    setCharacter: (state, action) => {
      state.character = action.payload;
    },
  },
});

export const { setCharacter } = characterSlice.actions;
export default characterSlice.reducer;
