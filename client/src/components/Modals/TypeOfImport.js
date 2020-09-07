import React from "react";

const TypeOfImport = ({ manuelImport, id }) => {
  return (
    <div className=''>
      <a
        href={`/credit-report/${id}`}
        className='btn btn-primary text-center p-2'
      >
        <h6 className='text-center'>Chosse Import Method</h6>
        <div className='row'>
          <div className='col col-xs-1'>
            <i className='fa fa-4x fa-home'></i>
          </div>
          <div className='col col-xs-11'>
            <h4>New Import with one click </h4>
            <small className='d-block'> Import report 1-click</small>
            <small>* Works with all recommended providers</small>
          </div>
        </div>
      </a>
      <div>
        <a
          onClick={e => {
            e.preventDefault();
            manuelImport(true);
          }}
        >
          {" "}
          Alternate Providers (Use manual Source Code) Not recommended
        </a>
      </div>
    </div>
  );
};

export default TypeOfImport;
