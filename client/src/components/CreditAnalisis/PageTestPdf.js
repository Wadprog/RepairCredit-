import React, { useEffect, Link, Button } from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';

import Loading from '../Loading';
import Page1 from './PdfPages/Page1';

import './index.css';

const PageTestPdf = () => {
  const date = '2014-01-01T00:00:00.000';

  return <PdfPage date={date} />;
};

const PdfPage = ({ date }) => {
  const createAndDownPdf = () => {
    axios
      .post('/create-pdf')
      .then(() => axios.get('/fetch-pdf', { responseType: 'blob' }))
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: 'application/pdf' });

        saveAs(pdfBlob, 'newPdf.pdf');
      });
  };

  return (
    <div style={{ fontFamily: ['Roboto', 'Arial', 'Helvetica', 'sans-serif'] }}>
      <button
        id="generate"
        className="btn btn-outline-success"
        onClick={() => {
          createAndDownPdf();
        }}
      >
        Generate Pdf
      </button>

      <div id="pdf-cover">
        <div className="container-fluid">
          <Page1 datePulled={date} />
          <hr className="rounded w-100" />
        </div>
      </div>
    </div>
  );
};

export default PageTestPdf;
