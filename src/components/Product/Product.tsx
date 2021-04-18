import React from "react";
import styled from "styled-components";

interface ProductProps {
  name: string;
  price: number;
  categ: string;
}

const Product: React.FC<ProductProps> = ({ name, price, categ }) => {
  return (
    <ProductContainer>
      <h3>{name}</h3>
      <p>{price}</p>
      <p>{categ}</p>
      <Button>ADD TO CART</Button>
    </ProductContainer>
  );
};

export default Product;

const Button = styled.button`
  padding: 10px 20px;
  max-width: 120px;
`;

const ProductContainer = styled.div`
  border: 1px solid red;
`;
