import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { AppState } from ".";

const initialState: Posts = {
  posts: [],
  status: null,
};

interface Posts {
  posts: PostsInfo[];
  status: string | null;
}

interface PostsInfo {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const fetchPosts: any = createAsyncThunk(
  "posts/fetchPosts",
  async () => {
    const response = await axios.get(`${process.env.REACT_APP_POSTS_API}`);
    console.log(response.data);
    return response.data;
  }
);

export const postSlice = createSlice({
  name: "allPosts",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: {
    [fetchPosts.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchPosts.fulfilled]: (state, action) => {
      state.posts = state.posts.concat(action.payload);
      state.status = "succeded";
    },

    [fetchPosts.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export const { reset } = postSlice.actions;

export const selectPosts = (state: AppState) => state.allPosts.posts;

export default postSlice.reducer;
