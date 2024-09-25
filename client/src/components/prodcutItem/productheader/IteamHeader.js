import React, { useContext } from "react";
import { ShopContext } from "../../contextfile/ShopContext";
import { FaBeer } from "react-icons/fa";
import { FcNext } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";

const IteamHeader = () => {
  const navigate = useNavigate();
  const { getLocation, getProdcutStore } = useContext(ShopContext);
  //console.log("check", getLocation, getProdcutStore);
  const moveback = () => {
    if (getLocation === "serum") {
      navigate("/serum");
    }
    if (getLocation === "moisturizing") {
      navigate("/moisturizing");
    }
    if (getLocation === "removal") {
      navigate("/removal");
    }
  };
  return (
    <div className="contact-header">
      <div className="contact-tittle">{getLocation}</div>
      <div className="contact-child">
        <Link to={"/"} className="contact-home">
          HomePage
        </Link>
        <span>
          <FcNext />
        </span>
        <span style={{ cursor: "pointer" }} onClick={() => moveback()}>
          {getLocation}
        </span>
        <span>
          <FcNext />
        </span>
        <span>{getProdcutStore.productName}</span>
      </div>
    </div>
  );
};

export default IteamHeader;
