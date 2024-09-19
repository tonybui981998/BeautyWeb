import React, { createContext, useEffect, useState } from "react";
import { getAllProduct } from "../service/APIservice";
export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const [allProdcutDB, setAllProdcutDB] = useState();
  const getAllProdcutDB = async () => {
    let Products = await getAllProduct();
    const arrayProdcut = Products.data.DT.DT;
    setAllProdcutDB(arrayProdcut);
  };
  useEffect(() => {
    getAllProdcutDB();
  }, []);
  const value = { allProdcutDB };
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
export default ShopContextProvider;
