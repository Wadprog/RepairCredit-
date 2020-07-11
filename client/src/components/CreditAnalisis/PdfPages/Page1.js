import React from "react";
import logo from "../../../assets/img/Logo/OasisLogo.png";
const Page1 = () => {
  return (
    <div style={{ marginTop: "300px" }}>
      <div className='row'>
        <div>
          <img
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            src={logo}
          />
        </div>
      </div>
    </div>
  );
};

export default Page1;
