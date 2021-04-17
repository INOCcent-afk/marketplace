import React, { useEffect } from "react";
import Post from "../components/Post";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { fetchPosts } from "../redux/PostSlice";

const Shop = () => {
  const dispatch = useAppDispatch();

  const posts = useAppSelector((state) => state.allPosts.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  return (
    <>
      {posts.map((post) => (
        <Post title={post.title} key={post.id} desc={post.body} />
      ))}

      <h1>SHOP</h1>
    </>
  );
};

export default Shop;
