import React from "react";
import styles from "./App.module.css";
import { Navbar } from "./App/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./App/Home";
import { NewProduct } from "./App/NewProduct";
import { v4 as uuidv4 } from "uuid";
import { useLocalStorage } from "./hooks/useLocalStorage.js";
import { productsList } from "./api/productsList.js";

const initialProduct = productsList();

function App() {
  const [productList, setProductList] = useLocalStorage(
    "productlist",
    initialProduct
  );
  const handleNewProduct = (newProduct) => {
    const newList = (list) => [...list, { ...newProduct, id: uuidv4() }];
    setProductList(newList);
  };

  return (
    <div className={styles.root}>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/new-product">
            <NewProduct onSubmit={handleNewProduct} productList={productList} />
          </Route>
          <Route path="/">
            <Home productList={productList} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
