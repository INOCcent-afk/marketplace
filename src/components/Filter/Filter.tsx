import React from "react";
import { useAppDispatch } from "../../redux/hook";
import {
  fetchFilterElectronics,
  fetchFilterJewelry,
  fetchFilterMenClothing,
  fetchFilterWomenClothing,
} from "../../redux/ProductSlice";

const Filter = () => {
  const dispatch = useAppDispatch();

  const fetch = (categ: any) => {
    dispatch(categ);
  };

  return (
    <>
      <h1 onClick={() => fetch(fetchFilterWomenClothing())}>women clothing</h1>
      <h1 onClick={() => fetch(fetchFilterJewelry())}>jewelry</h1>
      <h1 onClick={() => fetch(fetchFilterMenClothing())}>men clothing</h1>
      <h1 onClick={() => fetch(fetchFilterElectronics())}>electronics</h1>
    </>
  );
};

export default Filter;
