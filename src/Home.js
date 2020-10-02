import React from "react";
import { products } from "./products.js";
import { Sidebar } from "./Sidebar.js";
import styles from "./Home.module.css";
import { NavLink } from "react-router-dom";
export const Home = (props) => {
  const initialProducts = products();
  return (
    <div>
      <Sidebar initialList={props.initialList} />
      <div className={styles.right}>
        <div className={styles.new}>
          <NavLink to="new-product" className={styles.text}>
            New product
          </NavLink>
        </div>
        {initialProducts.map((item) => {
          return (
            <div key={item.id} className={styles.product}>
              <img src={item.image} alt="pic" className={styles.image} />
              <div>{item.name}</div>

              <div>$ {item.price}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
