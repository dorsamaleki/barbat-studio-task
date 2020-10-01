import React, { useState } from "react";
import { categoryList } from "./categoryList";

export const Categories = () => {
  const category = categoryList();
  const [list, setList] = useState(category);

  const [name, setName] = useState();

  const handleChange = (event) => {
    setName(event.target.value);
  };
  const handleAdd = () => {
    const newList = list.concat({ name });
    setList(newList);
  };

  return (
    <div>
      <div>categories</div>
      {list.map((item) => {
        return <div key={item.id}>{item.name}</div>;
      })}
      <input type="text" value={name} onChange={handleChange} />

      <button onClick={handleAdd}>add</button>
    </div>
  );
};
