import React, { useState } from "react";
import "./OurProduct.scss";
import NewProduct from "./NewProduct";
import OutstandingProduct from "./OutstandingProduct";
import PopularProdcut from "./PopularProdcut";

const OurProdcut = () => {
  const [ourProdcutDisplay, setourProdcutDisplay] =
    useState("newproductDisplay");
  // change productDisplay
  const mainDisplay = (display) => {
    setourProdcutDisplay(display);
  };
  return (
    <div className="ourProduct">
      <div className="ourproduct-title">Our Store</div>
      <div className="product-menu">
        {ourProdcutDisplay === "newproductDisplay" ? (
          <div
            className="menu1 active"
            onClick={() => mainDisplay("newproductDisplay")}
          >
            New Product
          </div>
        ) : (
          <div
            className="menu1"
            onClick={() => mainDisplay("newproductDisplay")}
          >
            New Product
          </div>
        )}
        {ourProdcutDisplay === "OutstandingProduct" ? (
          <div
            className="menu1 active"
            onClick={() => mainDisplay("OutstandingProduct")}
          >
            Outstanding Product
          </div>
        ) : (
          <div
            className="menu1"
            onClick={() => mainDisplay("OutstandingProduct")}
          >
            Outstanding Product
          </div>
        )}
        {ourProdcutDisplay === "PopularProduct" ? (
          <div
            className="menu1 active"
            onClick={() => mainDisplay("PopularProduct")}
          >
            Popular Product
          </div>
        ) : (
          <div className="menu1" onClick={() => mainDisplay("PopularProduct")}>
            Popular Product
          </div>
        )}
      </div>
      <div className="menu-display">
        {ourProdcutDisplay === "newproductDisplay" && <NewProduct />}
        {ourProdcutDisplay === "OutstandingProduct" && <OutstandingProduct />}
        {ourProdcutDisplay === "PopularProduct" && <PopularProdcut />}
      </div>
    </div>
  );
};

export default OurProdcut;
