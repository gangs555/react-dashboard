import React, { useState } from "react";
import * as FaIcons from "react-icons";
import * as AiIcons from "react-icons";
import { TiThMenu } from "react-icons/ti";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { sideBarData } from "./SidebarData";
import "../index.css";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <>
      <IconContext.Provider value={{ color: "black" }}>
        <div className="navbar">
          <Link to="#">
            <TiThMenu onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu-active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <IoMdCloseCircleOutline />
              </Link>
            </li>
            {sideBarData.map((item, key) => {
              return (
                <li key={key} className={item.cName}>
                  <Link to={item.path}>
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
