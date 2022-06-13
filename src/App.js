import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import List from "./pages/List/List";
import Single from "./pages/Single/Single";
import New from "./pages/New/New";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";

function App() {
  return (
    <div className="app dark">
      <Routes>
        <Route path="/">
          <Route index element={<Home></Home>}></Route>
          <Route path="login" element={<Login></Login>}></Route>
          <Route path="users">
            <Route index element={<List></List>}></Route>
            <Route path=":userId" element={<Single></Single>}></Route>
            <Route
              path="new"
              element={<New inputs={userInputs} title="Add New User"></New>}
            ></Route>
          </Route>
          <Route path="products">
            <Route index element={<List></List>}></Route>
            <Route path=":productsId" element={<Single></Single>}></Route>
            <Route
              path="new"
              element={
                <New inputs={productInputs} title="Add New Product"></New>
              }
            ></Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
