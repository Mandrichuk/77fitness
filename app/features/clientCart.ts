import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { CartStateProps, CartProductProps } from "../lib/index";

const initialState: CartStateProps = {
  value: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addOneToCart: (state, action: PayloadAction<string>) => {
      const sku = action.payload;
      const existingProductIndex = state.value.findIndex(
        (item) => item.sku === sku
      );

      if (existingProductIndex !== -1) {
        state.value[existingProductIndex].quantity += 1;
      } else {
        state.value.push({ sku: sku, quantity: 1 });
      }
    },
    removeOneFromCart: (state, action: PayloadAction<string>) => {
      const index = state.value.findIndex(
        (item) => item.sku === action.payload
      );


      if (state.value[index].quantity > 1) {
        state.value[index].quantity -= 1;
      } else {
        state.value.splice(index, 1);
      }
    },
    removeProduct: (state, action: PayloadAction<string>) => {
      const index = state.value.findIndex(
        (item) => item.sku === action.payload
      );
      if (index !== -1) {
        state.value.splice(index, 1);
      }
    },
    emptyCart: (state) => {
      state.value = [];
    },
  },
});

export const { addOneToCart, removeOneFromCart, removeProduct, emptyCart } =
  cartSlice.actions;

export default cartSlice.reducer;
