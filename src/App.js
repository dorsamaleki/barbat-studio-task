import React from "react";
import { Categories } from "./Categories";
import styles from "./App.module.css";
import { Navbar } from "./Navbar";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { categoriesList } from "./categoriesList.js";
import { Home } from "./Home";
import { NewProduct } from "./NewProduct";
import { v4 as uuidv4 } from "uuid";

import { useLocalStorage } from "./hooks.js";
import { productsList } from "./productsList";
function App() {
  const initialList = categoriesList();
  const initialProduct = productsList();
  const [name, setName] = useLocalStorage("productname", "");
  const [brand, setBrand] = useLocalStorage("productbrand", "");
  const [price, setPrice] = useLocalStorage("productprice", "");
  const [productList, setProductList] = useLocalStorage(
    "productlist",
    initialProduct
  );

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
    setProductList(newList);
    setName("");
    setBrand("");
    setPrice("");
  };
  const keyPressed = (event) => {
    if (event.key === "Enter") {
      handleSave();
    }
  };

  return (
    <div className={styles.root}>
      <Router>
        <Navbar />

        <Switch>
          <Route path="/categories">
            <Categories />
          </Route>
          <Route path="/new-product">
            <NewProduct
              handleChangeName={handleChangeName}
              handleChangePrice={handleChangePrice}
              handleChangeBrand={handleChangeBrand}
              keyPressed={keyPressed}
              productList={productList}
            />
          </Route>
          <Route path="/">
            <Home initialList={initialList} productList={productList} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
