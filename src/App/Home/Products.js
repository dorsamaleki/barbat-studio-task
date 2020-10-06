import React from "react";

import styles from "./Products.module.css";
import { NavLink } from "react-router-dom";

export const Products = (props) => {
  return (
    <div className={styles.root}>
      <div className={styles.newproductWrapper}>
        <NavLink to="/new-product" className={styles.newproduct}>
          New product
        </NavLink>
      </div>
      <div className={styles.product}>
        {props.filteredProducts.map((item) => {
          return (
            <div key={item.id} className={styles.card}>
              <div className={styles.image1}>
                <img src={item.image} alt="pic" className={styles.image2} />
              </div>
              <div className={styles.text}>
                <div>{item.productName}</div>
                <div className={styles.price}>$ {item.price}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
