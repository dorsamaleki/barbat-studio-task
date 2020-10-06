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
    console.log(formValues);
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
                  <div className={styles.category} required>
                    <input
                      type="checkbox"
                      name="category"
                      value={item.name}
                      onChange={handleChangeInput}
                    />
                    <label> {item.name}</label>
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
