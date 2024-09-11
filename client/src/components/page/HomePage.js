import React from "react";
import NavBar from "../navBar/NavBar";
import SliceHeader from "../homePageSlice/slideHeader/SliceHeader";
import HomeNavigation from "../homePageSlice/homeNavigation/HomeNavigation";
import OurProdcut from "../ourProduct/OurProdcut";
import SpecialPrice from "../homePageSlice/specialPrice/SpecialPrice";
import HomeBanner from "../homePageSlice/homeBanner/HomeBanner";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <SliceHeader />
      <HomeNavigation />
      <OurProdcut />
      <SpecialPrice />
      <HomeBanner />
    </>
  );
};

export default HomePage;
