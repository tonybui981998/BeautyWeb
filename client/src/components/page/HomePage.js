import React from "react";
import NavBar from "../navBar/NavBar";
import SliceHeader from "../homePageSlice/slideHeader/SliceHeader";
import HomeNavigation from "../homePageSlice/homeNavigation/HomeNavigation";
import OurProdcut from "../ourProduct/OurProdcut";
import SpecialPrice from "../homePageSlice/specialPrice/SpecialPrice";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <SliceHeader />
      <HomeNavigation />
      <OurProdcut />
      <SpecialPrice />
    </>
  );
};

export default HomePage;
