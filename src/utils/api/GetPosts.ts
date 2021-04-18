import axios from "axios";

export const getPosts = async () => {
  const response = await axios.get(`${process.env.REACT_APP_POSTS_API}`);
  return response.data;
};
