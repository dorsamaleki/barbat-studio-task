import React from "react";

import styles from "./Categories.module.css";

export const Categories = (props) => {
  return (
    <div>
      <div className={styles.right}>
        categories
        {props.categoryList.map((item) => {
          return (
            <div key={item.id} className={styles.category}>
              {item.name}
              <div
                onClick={() => props.handleRemove(item.id)}
                className={styles.cross}
              >
                ☓
              </div>
            </div>
          );
        })}
        <div>
          <input
            type="text"
            value={props.name}
            onChange={props.handleChange}
            onKeyPress={props.keyPressedd}
          />
          <button onClick={props.handleAdd}>add</button>
        </div>
      </div>
    </div>
  );
};
