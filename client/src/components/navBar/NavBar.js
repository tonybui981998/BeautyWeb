import React, { useEffect, useState } from "react";
import "./NavBar.scss";
import { FaBeer } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { RiShoppingBasketFill } from "react-icons/ri";
import { AiOutlineMenuFold } from "react-icons/ai";
import { useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  const [searchInput, setSearchInput] = useState(false);
  const [openmenubar, setOpenMenubar] = useState(false);
  const [activeMenu, setActiveMenu] = useState("/");

  // open input search
  const openSearchInput = () => {
    setSearchInput(!searchInput);
    console.log(searchInput);
  };
  // open
  const openMenu = () => {
    setOpenMenubar(!openmenubar);
  };
  useEffect(() => {}, [location]);
  return (
    <div className="navBar">
      <div className="nav-left">GlowBeauty</div>
      <div
        onClick={() => openMenu()}
        className={`nav-middle ${openmenubar ? "open" : ""}`}
      >
        <div className={`nav-menu ${activeMenu === "/" ? "active" : ""} `}>
          HomePage
        </div>
        <div className="nav-menu">Serum</div>
        <div className="nav-menu">moisturizing</div>
        <div className="nav-menu">Removal</div>
        <div className="nav-menu">FeedBack</div>
        <div className="nav-menu">Contact</div>
      </div>
      <div className="nav-right">
        <div onClick={() => openMenu()} className="nav-icon-bar">
          <AiOutlineMenuFold />
        </div>
        <div onClick={() => openSearchInput()} className="nav-icon">
          {" "}
          <FaSearch />
        </div>
        <div className="nav-icon">
          <IoPersonSharp />
        </div>
        <div className="nav-icon">
          <RiShoppingBasketFill />
          <span>0</span>
        </div>
        <div className={`inputfakesearch ${searchInput ? "inputsearch" : ""}`}>
          <input type="text" />{" "}
          <span>
            <button className="nav-button">Submit</button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
