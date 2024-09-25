import React from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { FaBeer } from "react-icons/fa";
import { FcNext } from "react-icons/fc";

const ProdcutHeader = ({ headername }) => {
  console.log(headername);
  return (
    <div className="contact-header">
      <div className="contact-tittle">{headername}</div>
      <div className="contact-child">
        <Link to={"/"} className="contact-home">
          HomePage
        </Link>
        <span>
          <FcNext />
        </span>
        <span>{headername}</span>
      </div>
    </div>
  );
};

export default ProdcutHeader;
