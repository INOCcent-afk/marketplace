import React from "react";
import styled from "styled-components";

interface PostProps {
  title: string;
  desc: string;
}

const Post: React.FC<PostProps> = ({ title, desc }) => {
  return (
    <PostContainer>
      <h1>{title}</h1>
      <h1>{desc}</h1>
    </PostContainer>
  );
};

export default Post;

const PostContainer = styled.div`
  border: 1px solid #000;
`;
