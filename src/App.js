import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  Layout,
  Shop,
  About,
  Product,
  FAQ,
  LoginPage,
  RegisterPage,
  AddProducts,
  UserAccount,
  ProductList,
  UpdateProduct,
} from "./pages";
import axios from "axios";
axios.defaults.baseURL = "https://making-dough-server.herokuapp.com/";

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Layout user={loggedInUser} onLogout={setLoggedInUser} />}
          >
            <Route index element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="product/:id" element={<Product />} />
            <Route path="about" element={<About />} />
            <Route
              exact
              path="login"
              element={<LoginPage onLogin={setLoggedInUser} />}
            />
            <Route exact path="register" element={<RegisterPage />} />
            <Route
              path="addproduct"
              element={<AddProducts user={loggedInUser} />}
            />
            <Route path="productlist">
              <Route
                index
                element={<ProductList user={loggedInUser} />}
              ></Route>
              <Route path=":id" element={<UpdateProduct />}></Route>
            </Route>
            <Route
              path="account"
              element={<UserAccount user={loggedInUser} />}
            />
            <Route path="faq" element={<FAQ />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
