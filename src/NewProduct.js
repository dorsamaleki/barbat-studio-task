import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { productsList } from "./productsList";

export const NewProduct = () => {
  const initialList = productsList();
  const [name, setName] = useState();
  const [brand, setBrand] = useState();
  const [list, setList] = useState([{ name: "" }]);

  const handleChange = (event) => {
    setName(event.target.value);
  };
  const handleChangeBrand = (event) => {
    setBrand(event.target.value);
  };
  const handleSave = () => {
    const newList = (list) => [...list, { name, id: uuidv4() }];
    setList(newList);
    setName("");
    localStorage.setItem("myData", list);
  };

  return (
    <div>
      New product
      <label>name</label>
      <input type="text" value={name} onChange={handleChange} />
      <label>brand</label>
      <input type="text" value={brand} onChange={handleChangeBrand} />
      <label>categories</label>
      <input type="text" />
      <button onClick={handleSave}>save</button>
      <div>
        {list.map((item) => {
          return <div>{item.name}</div>;
        })}
      </div>
    </div>
  );
};
