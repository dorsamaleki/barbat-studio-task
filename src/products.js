import React from "react";

import styles from "./Products.module.css";
import { NavLink } from "react-router-dom";

export const Products = (props) => {
  return (
    <div className={styles.right}>
      <div className={styles.new}>
        <NavLink to="/new-product" className={styles.text}>
          New product
        </NavLink>
      </div>
      {props.filteredProducts.map((item) => {
        return (
          <div key={item.id} className={styles.product}>
            <img src={item.image} alt="pic" className={styles.image} />
            <div>{item.productName}</div>

            <div>$ {item.price}</div>
          </div>
        );
      })}
    </div>
  );
};
