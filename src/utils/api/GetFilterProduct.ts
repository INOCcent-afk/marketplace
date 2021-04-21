import axios from "axios";

export const getFilterProductJewelry = async () => {
  const response = await axios.get(
    `https://secret-ocean-49799.herokuapp.com/${process.env.REACT_APP_PRODUCTS_API}/category/jewelery`
  );
  return response.data;
};

export const getFilterProductElectronics = async () => {
  const response = await axios.get(
    `https://secret-ocean-49799.herokuapp.com/${process.env.REACT_APP_PRODUCTS_API}/category/electronics`
  );
  return response.data;
};
