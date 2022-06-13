import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import List from "./pages/List/List";
import Single from "./pages/Single/Single";
import New from "./pages/New/New";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";

function App() {
  const [darkMode, setDarkMode] = useState("app");
  return (
    <div className={darkMode}>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <Home darkMode={darkMode} setDarkMode={setDarkMode}></Home>
            }
          ></Route>
          <Route
            path="login"
            element={
              <Login darkMode={darkMode} setDarkMode={setDarkMode}></Login>
            }
          ></Route>
          <Route path="users">
            <Route
              index
              element={
                <List darkMode={darkMode} setDarkMode={setDarkMode}></List>
              }
            ></Route>
            <Route
              path=":userId"
              element={
                <Single darkMode={darkMode} setDarkMode={setDarkMode}></Single>
              }
            ></Route>
            <Route
              path="new"
              element={
                <New
                  inputs={userInputs}
                  title="Add New User"
                  darkMode={darkMode}
                  setDarkMode={setDarkMode}
                ></New>
              }
            ></Route>
          </Route>
          <Route path="products">
            <Route
              index
              element={
                <List darkMode={darkMode} setDarkMode={setDarkMode}></List>
              }
            ></Route>
            <Route
              path=":productsId"
              element={
                <Single darkMode={darkMode} setDarkMode={setDarkMode}></Single>
              }
            ></Route>
            <Route
              path="new"
              element={
                <New
                  inputs={productInputs}
                  title="Add New Product"
                  darkMode={darkMode}
                  setDarkMode={setDarkMode}
                ></New>
              }
            ></Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
