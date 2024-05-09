import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { AdminStateProps, AdminDetailsProps } from "../lib/index";

const initialState: AdminStateProps = {
  value:
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("adminLogin") || "null")
      : null,
};

export const adminSlice = createSlice({
  name: "adminLogin",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<AdminDetailsProps>) => {
      state.value = action.payload;
      localStorage.setItem("adminLogin", JSON.stringify(state.value));
    },
    logout: (state) => {
      state.value = null;
      localStorage.removeItem("adminLogin");
    },
  },
});

export const { login, logout } = adminSlice.actions;

export default adminSlice.reducer;
