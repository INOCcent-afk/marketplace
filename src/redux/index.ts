import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./PostSlice";
import productReducer from "./ProductSlice";

const store = configureStore({
  reducer: {
    allPosts: postReducer,
    allProducts: productReducer,
  },
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
