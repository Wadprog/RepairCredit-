import React from "react";
import Navbar from "../NavBar";
import Alert from "../../Alert";
const PageWraper = props => {
  return <div className=''>
      <Navbar />
          <Alert />
      {props.children}</div>;
};

export default PageWraper;
