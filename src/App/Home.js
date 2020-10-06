import React, { useState } from "react";
import styles from "./Home.module.css";
import { Products } from "./Home/Products.js";
import { uniq } from "lodash";
import { Range } from "rc-slider";
import "rc-slider/assets/index.css";
import { ProductFilter } from "../Components/ProductFilter";

export const Home = (props) => {
  const [selectedPrice, setSelectedPrice] = useState([0, 100]);
  const [selectedCategory, setSelectedCategory] = useState("");
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

  const handleChangePrice = (newRange) => {
    setSelectedPrice(newRange);
  };

  const [selectedPriceMin, selectedPriceMax] = selectedPrice;

  const filteredProductList = props.productList.filter((i) => {
    const matchedTheCategory =
      selectedCategory.length === 0 || i.category.includes(selectedCategory);
    const matchedTheBrand =
      selectedBrand === "" || i.brand.includes(selectedBrand);
    const matchedThePrice =
      i.price >= selectedPriceMin && i.price <= selectedPriceMax;

    return matchedTheCategory && matchedTheBrand && matchedThePrice;
  });

  return (
    <div>
      <div className={styles.root}>
        <div>
          <div className={styles.header}>Shop by Price</div>
          <div className={styles.list}>
            <Range
              allowCross={false}
              defaultValue={selectedPrice}
              onChange={handleChangePrice}
            />
            <div>
              <span className={styles.minPrice}>{selectedPriceMin}</span>
              <span className={styles.maxPrice}>{selectedPriceMax}</span>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.header}> Shop by Brand</div>
          <div className={styles.list}>
            {brands.map((brand, i) => (
              <ProductFilter
                key={i}
                title={brand}
                onClick={setSelectedBrand}
                isSelected={brand === selectedBrand}
              />
            ))}
          </div>
        </div>
        <div>
          <div className={styles.header}>Categories</div>
          <div className={styles.list}>
            {categories.map((category, i) => (
              <ProductFilter
                key={i}
                title={category}
                onClick={setSelectedCategory}
                isSelected={category === selectedCategory}
              />
            ))}
          </div>
        </div>
      </div>
      <Products filteredProducts={filteredProductList} />
    </div>
  );
};
