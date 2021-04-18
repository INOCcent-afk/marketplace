import React from "react";
import FilterContainer from "../FilterContainer";
import PostsContainer from "../PostContainer";
import ProductContainer from "../ProductContainer";
import styles from "./styles.module.scss";

const ShopContainer = () => {
  return (
    <div className={styles.container}>
      <FilterContainer />
      <ProductContainer />
      <PostsContainer />
    </div>
  );
};

export default ShopContainer;
