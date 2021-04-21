import React from "react";
import styled from "styled-components";
import { useAppDispatch } from "../../redux/hook";
import { addCartItem, removeCartItem } from "../../redux/ProductSlice";

interface ProductProps {
  name: string;
  price: number;
  categ?: string;
  id: number;
}

const Product: React.FC<ProductProps> = ({ name, price, categ, id }) => {
  const [buttons, setButtons] = React.useState(Boolean);
  const dispatch = useAppDispatch();

  const addItem = () => {
    dispatch(addCartItem({ title: name, price: price, id: id }));
    setButtons(true);
  };
  const removeItem = () => {
    dispatch(removeCartItem(id));
    setButtons(false);
  };

  return (
    <ProductContainer>
      <h3>{name}</h3>
      <p>{price}</p>
      <p>{categ}</p>

      <Button disabled={buttons} onClick={addItem}>
        ADD TO CART
      </Button>
      <Button disabled={!buttons} onClick={removeItem}>
        REMOTE ITEM
      </Button>
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
