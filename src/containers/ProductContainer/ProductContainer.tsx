import React, { useEffect } from "react";
import Product from "../../components/Product";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { fetchProducts } from "../../redux/ProductSlice";
import styles from "./styles.module.scss";

const ProductContainer = () => {
  const dispatch = useAppDispatch();

  const products = useAppSelector((state) => state.allProducts.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      {products.map((product) => (
        <Product
          categ={product.category}
          name={product.title}
          key={product.id}
          id={product.id}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default ProductContainer;
