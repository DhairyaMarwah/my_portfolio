import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Navbar = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const menuItems = [
    {
      title: "Home",
      scroll: "our-vision-container",
    },
    {
      title: "Services",
      scroll: "our-services-container",
    },
    {
      title: "Contact Me",
      scroll: "who-are-we-container",
    },
    {
      title: "Tools",
      scroll: "our-goals-container",
    },
    {
      title: "Projects",
      scroll: "our-goals-container",
    },
  ];
  return (
    <div className="navbar">
      <div className="navbar__logo">
        dhairya
        <br />
        marwah.
      </div>
      <div className="navbar__links">
        {menuItems.map((item, index) => (
          <p
            key={item}
            // initial={{ y: -10, opacity: 0 }}
            // animate={{ y: 0, opacity: 1 }}
            // transition={{
            //   duration: 0.4,
            //   delay: index * 0.2,
            //   ease: "easeInOut",
            // }}
            onClick={() => {
              props.handleClick(item.scroll);
            }}
          >
            {item.title}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
