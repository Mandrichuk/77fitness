import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/clientCart";
import clientLoginReducer from "../features/clientLogin";
import adminLoginReducer from "../features/adminLogin";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    clientLogin: clientLoginReducer,
    adminLogin: adminLoginReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
