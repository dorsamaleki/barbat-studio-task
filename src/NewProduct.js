import React from "react";
import styles from "./NewProduct.module.css";
export const NewProduct = (props) => {
  return (
    <div className={styles.root}>
      <div className={styles.newproduct}>
        <form>
          <div className={styles.subject}>New Product</div>
          <div className={styles.item}>
            <div className={styles.label}>
              <label>Name</label>
            </div>
            <input
              type="text"
              value={props.productName}
              onChange={props.handleChangeName}
              onKeyPress={props.keyPressed}
              className={styles.input}
              required
            />
          </div>
          <div className={styles.item}>
            <div className={styles.label}>
              <label>Brand</label>
            </div>
            <input
              type="text"
              value={props.brand}
              onChange={props.handleChangeBrand}
              onKeyPress={props.keyPressed}
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
              value={props.price}
              onChange={props.handleChangePrice}
              onKeyPress={props.keyPressed}
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
                    value={props.category}
                    onClick={() => props.setCategory}
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
            <div onClick={props.handleSave}>Save</div>
          </div>
        </form>
      </div>
      <div className={styles.products}>
        products
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
