import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getCreditItemById } from "../../redux/actions/creditItems";
import Page1 from "./PdfPages/Page1";
import Page2 from "./PdfPages/Page2";
import Page3 from "./PdfPages/Page3";
import Page4 from "./PdfPages/Page4";
import Page5 from "./PdfPages/Page5";
import Page6 from "./PdfPages/Page6";
import Page7 from "./PdfPages/Page7";
import Page8 from "./PdfPages/Page8";
import Page9 from "./PdfPages/Page9";
import Page10 from "./PdfPages/Page10";
import "./index.css";
const CreditAnalisis = ({ creditItemId, getCreditItemById, creditItem }) => {
  useEffect(() => {
    getCreditItemById(creditItemId);
    return () => {
      console.log("Credit Items Id ");
    };
  }, []);

  return (
    <div style={{ fontFamily: ["Roboto", "Arial", "Helvetica", "sans-serif"] }}>
      <div id='pdf-cover'>
        <div className='container-fluid'>
          <Page1 />
          <Page2 />
          <Page3 />
          <Page4 />
          <Page5 />
          <Page6 />
          <Page7 />

          <Page8 />
          <Page9 />
          <Page10 />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  creditItem: state.creditItems.creditItem,
});

const mapDispatchToProps = { getCreditItemById };
export default connect(mapStateToProps, mapDispatchToProps)(CreditAnalisis);
