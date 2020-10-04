import React from "react";

export const NewProduct = (props) => {
  return (
    <div>
      New product
      <label>name</label>
      <input
        type="text"
        value={props.name}
        onChange={props.handleChangeName}
        onKeyPress={props.keyPressed}
        required
      />
      <label>brand</label>
      <input
        type="text"
        value={props.brand}
        onChange={props.handleChangeBrand}
        onKeyPress={props.keyPressed}
        required
      />
      <label>price</label>
      <input
        type="text"
        value={props.price}
        onChange={props.handleChangePrice}
        onKeyPress={props.keyPressed}
        required
      />
      <label>categories</label>
      <input type="text" />
      <button onClick={props.handleSave}>save</button>
      <div>
        {props.list.map((item) => {
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
