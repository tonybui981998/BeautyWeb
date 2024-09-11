import React from "react";
import "./CustomerFeedBack.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import images from "../../image/person.jpeg";
import { FaBeer } from "react-icons/fa";
import { VscFeedback } from "react-icons/vsc";

const CustomerFeedBack = () => {
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
    <div className="customerfeedback">
      <div className="customer-tittle">Customer</div>
      <div className="feedback-icon">
        <VscFeedback />
      </div>
      <div className="feedback-s">FeedBack</div>
      <Carousel className="feedback-main" responsive={responsive}>
        <div className="feedback-content">
          <div className="feedback-tittle">
            I love how smooth and hydrated my skin feels after using their
            products! It’s now a must-have in my routine.
          </div>
          <div className="feedback-image">
            <img src={images} alt="" />
            <span className="feedback-name">keyle</span>
          </div>
        </div>
        <div className="feedback-content">
          <div className="feedback-tittle">
            Great customer service and quick delivery. The products are
            high-quality, and I’ll definitely order again!
          </div>
          <div className="feedback-image">
            <img src={images} alt="" />
            <span className="feedback-name">keyle</span>
          </div>
        </div>
        <div className="feedback-content">
          <div className="feedback-tittle">
            Their skincare line really helped clear up my skin. It’s gentle and
            works wonders for sensitive skin. Highly recommend!
          </div>
          <div className="feedback-image">
            <img src={images} alt="" />
            <span className="feedback-name">keyle</span>
          </div>
        </div>
        <div className="feedback-content">
          <div className="feedback-tittle">
            Their serums have made a noticeable difference in my skin’s texture
            and hydration. I’ll definitely be coming back for more!
          </div>
          <div className="feedback-image">
            <img src={images} alt="" />
            <span className="feedback-name">keyle</span>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default CustomerFeedBack;
