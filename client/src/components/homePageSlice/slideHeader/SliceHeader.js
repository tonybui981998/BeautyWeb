import React, { useState } from "react";
import "./SliceHeader.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import slider1 from "../../image/slider-1.webp";
import slider2 from "../../image/slider-2.webp";
import slider3 from "../../image/slider-3.webp";

const SliceHeader = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
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
  return (
    <div className="sliderheader">
      <Carousel responsive={responsive}>
        <div className="slide-information">
          <div className="content">
            <div className="slide-text">Natural Moisturizing Cream</div>
            <div className="p">
              Skin care is a 'survival' process for women to maintain smooth,
              bright, and healthy skin while fighting signs of aging. Therefore,
              moisturizing creams were created to serve the high beauty needs of
              women
            </div>
            <div className="slide-button">
              <button>Discover</button>
            </div>
          </div>

          <img src={slider1} />
        </div>
        <div className="slide-information">
          <div className="content">
            <div className="slide-text">Under-Eye Patches</div>
            <div className="p">
              Reduce signs of aging, diminish wrinkles, and instantly relieve
              signs of fatigue. Regenerate, restore, and brighten the skin
              around the eyes
            </div>
            <div className="slide-button">
              <button>Discover</button>
            </div>
          </div>
          <img src={slider2} />
        </div>
        <div className="slide-information">
          <div className="content">
            <div className="slide-text">Daily Skincare</div>
            <div className="p">
              Daily facial skincare routines have a significant impact on the
              beauty and health of the skin, which is why all women are highly
              attentive to skincare issues
            </div>
            <div className="slide-button">
              <button>Discover</button>
            </div>
          </div>
          <img src={slider3} />
        </div>
      </Carousel>
    </div>
  );
};

export default SliceHeader;
