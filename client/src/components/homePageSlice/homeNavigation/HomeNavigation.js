import React from "react";
import navigationbar1 from "../../image/navigationbar1.webp";
import navigationbar2 from "../../image/navigationbar2.webp";
import navigationbar3 from "../../image/navigationbar3.webp";
import navigationbar4 from "../../image/navigationbar4.webp";
import navigationbar5 from "../../image/navigationbar5.webp";
import navigationbar6 from "../../image/navigationbar6.webp";
import "./HomeNavigation.scss";

const HomeNavigation = () => {
  return (
    <div className="homenavigation">
      <div className="navigation-main-box">
        <div className="navigation-box">
          <img src={navigationbar1} />
          <div className="navigation-text">toners</div>
        </div>
        <div className="navigation-box">
          <img src={navigationbar2} />
          <div className="navigation-text">Nourishing </div>
        </div>
        <div className="navigation-box">
          <img src={navigationbar3} />
          <div className="navigation-text">Mask</div>
        </div>
        <div className="navigation-box">
          <img src={navigationbar4} />
          <div className="navigation-text">Removal</div>
        </div>
        <div className="navigation-box">
          <img src={navigationbar5} />
          <div className="navigation-text">Loton</div>
        </div>
        <div className="navigation-box">
          <img src={navigationbar6} />
          <div className="navigation-text">Serum</div>
        </div>
      </div>
    </div>
  );
};

export default HomeNavigation;
