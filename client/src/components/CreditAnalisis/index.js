import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getCreditItemById } from "../../redux/actions/creditItems";

import Loading from "../Loading";
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
const CreditAnalisis = ({
  creditItemId,
  getCreditItemById,
  creditItem,
  creditItemLoading,
}) => {
  useEffect(() => {
    getCreditItemById(creditItemId);
  }, []);
  const tempCom = {
    name: "Oasis",
    email: "esa@gmail.com",
    phone: "8098762145",
    website: "www.kj.com",
    admin: "Carl Cyrius",
  };
  return creditItemLoading ? (
    <Loading />
  ) : (
    <div style={{ fontFamily: ["Roboto", "Arial", "Helvetica", "sans-serif"] }}>
      {creditItem != null && (
        <div id='pdf-cover'>
          <div className='container-fluid'>
            <Page1 datePulled={creditItem.datePulled} />
            <Page2 customerName='Wadson Vaval ' company={tempCom} />
            <Page3 />
            <Page4 />
            <Page5 />
            <Page6 />
            <Page7 items= {creditItem.creditBureauData}/>

            <Page8 />
            <Page9 />
            <Page10 />
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  creditItem: state.creditItems.creditItem,
  creditItemLoading: state.creditItems.loading,
});

const mapDispatchToProps = { getCreditItemById };
export default connect(mapStateToProps, mapDispatchToProps)(CreditAnalisis);
