import React, { useContext, useEffect, useState } from "react";
import "./ProductDisplay.scss";
import { ShopContext } from "../../contextfile/ShopContext";
import { useNavigate } from "react-router-dom";

const ProdcutDisplay = ({ headername }) => {
  const {
    allProdcutDB,
    setGetProductStore,
    getProdcutStore,
    setGetlocation,
    getLocation,
  } = useContext(ShopContext);
  const [prodcutSotrage, setProdcutStorage] = useState();
  const navigate = useNavigate();
  // console.log(allProdcutDB);
  const getProductByPage = () => {
    if (allProdcutDB && allProdcutDB.length > 0) {
      if (headername === "serum") {
        const ProdcutBycategory = allProdcutDB.filter(
          (prodcut) => prodcut.category === "Serum"
        );
        setProdcutStorage(ProdcutBycategory);
      }
      //
      if (headername === "moisturizing") {
        const ProdcutBycategory = allProdcutDB.filter(
          (prodcut) => prodcut.category === "Moisturizer"
        );
        setProdcutStorage(ProdcutBycategory);
      }
      if (headername === "removal") {
        const ProdcutBycategory = allProdcutDB.filter(
          (prodcut) => prodcut.category === "Cleanser"
        );
        setProdcutStorage(ProdcutBycategory);
      }
    }
  };
  //
  const getSingleProdcut = (item, headername) => {
    setGetProductStore(item);
    setGetlocation(headername);
    navigate("/Product");
  };

  useEffect(() => {
    getProductByPage();
  }, [headername, allProdcutDB]);

  return (
    <div className="prodcut-display">
      {prodcutSotrage &&
        prodcutSotrage.map((item, index) => {
          //  console.log("check project", prodcutSotrage);
          const firstImage = item.ProductImages[0].imageUrl;
          const imagePath = `http://localhost:8081/images/${firstImage}`;
          return (
            <>
              <div className="product-content" key={index}>
                <img
                  src={imagePath}
                  alt=""
                  onClick={() => getSingleProdcut(item, headername)}
                />
                <div className="line"></div>
                <div className="product-name">{item.productName}</div>
                <div className="prodcut-description">{item.description}</div>
                <div className="product-price">${item.price}</div>
              </div>
            </>
          );
        })}
    </div>
  );
};

export default ProdcutDisplay;
