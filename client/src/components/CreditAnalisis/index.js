import React, { useEffect } from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';
import { connect } from 'react-redux';
import { getCreditItemById } from '../../redux/actions/creditItems';

import Loading from '../Loading';
import Page1 from './PdfPages/Page1';
import Page2 from './PdfPages/Page2';
import Page3 from './PdfPages/Page3';
import Page4 from './PdfPages/Page4';
import Page5 from './PdfPages/Page5';
import Page6 from './PdfPages/Page6';
import Page7 from './PdfPages/Page7';
import Page8 from './PdfPages/Page8';
import Page9 from './PdfPages/Page9';
import Page10 from './PdfPages/Page10';

import './index.css';
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
    name: 'Oasis',
    email: 'esa@gmail.com',
    phone: '8098762145',
    website: 'www.kj.com',
    admin: 'Carl Cyrius',
  };
  return creditItemLoading ? (
    <Loading />
  ) : (
    <PdfPage tempCom={tempCom} creditItem={creditItem} />
  );
};

const createAndDownPdf = (creditItem) => {
  axios
    .post('/create-pdf', creditItem)
    .then(() => axios.get('/fetch-pdf', { responseType: 'blob' }))
    .then((res) => {
      const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
      {
        /* Change pdf name saved to a dynamic name */
      }
      saveAs(pdfBlob, 'newPdf.pdf');
    });
};

const mapStateToProps = (state) => ({
  creditItem: state.creditItems.creditItem,
  creditItemLoading: state.creditItems.loading,
});

const mapDispatchToProps = { getCreditItemById };
export default connect(mapStateToProps, mapDispatchToProps)(CreditAnalisis);

const PdfPage = ({ creditItem, tempCom }) => {
  return (
    <div style={{ fontFamily: ['Roboto', 'Arial', 'Helvetica', 'sans-serif'] }}>
      <button
        onClick={() => {
          createAndDownPdf(creditItem);
        }}
        id="generate"
        className="btn btn-outline-success"
      >
        Generate Pdf
      </button>

      {creditItem != null && (
        <div id="pdf-cover">
          <div className="container-fluid">
            <Page1 datePulled={creditItem.datePulled} />
            <hr className="rounded w-100" />
            <Page2 customerName="Wadson Vaval " company={tempCom} />
            <hr className="rounded w-100" />
            <Page3 />
            <hr className="rounded w-100" />
            <Page4 />
            <hr className="rounded" />
            <Page5 />
            <hr className="rounded" />
            <Page6 />
            <hr className="rounded" />
            <Page7 items={creditItem.creditBureauData} />
            <hr className="rounded" />
            <Page8 />
            <hr className="rounded" />
            <Page9 />
            <hr className="rounded" />
            <Page10 />
          </div>
        </div>
      )}
    </div>
  );
};
