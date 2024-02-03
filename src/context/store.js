import { configureStore } from "@reduxjs/toolkit";
import wishesSlice from "./wishesSlice";
import cartSlice from "./cartSlice";
import singleSlice from "./singleSlice";

export const store = configureStore({
  reducer: {
    wishes: wishesSlice,
    cart: cartSlice,
    pendingCart: singleSlice,
  },
});
