import React from "react";
import { categoriesList } from "./categoriesList";
import { v4 as uuidv4 } from "uuid";
import styles from "./Categories.module.css";

import { useLocalStorage } from "./hooks";

export const Categories = () => {
  const initialList = categoriesList();
  const [categoryList, setCategoryList] = useLocalStorage(
    "categorylist",
    initialList
  );
  const [name, setName] = useLocalStorage("categoryname", "");

  const handleChange = (event) => {
    setName(event.target.value);
  };
  const handleAdd = () => {
    const newList = (list) => [...list, { name, id: uuidv4() }];
    setCategoryList(newList);
    setName("");
    localStorage.setItem("myData", categoryList);
  };
  const handleRemove = (id) => {
    const newList = categoryList.filter((item1) => item1.id !== id);
    setCategoryList(newList);
  };
  const keyPressed = (event) => {
    if (event.key === "Enter") {
      handleAdd();
    }
  };
  return (
    <div>
      <div className={styles.right}>
        categories
        {categoryList.map((item) => {
          return (
            <div key={item.id} className={styles.category}>
              {item.name}
              <div
                onClick={() => handleRemove(item.id)}
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
            value={name}
            onChange={handleChange}
            onKeyPress={keyPressed}
          />
          <button onClick={handleAdd}>add</button>
        </div>
      </div>
    </div>
  );
};
