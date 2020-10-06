import React from "react";

import styles from "./NewCategory.module.css";

export const NewCategory = (props) => {
  return (
    <div className={styles.root}>
      <div className={styles.left}>
        <div className={styles.form}>
          <div className={styles.subject1}> New Category</div>
          <div>
            <div className={styles.label}>
              <label>Name</label>
            </div>
            <input
              type="text"
              value={props.name}
              onChange={props.handleChange}
              onKeyPress={props.keyPressedd}
              className={styles.input}
            />
            <button onClick={props.handleAdd} className={styles.add}>
              add
            </button>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.subject2}>Categories</div>
        <div className={styles.box}>
          {props.categoryList.map((item) => {
            return (
              <div key={item.id} className={styles.category}>
                <div
                  onClick={() => props.handleRemove(item.id)}
                  className={styles.cross}
                >
                  ☓
                </div>
                <div className={styles.name}> {item.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
