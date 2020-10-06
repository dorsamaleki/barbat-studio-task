import React, { useState } from "react";
import styles from "./NewProduct.module.css";
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
  return (
    <div className={styles.root}>
      <div className={styles.newproduct}>
        <form onSubmit={handleSubmit}>
          <div className={styles.subject}>New Product</div>
          <div className={styles.item}>
            <div className={styles.label}>
              <label>Name</label>
            </div>
            <input
              name="productName"
              type="text"
              value={formValues.productName}
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
              value={formValues.brand}
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
              type="text"
              name="price"
              value={formValues.price}
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
              {props.categoryList.map((item) => {
                return (
                  <div
                    name="category"
                    value={formValues.category}
                    onClick={handleChangeInput}
                    className={styles.category}
                    required
                  >
                    {item.name}
                  </div>
                );
              })}
            </div>
          </div>
          <div className={styles.save}>
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
      <div className={styles.products}>
        Products
        {props.productList.map((item) => {
          return (
            <div>
              {item.productName}
              {item.brand}
              {item.price}
              {item.category}
            </div>
          );
        })}
      </div>
    </div>
  );
};
