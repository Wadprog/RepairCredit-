import React from "react";
import moment from "moment";

import logo from "../../../assets/img/Logo/OasisLogo.png";
const Page1 = ({datePulled}) => {
  return (
    <div style={{ marginTop: "200px", marginBottom: "100px" }}>
      <div>
        <div>
          <img
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              marginBottom: "100px",
            }}
            src={logo}
          />
        </div>
      </div>

      <div style={{ marginTop: "10px", textAlign: "center" }}>
        <p style={{ margin: "0px" }}>
          <strong>Credit Analysis Report</strong>
        </p>
        <p style={{ margin: "0px" }}>Prepared for</p>
        <p style={{ margin: "0px" }}>
          <strong>Carl Cyrius</strong>
        </p>
        <p style={{ margin: "0px" }}>{moment(datePulled).format("l")}</p>
      </div>

      <div style={{ marginTop: "250px", textAlign: "center" }}>
        <p style={{ margin: "0px" }}>Prepared by</p>
        <p style={{ margin: "0px" }}>Carl Cyrius</p>
        <p style={{ margin: "0px" }}>The Oasis Firm</p>
        <p style={{ margin: "0px" }}>2701 W Oakland Park Blvd, Suite 410</p>
        <p style={{ margin: "0px" }}>Oakland Park, Florida 33311</p>
        <p style={{ margin: "0px" }}>www.theoasisfirm.com</p>
        <p style={{ margin: "0px" }}>ccyrius@theoasisfirm.com</p>
        <p style={{ margin: "0px" }}>(833) 886-2747</p>
      </div>
    </div>
  );
};

export default Page1;
