import React, { useState } from "react";

import styles from "./Home.module.css";
import { NavLink } from "react-router-dom";
import { productsList } from "./productsList.js";
import { Products } from "./Products.js";
import { uniq } from "lodash";

export const Home = (props) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [price, setPrice] = useState("3");
  const [selectedPrice, setSelectedPrice] = useState("");
  const initialProducts = productsList();
  const [selectedBrand, setSelectedBrand] = useState("");

  const brands = uniq(
    initialProducts.reduce((result, item) => {
      return result.concat(item.brand);
    }, [])
  );
  const filteredCategory = initialProducts.filter((i) => {
    return i.category.includes(selectedCategory);
  });
  const filteredPrice = initialProducts.filter((i) => i.price <= selectedPrice);
  const handleChange = (event) => {
    setPrice(event.target.value);
    console.log(price);
    setSelectedPrice(price);
  };
  const filteredBrand = initialProducts.filter((i) => {
    return i.brand.includes(selectedBrand);
  });
  return (
    <div>
      <div className={styles.root}>
        <div>
          <label>price</label>

          <input
            type="range"
            name="price"
            min="0"
            max="100"
            id="price"
            step="0.1"
            value={price}
            className={styles.price}
            onChange={handleChange}
          />
        </div>
        <div>
          brand
          <div className={styles.brand}>
            {brands.map((i) => {
              return <div onClick={() => setSelectedBrand(i)}>{i}</div>;
            })}
          </div>
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

      <Products filteredProducts={filteredPrice} />
    </div>
  );
};
