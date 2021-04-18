import React, { useEffect } from "react";
import Post from "../../components/Post";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { fetchPosts } from "../../redux/PostSlice";

const PostsContainer = () => {
  const dispatch = useAppDispatch();

  const posts = useAppSelector((state) => state.allPosts.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  console.log(posts);

  return (
    <>
      <div className="container">
        <h1>POSTS</h1>
        {posts.map((post) => (
          <Post title={post.title} desc={post.body} key={post.id} />
        ))}
      </div>
    </>
  );
};

export default PostsContainer;
