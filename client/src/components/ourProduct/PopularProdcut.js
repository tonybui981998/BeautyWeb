import React, { useEffect, useState } from "react";
import { getAllProduct } from "../service/APIservice";

const PopularProdcut = () => {
  const [randomProduct, setrandomProduct] = useState();
  const getAllProductDB = async () => {
    let getProducts = await getAllProduct();
    const Prodcuts = getProducts.data.DT.DT;
    const shuffledArray = Prodcuts.sort((a, b) => 0.5 - Math.random());
    const getrandomProdcut = shuffledArray.slice(0, 8);
    setrandomProduct(getrandomProdcut);
    //console.log(randomProduct);
  };
  useEffect(() => {
    getAllProductDB();
  }, []);
  return (
    <div className="newProduct">
      {randomProduct &&
        randomProduct.map((item, index) => {
          //  console.log(randomProduct);
          const firstImage = item.ProductImages[0].imageUrl;
          const imagePath = `http://localhost:8081/images/${firstImage}`;
          return (
            <>
              <div className="product-content" key={index}>
                <img src={imagePath} alt="" />
                <div className="line"></div>
                <div className="product-name">{item.productName}</div>
                <div className="prodcut-description">{item.description}</div>
                <div className="product-price">{item.price}</div>
              </div>
            </>
          );
        })}
    </div>
  );
};

export default PopularProdcut;
