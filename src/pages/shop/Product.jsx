import React, { useContext } from "react";
import { Shopcontext } from "../../context/shopcontext";
import { useParams } from "react-router-dom";
import Breadkrum from "../../components/Breadkrum/Breadkrum";
import Productdisplay from "../../components/productdisplay/Productdisplay";
import Descriptionbox from "../../components/Descriptionbox/Descriptionbox";
import Relatedproduct from "../../components/Realtedproduct/Relatedproduct";

const Product = () => {
  const { all_product } = useContext(Shopcontext);
  const { productId } = useParams();
  const product =all_product.find((e)=> e.id === Number(productId))
  return <div>
    <Breadkrum product={product} />
    <Productdisplay product={product} />
    <Descriptionbox />
    <Relatedproduct/>
  </div>;
};
export default Product;
