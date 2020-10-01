import React, { useState } from "react";
import { categoryList } from "./categoryList";
import { v4 as uuidv4 } from "uuid";
import styles from "./Categories.module.css";
export const Categories = () => {
  const initialList = categoryList();
  const [list, setList] = useState(initialList);

  const [name, setName] = useState();

  const handleChange = (event) => {
    setName(event.target.value);
  };
  const handleAdd = () => {
    const newList = list.concat({ name, id: uuidv4() });
    setList(newList);
    setName("");
  };
  const handleRemove = (id) => {
    const newList = list.filter((item1) => item1.id !== id);
    setList(newList);
  };

  return (
    <div className={styles.root}>
      <div>categories</div>
      {list.map((item) => {
        return (
          <div
            key={item.id}
            style={{
              textDecoration: item.isComplete ? "line-through" : "none",
            }}
          >
            {item.name}
            <button type="button" onClick={() => handleRemove(item.id)}>
              remove
            </button>
          </div>
        );
      })}

      <input type="text" value={name} onChange={handleChange} />

      <button onClick={handleAdd}>add</button>
    </div>
  );
};
