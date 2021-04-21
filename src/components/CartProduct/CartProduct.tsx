import React, { FC } from "react";
import styled from "styled-components";

interface ProductProps {
  name: string;
  price: number;
  categ?: string;
}

const CartProduct: FC<ProductProps> = ({
  name,
  price,
  categ,
}: ProductProps) => {
  return (
    <>
      <ProductContainer>
        <h3>{name}</h3>
        <p>{price}</p>
        <p>{categ}</p>
      </ProductContainer>
    </>
  );
};

export default CartProduct;

const ProductContainer = styled.div`
  border: 1px solid red;
`;
