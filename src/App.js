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
            <Route
              path="/shop/1"
              element={
                <Product
                  product_name="Dorayaki"
                  product_price="Php 1700"
                  product_category="Pastry"
                  product_description="A type of Japanese confection. It consists of two small pancake -like patties made from castella wrapped around a filling of sweet azuki bean paste."
                  product_image="/ps-1.jpg"
                />
              }
            />
            <Route
              path="/shop/2"
              element={
                <Product
                  product_name="Raspberry Chocolate Croissants"
                  product_price="Php 1700"
                  product_category="Pastry"
                  product_description="Classic flaky French pastry with a sweet raspberry filling and a strip of dark chocolate in the center."
                  product_image="/ps-2.jpg"
                />
              }
            />
            <Route
              path="/shop/3"
              element={
                <Product
                  product_name="Apple Turnovers"
                  product_price="Php 1700"
                  product_category="Pastry"
                  product_description="Homemade Apple Turnovers with a filling that tastes like Apple Pie in flaky puff pastry dough."
                  product_image="/ps-3.jpg"
                />
              }
            />
            <Route
              path="/shop/4"
              element={
                <Product
                  product_name="Ube Cheese Pandesal"
                  product_price="Php 1700"
                  product_category="Pastry"
                  product_description="Ube Pandesal with Cheese are soft fluffy and loaded with purple yam flavor. These Filipino bread rolls are delicious for breakfast or snack."
                  product_image="/ps-4.jpg"
                />
              }
            />
            <Route
              path="/shop/5"
              element={
                <Product
                  product_name="Classic Cheese Ensaymada"
                  product_price="Php 1700"
                  product_category="Pastry"
                  product_description="Ensaymada soft fluffy rolls smothered with whipped butter and topped with lots of grated cheese."
                  product_image="/ps-5.jpg"
                />
              }
            />
            <Route
              path="/shop/6"
              element={
                <Product
                  product_name="Whole Wheat"
                  product_price="Php 1700"
                  product_category="Bread"
                  product_description="Speaking of healthy breads whole wheat which is one of a range of whole grain breads is one of the very best breads for your body. Made from flour that uses the entire grain including the bran and germ, whole wheat offers more fiber, protein, and vitamins than white bread. It also boasts a richer flavor and aroma. 150"
                  product_image="/b-1.png"
                />
              }
            />
            <Route
              path="/shop/7"
              element={
                <Product
                  product_name="Focaccia"
                  product_price="Php 1700"
                  product_category="Bread"
                  product_description="Another bread originating from Italy focaccia is a flat dimpled yeast bread resembling pizza dough that's baked at high temperatures in sheet pans. Often topped with olive oil rosemary and coarse salt focaccia???s exact origins are unknown, though it might date back to Ancient Rome. Focaccia???s name is derived from the Latin panis focacius, which means fireplace bread. Modern varieties include savory toppings like olives, tomatoes, and mushrooms."
                  product_image="/b-2.png"
                />
              }
            />
            <Route
              path="/shop/8"
              element={
                <Product
                  product_name="Challah"
                  product_price="Php 1700"
                  product_category="Bread"
                  product_description="Made with eggs and most often braided is integral to the Jewish faith. Served on the Sabbath and holidays it was originally called berches before the word challah was adopted in the Middle Ages. The bread continues to carry rich meaning from the poppy and sesame seeds sprinkled on top that symbolize manna from God to the plaited shape which represents love."
                  product_image="/b-3.png"
                />
              }
            />
            <Route
              path="/shop/9"
              element={
                <Product
                  product_name="Breadsticks"
                  product_price="Php 1700"
                  product_category="Bread"
                  product_description="Would it really be an Italian meal without a serving of this pencil-thin dry bread sitting atop the table as an appetizer? Much smaller than a baguette breadsticks are said to have originated in the boot-shaped country in the 17th century. Nowadays American restaurants sometimes serve them soft and warm topped with cheese and garlic or as a dessert with icing and cinnamon."
                  product_image="/b-4.png"
                />
              }
            />
            <Route
              path="/shop/10"
              element={
                <Product
                  product_name="BananaBread"
                  product_price="Php 1700"
                  product_category="Bread"
                  product_description="To this category we can also add zucchini bread. Both banana and zucchini bread are dense moist sweet treats usually chemically leavened with baking soda or baking powder. It???s supposed that both of these ???quick??? breads got their start in the United States where 18th-century bakers first used pearlash a refined form of potash to create carbon dioxide in dough. "
                  product_image="/b-5.png"
                />
              }
            />
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

            <Route path="/users">
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
