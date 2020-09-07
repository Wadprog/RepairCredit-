import React from "react";
import Navbar from "../NavBar";
import Alert from "../../Alert";
const PageWraper = props => {
  return (
    <>
      <Navbar />
      <Alert />
      {props.children}
    </>
  );
};

export default PageWraper;
