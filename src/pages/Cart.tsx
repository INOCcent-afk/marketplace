import React, { FC } from "react";
import CartProduct from "../components/CartProduct";
import Product from "../components/Product";
import { useAppSelector } from "../redux/hook";

const Cart: FC = () => {
  const cart = useAppSelector((state) => state.allProducts.cart);

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <>
      {cart.map((product) => (
        <>
          <div>
            <CartProduct name={product.title} price={product.price} />
          </div>
        </>
      ))}
      <h1>${totalPrice.toFixed(2)}</h1>
    </>
  );
};

export default Cart;
