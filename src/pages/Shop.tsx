import React, { useEffect } from "react";
import ShopContainer from "../containers/ShopContainer";
import { useAppDispatch } from "../redux/hook";
import { clearCart } from "../redux/ProductSlice";

const Shop = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(clearCart());
  });

  return (
    <>
      <ShopContainer />
    </>
  );
};

export default Shop;
