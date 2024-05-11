import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { CartStateProps, CartProductProps } from "../lib/index";

const initialState: CartStateProps = {
  value:
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("clientCart") || "[]")
      : [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addOneToCart: (state, action: PayloadAction<string>) => {
      const sku = action.payload;
      const existingProduct = state.value.find((item) => item.sku === sku);

      if (existingProduct && existingProduct.quantity >= 10) {
        return;
      }

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.value.push({ sku: sku, quantity: 1 });
      }

      localStorage.setItem("clientCart", JSON.stringify(state.value));
    },
    removeOneFromCart: (state, action: PayloadAction<string>) => {
      const index = state.value.findIndex(
        (item) => item.sku === action.payload
      );

      if (index !== -1 && state.value[index].quantity > 1) {
        state.value[index].quantity -= 1;
      } else {
        state.value.splice(index, 1);
      }

      localStorage.setItem("clientCart", JSON.stringify(state.value));
    },
    removeProduct: (state, action: PayloadAction<string>) => {
      const index = state.value.findIndex(
        (item) => item.sku === action.payload
      );
      if (index !== -1) {
        state.value.splice(index, 1);
      }

      localStorage.setItem("clientCart", JSON.stringify(state.value));
    },
    emptyCart: (state) => {
      state.value = [];

      localStorage.setItem("clientCart", JSON.stringify(state.value));
    },
  },
});

export const { addOneToCart, removeOneFromCart, removeProduct, emptyCart } =
  cartSlice.actions;

export default cartSlice.reducer;
