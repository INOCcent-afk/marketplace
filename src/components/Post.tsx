import React, { useEffect } from "react";
import { useAppDispatch } from "../redux/hook";

interface PostProps {
  title: string;
  desc: string;
}

const Post: React.FC<PostProps> = ({ title, desc }) => {
  return (
    <>
      <h1>{title}</h1>
      <h1>{desc}</h1>
    </>
  );
};

export default Post;
