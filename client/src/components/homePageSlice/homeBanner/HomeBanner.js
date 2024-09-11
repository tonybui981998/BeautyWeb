import React from "react";
import "./HomeBanner.scss";
import banner1 from "../../image/banner-1.webp";
import banner2 from "../../image/banner-2.webp";
import banner3 from "../../image/banner-3.webp";
import banner4 from "../../image/banner-4.webp";

const HomeBanner = () => {
  return (
    <div className="homeBanner">
      <div className="banner-tittle">Skincare Collection</div>
      <div className="banner-top">
        <div className="content1">
          <img src={banner1} alt="image" />
          <div className="content1-info">
            <div className="info-title">WINTER SKIN CARE</div>
            <div className="info-description">
              Say goodbye to dry, flaky skin and hello to healthy, glowing skin
              all winter long.
            </div>
            <div className="button">
              <button>Discover</button>
            </div>
          </div>
        </div>
        {/**span */}
        <span className="content2">
          <img src={banner2} alt="image" />
          <div className="content1-info">
            <div className="info-title">OIL FOR SKIN</div>
            <div className="info-description">
              Discover the power of natural oils for healthy, radiant skin.
            </div>
            <div className="button">
              <button>Discover</button>
            </div>
          </div>
        </span>
      </div>
      <div className="banner-botton">
        <div className="content1">
          <img src={banner3} alt="image" />
          <div className="content1-info">
            <div className="info-title">30% OFF</div>
            <div className="info-description">
              Don't miss out on our limited time sale!
            </div>
            <div className="button">
              <button>Discover</button>
            </div>
          </div>
        </div>
        {/**span */}
        <span className="content2">
          <img src={banner4} alt="image" />
          <div className="content1-info">
            <div className="info-title">ANTI AGING CREAM</div>
            <div className="info-description">
              Fight the signs of aging with our powerful collection of
              anti-aging creams.
            </div>
            <div className="button">
              <button>Discover</button>
            </div>
          </div>
        </span>
      </div>
    </div>
  );
};

export default HomeBanner;
