import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AppState } from ".";
import { getPosts as getPostsFromApi } from "../utils/api/GetPosts";

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
    const posts = await getPostsFromApi();
    return posts;
  }
);

export const postSlice = createSlice({
  name: "allPosts",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPosts.pending]: (state) => {
      state.status = "loading";
    },
    [fetchPosts.fulfilled]: (state, { payload }) => {
      state.posts = payload;
      state.status = "succeded";
    },

    [fetchPosts.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

export const selectPosts = (state: AppState) => state.allPosts.posts;

export default postSlice.reducer;
