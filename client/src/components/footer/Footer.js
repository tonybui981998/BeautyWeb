import React from "react";
import "./Footer.scss";
import { FaBeer } from "react-icons/fa";
import { BsBuildings } from "react-icons/bs";
import { MdContactPhone } from "react-icons/md";
import { MdAttachEmail } from "react-icons/md";
import { BsFacebook } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { ImGoogle3 } from "react-icons/im";
import { BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-main">
        <div className="footer-right">
          <div className="address">
            <span>
              <BsBuildings />
            </span>{" "}
            The Beehive and other locations across Wellington
          </div>
          <div className="address">
            <span>
              {" "}
              <MdContactPhone />
            </span>
            022 421 123
          </div>
          <div className="address">
            <span>
              {" "}
              <MdAttachEmail />
            </span>
            manukau@gmail.com
          </div>
        </div>
        <div className="footer-middle">
          <div className="footer-title">GlowBeauty</div>
          <div className="allicon">
            <div className="icons">
              <BsFacebook />
            </div>
            <div className="icons">
              <FaXTwitter />
            </div>
            <div className="icons">
              <ImGoogle3 />
            </div>

            <div className="icons">
              <BsYoutube />
            </div>
          </div>
        </div>
        <div className="footer-left">
          Our formulas are made with natural, organic and non-toxic ingredients
          that are gentle, effective and good for you and the environment.
        </div>
      </div>
      <div className="footer-end">
        Copyright 2023 by web4s - All right Recived
      </div>
    </div>
  );
};

export default Footer;
