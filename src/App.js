import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  Layout,
  Shop,
  About,
  Account,
  Product,
  Login,
  Register,
} from "./pages";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="/account" element={<Account />} />
            <Route path="/product/id" element={<Product />} />
          </Route>
        </Routes>
        {/* <Login /> */}
        {/* <Register /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
