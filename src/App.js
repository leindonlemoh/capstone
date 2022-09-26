import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  Layout,
  Shop,
  About,
  Account,
  Product,
  FAQ,
  LoginPage,
  RegisterPage,
  AddProducts,
  UserAccount,
} from "./pages";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3001";

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="about" element={<About user={loggedInUser} />} />
            <Route path="account" element={<Account />}>
              <Route
                exact
                path="login"
                element={<LoginPage onLogin={setLoggedInUser} />}
              />
              <Route exact path="register" element={<RegisterPage />} />
              <Route exact path="user-account" element={<UserAccount />} />
            </Route>
            <Route path="product/id" element={<Product />} />
            <Route path="faq" element={<FAQ />} />
            <Route
              path="addproduct"
              element={<AddProducts user={loggedInUser} />}
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
