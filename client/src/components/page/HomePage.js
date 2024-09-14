import React from "react";
import NavBar from "../navBar/NavBar";
import SliceHeader from "../homePageSlice/slideHeader/SliceHeader";
import HomeNavigation from "../homePageSlice/homeNavigation/HomeNavigation";
import OurProdcut from "../ourProduct/OurProdcut";
import SpecialPrice from "../homePageSlice/specialPrice/SpecialPrice";
import HomeBanner from "../homePageSlice/homeBanner/HomeBanner";
import CustomerFeedBack from "../homePageSlice/customerFeedBack/CustomerFeedBack";
import Footer from "../footer/Footer";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <SliceHeader />
      <HomeNavigation />
      <OurProdcut />
      <SpecialPrice />
      <HomeBanner />
      <CustomerFeedBack />
      <Footer />
    </>
  );
};

export default HomePage;
