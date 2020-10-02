import React from "react";
import styles from "./Sidebar.module.css";
import { NavLink } from "react-router-dom";
export const Sidebar = (props) => {
  return (
    <div className={styles.root}>
      <div>price</div>
      <div>brand</div>
      <div className={styles.subject}>
        <NavLink to="/categories" className={styles.subject}>
          categories
        </NavLink>
        {props.initialList.map((item) => {
          return (
            <div
              onClick={() => {
                console.log(item.id);
              }}
              key={item.id}
            >
              {item.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};
