import { createSlice } from "@reduxjs/toolkit";

export const wishesSlice = createSlice({
  name: "wishes",
  initialState: {
    value: JSON.parse(localStorage.getItem("wishes")) || [],
  },
  reducers: {
    toggleWishes(state, action) {
      let index = state.value.findIndex((el) => el.id === action.payload.id);
      if (index < 0) {
        const data = (state.value = [...state.value, action.payload]);
      } else {
        state.value = state.value.filter((el) => el.id !== action.payload.id);
    }
    localStorage.setItem("wishes", JSON.stringify(state.value));
    },
  },
});

export const { toggleWishes } = wishesSlice.actions;
export default wishesSlice.reducer;
