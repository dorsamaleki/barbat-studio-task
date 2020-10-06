import React from "react";
import { NewCategory } from "./NewCategory.js";
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
  //Lifting state up from NewProduct component

  const initialList = categoriesList();
  const initialProduct = productsList();

  const [productList, setProductList] = useLocalStorage(
    "productlist",
    initialProduct
  );
  const handleNewProduct = (newProduct) => {
    const newList = (list) => [...list, { ...newProduct, id: uuidv4() }];
    setProductList(newList);
  };

  //Lifting state up from NewCategory component

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
  const keyPressedd = (event) => {
    if (event.key === "Enter") {
      handleAdd();
    }
  };

  return (
    <div className={styles.root}>
      <Router>
        <Navbar />

        <Switch>
          <Route path="/categories">
            <NewCategory
              handleChange={handleChange}
              handleRemove={handleRemove}
              keyPressedd={keyPressedd}
              handleAdd={handleAdd}
              categoryList={categoryList}
            />
          </Route>
          <Route path="/new-product">
            <NewProduct
              handleNewProduct={handleNewProduct}
              productList={productList}
              categoryList={categoryList}
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
