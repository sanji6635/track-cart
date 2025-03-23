import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import "./homepage.css";
const HOMEPAGE = () => {
  return (
    <div className={"homepage"}>
      <div className={"main"}>
        <Navbar />
        <Header />
      </div>
    </div>
  );
};

export default HOMEPAGE;
