import React from "react";
import { v4 as uuidv4 } from "uuid";
import { productsList } from "./productsList";
import { useLocalStorage } from "./hooks.js";
export const NewProduct = () => {
  let newList = [{ name: "", brand: "" }];
  const initialList = productsList();
  const [name, setName] = useLocalStorage("name", initialList);
  const [brand, setBrand] = useLocalStorage("brand", "");
  const [price, setPrice] = useLocalStorage("price", "");
  const [list, setList] = useLocalStorage("list", newList);

  const handleChangeName = (event) => {
    setName(event.target.value);
  };
  const handleChangeBrand = (event) => {
    setBrand(event.target.value);
  };
  const handleChangePrice = (event) => {
    setPrice(event.target.value);
  };
  const handleSave = () => {
    const newList = (list) => [...list, { name, brand, price, id: uuidv4() }];
    setList(newList);
    setName("");
    setBrand("");
    setPrice("");
    localStorage.setItem("myData", list);
  };
  const keyPressed = (event) => {
    if (event.key === "Enter") {
      handleSave();
    }
  };

  return (
    <div>
      New product
      <label>name</label>
      <input
        type="text"
        value={name}
        onChange={handleChangeName}
        onKeyPress={keyPressed}
        required
      />
      <label>brand</label>
      <input
        type="text"
        value={brand}
        onChange={handleChangeBrand}
        onKeyPress={keyPressed}
        required
      />
      <label>price</label>
      <input
        type="text"
        value={price}
        onChange={handleChangePrice}
        onKeyPress={keyPressed}
        required
      />
      <label>categories</label>
      <input type="text" />
      <button onClick={handleSave}>save</button>
      <div>
        {list.map((item) => {
          return (
            <div>
              {item.name}
              {item.brand}
              {item.price}
            </div>
          );
        })}
      </div>
    </div>
  );
};
