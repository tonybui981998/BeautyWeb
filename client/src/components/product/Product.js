import React, { useEffect, useState } from "react";
import { getAllProduct } from "../service/APIservice";
import { useLocation, useNavigate, Link } from "react-router-dom";
import ProdcutHeader from "./prodcutHeader/ProdcutHeader";
import ProdcutDisplay from "./prodcutDisplay/ProdcutDisplay";
import ProdcutMessage from "./productMessage/ProdcutMessage";

const Product = () => {
  const [valueLocation, setValueLocation] = useState("");
  const [getAllProdcut, setGetAllProduct] = useState("");
  const location = useLocation();
  const getProductFromDB = async () => {
    const AllProduct = await getAllProduct();
    const getProdcut = AllProduct.data.DT.DT;
    //  console.log(getProdcut);

    const serumProduct = getProdcut.filter(
      (prodcut) => prodcut.category === "Serum"
    );
  };

  useEffect(() => {
    const currentlocation = location.pathname;
    if (currentlocation === "/serum") {
      setValueLocation("serum");
    }
    if (currentlocation === "/moisturizing") {
      setValueLocation("moisturizing");
    }
    if (currentlocation === "/removal") {
      setValueLocation("removal");
    }

    getProductFromDB();
  }, [location.pathname]);

  return (
    <div>
      <ProdcutHeader headername={valueLocation} />
      <ProdcutDisplay headername={valueLocation} />
      <ProdcutMessage headername={valueLocation} />
    </div>
  );
};

export default Product;
