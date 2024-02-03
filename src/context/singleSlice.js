import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: JSON.parse(localStorage.getItem("pendingCart")) || [],
  },
  reducers: {
    incPendingCart: (state, action) => {
      let index = state.value.findIndex((el) => el.id === action.payload.id);
      if (index < 0) {
        state.value = [...state.value, { ...action.payload, quantity: 1 }];
      } else {
        state.value = state.value.map((item, inx) =>
          inx === index ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      localStorage.setItem('pendingCart', JSON.stringify(state.value))
    },
    decPendingCart: (state, action) => {
      const index = state.value.findIndex((el) => el.id === action.payload.id);
      if (index < 0) {
        state.value = [state.value, { ...action.payload, quantity: 1 }];
      } else {
        state.value = state.value.map((item, inx) =>
          inx === index ? { ...item, quantity: item.quantity - 1 } : item
        );
      }
      localStorage.setItem("pendingCart", JSON.stringify(state.value));
    },
    // removeCart: (state, action) => {
    //   state.value = state.value.filter((el) => el.id !== action.payload.id);
    //   localStorage.setItem("cart", JSON.stringify(state.value));
    // },
  },
});

export const {incPendingCart, decPendingCart, bilim } = cartSlice.actions;
export default cartSlice.reducer;
