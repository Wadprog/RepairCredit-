import React from "react";
import carImg from "../../../assets/img/toyota-camry.jpg";

const Page3 = () => {
  return (
    <div style={{ pageBreakBefore: "always" }}>
      <p>
        <strong>PART 1 - CREDIT SCORE BASICS</strong>
      </p>
      <p style={{ marginTop: "30px" }}>
        <strong>What a Low Credit Score Costs you</strong>
      </p>
      <p>
        <img
          style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}
          src={carImg}
        />
      </p>

      <p style={{ textAlign: "center", margin: "5px" }}>
        Brand New Toyota Camry
      </p>
      <p style={{ textAlign: "center", margin: "5px" }}>$23,000</p>
      <p style={{ textAlign: "center", marginTop: "5px" }}>66 Month Term</p>
      <div style={{ marginTop: "70px", textAlign: "center" }}>
        <p>
          <span style={{ marginRight: "100px" }}>PERSON A</span>
          <span style={{ marginLeft: "100px" }}>PERSON B</span>
        </p>
        <p>
          <span style={{ marginRight: "100px" }}>Credit Score: 730 </span>
          <span style={{ marginLeft: "100px" }}>Credit Score: 599</span>
        </p>
        <p>
          <span style={{ marginRight: "100px" }}>Interest Rate: 1.99%</span>
          <span style={{ marginLeft: "100px" }}>Interest Rate: 14.99%</span>
        </p>
        <p>
          <span style={{ marginRight: "100px" }}>Payment: $368.22</span>
          <span style={{ marginLeft: "100px" }}>Payment: $513.97</span>
        </p>
        <p>
          <span style={{ marginRight: "100px" }}>
            Total Interest Paid $1302.39
          </span>
          <span style={{ marginLeft: "100px" }}>
            Total Interest Paid $10,921.44
          </span>
        </p>
        <p>
          <span style={{ marginRight: "100px" }}>
            Total Payments: $24,302.39
          </span>
          <span style={{ marginLeft: "100px" }}>
            Total Payments: $33,921.44
          </span>
        </p>
      </div>
      <div style={{ marginTop: "70px", textAlign: "center" }}>
        <p>Person B pays</p>
        <p style={{ font: "40px" }}>
          <strong>$9,616.05 MORE</strong>
        </p>
        <p>than person A for the exact same car and price!</p>
        <p>
          This same thing happens with your credit cards, mortgage, loans, etc.
        </p>
        <p style={{ margin: "0px" }}>
          Cleaning up your credit will lower your bills
        </p>
        <p style={{ margin: "0px" }}>
          and can save hundreds of thousands of dollars!
        </p>
      </div>
    </div>
  );
};

export default Page3;
