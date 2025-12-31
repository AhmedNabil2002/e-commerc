import React from "react";
import "./breadcrum.css";
import arrow_icon from "../Assets/breadcrum_arrow.png";
const Breadkrum = (props) => {
  const { product } = props;
  return (
    <div className="breadkrum">
      HOME <img src={arrow_icon} /> SHOP <img src={arrow_icon} alt="" />
      {product.category} <img src={arrow_icon} alt="" /> {product.name}
    </div>
  );
};
export default Breadkrum;
