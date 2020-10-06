import React, { useState } from "react";

import styles from "./Home.module.css";
import { NavLink } from "react-router-dom";

import { Products } from "./Products.js";
import { uniq } from "lodash";

export const Home = (props) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPriceMin, setSelectedPriceMin] = useState("3");
  const [selectedBrand, setSelectedBrand] = useState("");

  const brands = uniq(
    props.productList.reduce((result, item) => {
      return result.concat(item.brand);
    }, [])
  );
  const categories = uniq(
    props.productList.reduce((result, item) => {
      return result.concat(item.category);
    }, [])
  );

  const handleChange = (event) => {
    setSelectedPriceMin(event.target.value);
  };
  const filteredProductList = props.productList.filter((i) => {
    return (
      i.category.includes(selectedCategory) &&
      i.price <= selectedPriceMin &&
      i.brand.includes(selectedBrand)
    );
  });
  return (
    <div>
      <div className={styles.root}>
        <div>
          <div className={styles.item1}>Shop by Price</div>
          <div className={styles.item2}>
            <input
              type="range"
              name="price"
              min="0"
              max="100"
              id="price"
              step="0.1"
              value={selectedPriceMin}
              className={styles.price}
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <div className={styles.item1}> Shop by Brand</div>
          <div className={styles.item2}>
            {brands.map((i) => {
              return (
                <div
                  onClick={() => setSelectedBrand(i)}
                  className={styles.item3}
                >
                  {i}
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <div>
            <NavLink to="/Categories" className={styles.item1}>
              Categories
            </NavLink>
          </div>
          <div className={styles.item2}>
            {categories.map((i) => {
              return (
                <div
                  onClick={() => setSelectedCategory(i)}
                  className={styles.item3}
                >
                  {i}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <Products filteredProducts={filteredProductList} />
    </div>
  );
};
