import React from "react";
import styled from "styled-components";

interface ProductProps {
  name: string;
  price: number;
}

const Product: React.FC<ProductProps> = ({ name, price }) => {
  return (
    <ProductContainer>
      <h3>{name}</h3>
      <p>{price}</p>
      <Button>-</Button>
      <Button>+</Button>
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
