import React from "react";
import NavBar from "../navBar/NavBar";
import SliceHeader from "../homePageSlice/slideHeader/SliceHeader";
import HomeNavigation from "../homePageSlice/homeNavigation/HomeNavigation";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <SliceHeader />
      <HomeNavigation />
    </>
  );
};

export default HomePage;
