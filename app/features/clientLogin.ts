import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ClientStateProps, ClientDetailsProps } from "../lib/index";

const initialState: ClientStateProps = {
  value:
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("clientLogin") || "null")
      : null,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<ClientDetailsProps>) => {
      state.value = action.payload;
      localStorage.setItem("clientLogin", JSON.stringify(state.value));
    },
    logout: (state) => {
      state.value = null;
      localStorage.removeItem("clientLogin");
    },
  },
});

export const { login, logout } = loginSlice.actions;

export default loginSlice.reducer;
