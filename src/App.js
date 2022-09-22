import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Layout, Shop, About, Account,Product, FAQ, LoginPage, RegisterPage } from "./pages";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="about" element={<About />} />
            <Route path="account" element={<Account />} >
              <Route exact path="login" element={<LoginPage />} />
              <Route exact path="register" element={<RegisterPage />} />
            </Route>
            <Route path="product/id" element={<Product />} />
            <Route path="faq" element={<FAQ />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
