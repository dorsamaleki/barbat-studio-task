import React, { useState } from "react";

import styles from "./NewCategory.module.css";

export const NewCategory = (props) => {
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
      <div className={styles.left}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.subject1}> New Category</div>
          <div>
            <div className={styles.label}>
              <label>Name</label>
            </div>
            <input
              type="text"
              name="name"
              value={formValues.name}
              onChange={handleChangeInput}
              className={styles.input}
            />
            <button
              type="submit"
              onClick={props.handleAdd}
              className={styles.add}
            >
              add
            </button>
          </div>
        </form>
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
