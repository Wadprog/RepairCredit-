import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getCreditItemById } from "../../redux/actions/creditItems";
import Page1 from "./PdfPages/Page1";
import "./index.css";
const CreditAnalisis = ({ creditItemId, getCreditItemById, creditItem }) => {
  useEffect(() => {
    getCreditItemById(creditItemId);
    return () => {
      console.log("Credit Items Id ");
    };
  }, []);
  return (
    <div style={{ fontFmily: ["Roboto", "Arial", "Helvetica", "sans-serif"] }}>
      <div id='pdf-cover'>
        <div className='container-fluid'>
          <Page1 />
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
