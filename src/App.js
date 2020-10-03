import React from "react";
import { Categories } from "./Categories";
import styles from "./App.module.css";
import { Navbar } from "./Navbar";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { categoryList } from "./categoryList.js";
import { Home } from "./Home";
import { NewProduct } from "./NewProduct";
function App() {
  const initialList = categoryList();
  return (
    <div className={styles.root}>
      <Router>
        <Navbar />

        <Switch>
          <Route path="/categories">
            <Categories />
          </Route>
          <Route path="/new-product">
            <NewProduct />
          </Route>
          <Route path="/">
            <Home initialList={initialList} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
