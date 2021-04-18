import axios from "axios";

export const getProducts = async () => {
  const response = await axios.get(`${process.env.REACT_APP_PRODUCTS_API}`);
  return response.data;
};
