import React, { useState } from "react";

import styles from "./Home.module.css";
import { NavLink } from "react-router-dom";
import { productsList } from "./productsList.js";
import { Products } from "./Products.js";
import { uniq } from "lodash";
export const Home = (props) => {
  const initialProducts = productsList();
  const [selectedCategory, setSelectedCategory] = useState("");
  const filteredProducts = initialProducts.filter((i) => {
    return i.category.includes(selectedCategory);
  });

  return (
    <div>
      <div className={styles.root}>
        <div>price</div>
        <div>
          brand
          {uniq(
            initialProducts.reduce((result, item) => {
              return result.concat(item.brand);
            }, [])
          )}
        </div>
        <div>
          <NavLink to="/categories" className={styles.subject}>
            categories
          </NavLink>
          {props.initialList.map((item) => {
            return (
              <div
                onClick={() => setSelectedCategory(item.name)}
                key={item.id}
                className={styles.category}
              >
                {item.name}
              </div>
            );
          })}
        </div>
      </div>

      <Products filteredProducts={filteredProducts} />
    </div>
  );
};
