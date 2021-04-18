import React from "react";
import PostsContainer from "../PostContainer";
import ProductContainer from "../ProductContainer";
import styles from "./styles.module.scss";

const ShopContainer = () => {
  return (
    <div className={styles.container}>
      <PostsContainer />
      <ProductContainer />
      <PostsContainer />
    </div>
  );
};

export default ShopContainer;
