import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Icon } from "@iconify/react";
import { Shopcontext } from "../../context/shopcontext";

export const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(Shopcontext);
  return (
    <div className="navbar">
      <div className="nav-log">
        <Icon icon="twemoji:shopping-bags" width="36" height="36" />
        <p>shopper</p>
      </div>

      <ul className="nav-menu">
        <li onClick={() => setMenu("shop")}>
          <Link to="/" style={{ textDecoration: "none" }}>
            shop
          </Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("mens")}>
          <Link to="/mens" style={{ textDecoration: "none" }}>
            men
          </Link>
          {menu === "mens" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("womens")}>
          <Link to="/womens" style={{ textDecoration: "none" }}>
            women
          </Link>
          {menu === "womens" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("kids")}>
          <Link to="/kids" style={{ textDecoration: "none" }}>
            kids
          </Link>
          {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>

      <div className="nav-login-cart">
        <Link to="/login">
          <button className="cl">Login</button>
        </Link>
        <Link to="/cart">
          <Icon icon="guidance:shop" width="24" height="24" />
          <div className="nav-cart-count">{getTotalCartItems() }</div>
        </Link>
      </div>
    </div>
  );
};
