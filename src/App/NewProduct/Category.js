import React from "react";
import styles from "./Category.module.css";

export const Category = ({ name, value, onChange }) => {
  return (
    <div className={styles.root} required>
      <input
        type="checkbox"
        name="category"
        checked={value.includes(name)}
        onChange={() => {
          let newValue;
          if (value.includes(name)) {
            newValue = value.filter((cat) => cat !== name);
          } else {
            newValue = [...value, name];
          }
          onChange(newValue);
        }}
      />
      <label>{name}</label>
    </div>
  );
};
