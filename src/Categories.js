import React, { useState } from "react";
import { categoryList } from "./categoryList";
import { v4 as uuidv4 } from "uuid";
import styles from "./Categories.module.css";
import { SidebarCategories } from "./SidebarCategories";

export const Categories = () => {
  const initialList = categoryList();
  const [list, setList] = useState(initialList);
  const [name, setName] = useState();

  const handleChange = (event) => {
    setName(event.target.value);
  };
  const handleAdd = () => {
    const newList = (list) => [...list, { name, id: uuidv4() }];
    setList(newList);
    setName("");
    localStorage.setItem("myData", list);
  };
  const handleRemove = (id) => {
    const newList = list.filter((item1) => item1.id !== id);
    setList(newList);
  };
  const keyPressed = (event) => {
    if (event.key === "Enter") {
      handleAdd();
    }
  };
  return (
    <div>
      <SidebarCategories />
      <div className={styles.right}>
        categories
        {list.map((item) => {
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
        <div className={styles.new}>new</div>
        <input
          type="text"
          value={name}
          onChange={handleChange}
          onKeyPress={keyPressed}
        />
        <button onClick={handleAdd}>add</button>
      </div>
    </div>
  );
};
