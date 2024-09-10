import React, { useEffect, useState } from "react";
import "./SpecialPrice.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { getAllProduct } from "../../service/APIservice";

const SpecialPrice = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 0,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const [randomProduct, setrandomProduct] = useState([]);
  const getAllProductDB = async () => {
    let getProducts = await getAllProduct();
    const Prodcuts = getProducts.data.DT.DT;
    const shuffledArray = Prodcuts.sort((a, b) => 0.5 - Math.random());
    const getrandomProdcut = shuffledArray.slice(0, 4);
    setrandomProduct(getrandomProdcut);
    //console.log(randomProduct);
  };
  useEffect(() => {
    getAllProductDB();
  }, []);
  return (
    <div className="specialPrice">
      <div className="special-title">Special Price</div>

      <Carousel className="special-list" responsive={responsive}>
        {randomProduct &&
          randomProduct.map((item, index) => {
            const getfirstImage = item.ProductImages[0].imageUrl;
            const imagePath = `http://localhost:8081/images/${getfirstImage}`;
            const totalPrice = item.price + 10;
            return (
              <>
                <div className="special-image" key={index}>
                  <div className="imagess">
                    <img src={imagePath} alt="" />
                  </div>
                  <div className="special-content">
                    <div className="special-name">{item.productName}</div>
                    <div className="special-price-main">
                      <span className="old-price">${totalPrice}</span>
                      <span className="new-Price">${item.price}</span>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
      </Carousel>
    </div>
  );
};

export default SpecialPrice;
