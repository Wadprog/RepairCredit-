import React from "react";

const Page2 = ({ customerName, company }) => {
  return (
    <div style={{ pageBreakBefore: "always", marginTop: "100px" }}>
      <p>
        <p>
          <strong> Dear {customerName},</strong>
        </p>
        <p>
          {" "}
          On behalf of The {company.name} Firm, I'd like to take this
          opportunity to welcome you as a new client! We are thrilled to have
          you with us.{" "}
        </p>
        <p>
          {" "}
          Credit is our passion. We understand how important your credit is for
          your future and we will work tirelessly to make sure we are able to
          help you achieve your financial goals.{" "}
        </p>
        <p>
          {" "}
          This credit analysis report provides an overview of your credit as
          potential lenders see it today. It lists the items that are negatively
          affecting your score and explains how we use the power of the law to
          improve your credit. It also includes a simple step-by-step plan for
          you to speed up the process.{" "}
        </p>
        <p>
          {" "}
          This credit analysis report is broken down into the following 5
          sections:{" "}
        </p>
        <ol>
          <li>Credit Score Basics</li>
          <li>Your Credit Scores and Summary</li>
          <li>Analysis of Your Accounts</li>
          <li>An Overview of Our Process</li>
          <li>Your Part in the Process</li>
        </ol>

        <p>
          {" "}
          If you have any questions, do not hesitate to reach out. We are always
          happy to help! You can easily reach us during regular business hours
          in the following ways:{" "}
        </p>
        <ul style={{ listStyle: "none" }}>
          <li> - Email: {company.email} </li>
          <li> - Phone: {company.phone} </li>
          <li> - Website: {company.website}</li>
        </ul>
        <p>
          {" "}
          Carl Cyrius, thank you again for entrusting The Oasis Firm to restore
          your credit. We are honored to help you achieve your financial goals.{" "}
        </p>
        <p style={{ marginBottom: "0px" }}> Best, </p>
        <p style={{ marginTop: "0px" }}> {company.adminName} </p>
      </p>
    </div>
  );
};

export default Page2;
