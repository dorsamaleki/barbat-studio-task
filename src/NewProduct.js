import React from "react";

export const NewProduct = (props) => {
  return (
    <div>
      New product
      <label>name</label>
      <input
        type="text"
        value={props.productName}
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
        {props.productList.map((item) => {
          return (
            <div>
              {item.productName}
              {item.brand}
              {item.price}
              {item.category}
            </div>
          );
        })}
      </div>
    </div>
  );
};
