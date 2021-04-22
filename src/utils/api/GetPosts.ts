import axios from "axios";

export const getPosts = async () => {
  const response = await axios.get(
    `https://secret-ocean-49799.herokuapp.com/${process.env.REACT_APP_POSTS_API}`
  );
  return response.data;
};
