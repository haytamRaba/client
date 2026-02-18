import React from "react";
import "./Main.css";
import MainHeader from "../miniComponents/mainHeader/mainHeader";
import MainBody from "../miniComponents/mainBody/mainBody";
import MainFooter from "../miniComponents/mainFooter/mainFooter";
const Main = () => {

  return (
    <div className="main">
      <MainHeader/>
      <MainBody/>
      <MainFooter/>
    </div>
  );
};

export default Main;
