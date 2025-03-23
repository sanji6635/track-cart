import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className={"navbar"}>
      <div>logo</div>
      <div></div>
      <div className="pages">
        <div style={{ border: "none" }}>
          <span>HOME</span>
        </div>
        <div>
          <span>CONTACT</span>
        </div>
        <div>
          <span>PRODUCT</span>
        </div>
        <div>
          <span>SERVICES</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
