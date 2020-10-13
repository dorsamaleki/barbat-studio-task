import React, { useState } from "react";
import { NewCategory } from "./NewProduct/NewCategory.js";
import styles from "./NewProduct.module.css";
import { useLocalStorage } from "../hooks/useLocalStorage.js";

import { v4 as uuidv4 } from "uuid";
import { categoriesList } from "../api/categoriesList.js";
import { Category } from "./NewProduct/Category.js";
const initialList = categoriesList();

export const NewProduct = (props) => {
  const [formValues, setFormValues] = useState({});
  const handleChangeInput = (event) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(formValues);
    setFormValues({});
  };

  const [categoryList, setCategoryList] = useLocalStorage(
    "categorylist",
    initialList
  );

  const handleNewCategory = (newCategory) => {
    const newList = (list) => [...list, { ...newCategory, id: uuidv4() }];
    setCategoryList(newList);
  };

  const handleRemoveCategory = (id) => {
    const newList = categoryList.filter((item1) => item1.id !== id);
    setCategoryList(newList);
  };

  return (
    <div className={styles.root}>
      <div className={styles.newproduct}>
        <form
          id="product"
          className={styles.newproductform}
          onSubmit={handleSubmit}
        >
          <div className={styles.subject1}>New Product</div>
          <div className={styles.item}>
            <div className={styles.label}>
              <label>Name</label>
            </div>
            <input
              name="productName"
              type="text"
              value={formValues.productName || ""}
              onChange={handleChangeInput}
              className={styles.input}
              required
            />
          </div>
          <div className={styles.item}>
            <div className={styles.label}>
              <label>Brand</label>
            </div>
            <input
              name="brand"
              type="text"
              value={formValues.brand || ""}
              onChange={handleChangeInput}
              className={styles.input}
              required
            />
          </div>
          <div className={styles.item}>
            <div className={styles.label}>
              <label>Price</label>
            </div>
            <input
              type="number"
              name="price"
              value={formValues.price || ""}
              onChange={handleChangeInput}
              className={styles.input}
              required
            />
          </div>
          <div className={styles.item}>
            <div className={styles.label}>
              <label>Categories</label>
            </div>
            <div>
              {categoryList.map((item, i) => {
                return (
                  <Category
                    key={i}
                    {...item}
                    value={formValues.category || []}
                    onChange={(category) =>
                      setFormValues({ ...formValues, category })
                    }
                  />
                );
              })}

              <NewCategory
                handleRemove={handleRemoveCategory}
                onSubmit={handleNewCategory}
                categoryList={categoryList}
              />
            </div>
          </div>
          <div>
            <button form="product" type="submit" className={styles.save}>
              Save
            </button>
          </div>
        </form>
      </div>
      <div className={styles.right}>
        <div className={styles.products}>
          <div className={styles.subject2}> Products</div>
          {props.productList.map((item) => {
            return (
              <div key={item.id} className={styles.product}>
                <div>name : {item.productName}</div>
                <div>brand : {item.brand}</div>
                <div>price : {item.price}</div>
                <div>category : {item.category.join(", ")}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
