import React from "react";
import "./ContactHeader.scss";
import { FaBeer } from "react-icons/fa";
import { FcNext } from "react-icons/fc";
import { Link } from "react-router-dom";

const Contactheader = () => {
  return (
    <div className="contact-header">
      <div className="contact-tittle">Contact Us</div>
      <div className="contact-child">
        <Link to={"/"} className="contact-home">
          HomePage
        </Link>
        <span>
          <FcNext />
        </span>
        <span>ContactUs</span>
      </div>
    </div>
  );
};

export default Contactheader;
