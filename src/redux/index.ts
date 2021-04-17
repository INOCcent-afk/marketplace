import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./PostSlice";

const store = configureStore({
  reducer: {
    allPosts: postReducer,
  },
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
