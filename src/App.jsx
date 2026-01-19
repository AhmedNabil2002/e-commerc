import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/footer/Footer";
import Product from "./pages/shop/Product";

import { Shop } from "./pages/shop/Shop";
import Shopcategory from "./pages/shop/Shopcategory"; 
import { Cart } from "./pages/shop/cart";
import { Loginsignup } from "./pages/login/Loginsignup";

import men_banner from "./components/Assets/banner_mens.png";
import women_banner from "./components/Assets/banner_women.png";
import kids_banner from "./components/Assets/banner_kids.png";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Shop />} />

        <Route
          path="/mens"
          element={<Shopcategory banner={men_banner} category="men" />}
        />

        <Route
          path="/womens"
          element={<Shopcategory banner={women_banner} category="women" />}
        />

        <Route
          path="/kids"
          element={<Shopcategory banner={kids_banner} category="kid" />}
        />

        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Loginsignup />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;