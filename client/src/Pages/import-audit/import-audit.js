import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./import-audit.css";

function ImportAudit() {
  const [isInputHide, toggleHide] = useState({
    hide: false,
    expand: false,
  });
  const IsHide = (e) => {
    toggleHide({ hide: !hide });
  };
  const IsExpand = (e) => {
    toggleHide({ expand: !expand });
  };
  const hide = isInputHide.hide;
  const expand = isInputHide.expand;
  return (
    <div className='import-audit'>
      <div className='import-container'>
        <div className='header'>
          <div className='credit-report'>
            <h2>Import Cedit Report</h2>
            <h1>Credit Report</h1>
            <span>Last imported {`2 days ago`}</span>
            <i class='fas fa-check-circle'></i>
            <button>Reimport Credit Report</button>
          </div>
          <div className='credit-analysis'>
            <div className='analysis-title'>
              <span>Simple Audit(Credit Analysis)</span>
            </div>
            <div className='item'>
              <div className='item-title'>
                <h2>Import Log</h2>
                <h2>Report Provider: Smart Credit</h2>
              </div>
              <div className='table-responsive table-wrapper'>
                <table className='table table-hover mb-0'>
                  <thead>
                    <tr>
                      <th>Date Imported</th>
                      <th>Team Member</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Jun 12 2020 12:14 PM</td>
                      <td>Carl</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div onClick={IsExpand} className='select-view-help'>
          <div className='label'>
            <span>Having trouble with importing ? </span>
            <Link onClick={IsExpand}>View Importing help</Link>
          </div>
          {!expand ? (
            <i class='fas fa-caret-down'></i>
          ) : (
            <i class='fas fa-caret-up'></i>
          )}
        </div>
        <div className='credit-report-form'>
          <div className='form-title'>
            <span>Client's credit report access details:</span>
            <Link onClick={IsHide}>Edit details</Link>
          </div>
          <form>
            <div className='row'>
              <label>Report Provider:</label>
              {!hide ? (
                <span>Smart Credit</span>
              ) : (
                <span>
                  <input
                    name=''
                    className='border-0 pl-2 form-control text-success text-bold'
                    placeholder='Smart Credit'
                  />
                </span>
              )}
            </div>
            <div className='row'>
              <label>Username:</label>
              {!hide ? (
                <span>theoasisfirm@gmail.com</span>
              ) : (
                <span>
                  <input
                    name=''
                    className='border-0 pl-2 form-control text-success text-bold'
                    placeholder='theoasisfirm@gmail.com'
                  />
                </span>
              )}
            </div>
            <div className='row'>
              <label>Password: </label>
              {!hide ? (
                <span>Goodcredit1</span>
              ) : (
                <span>
                  <input
                    name=''
                    className='border-0 pl-2 form-control text-success text-bold'
                    placeholder='Goodcredit1'
                  />
                </span>
              )}
            </div>
            <div className='row'>
              <label>Phone Number: </label>
              {!hide ? (
                <span></span>
              ) : (
                <span>
                  <input
                    name=''
                    className='border-0 pl-2 form-control text-success text-bold'
                    placeholder=''
                  />
                </span>
              )}
            </div>
            <div className='row'>
              <label>Securty Number: </label>
              {!hide ? (
                <span></span>
              ) : (
                <span>
                  <input
                    name=''
                    className='border-0 pl-2 form-control text-success text-bold'
                    placeholder=''
                  />
                </span>
              )}
            </div>
            <div className='row'>
              <label>Notes: </label>
              {!hide ? (
                <span></span>
              ) : (
                <span>
                  <input
                    name=''
                    className='border-0 pl-2 form-control text-success text-bold'
                    placeholder=''
                  />
                </span>
              )}
            </div>
            {hide ? (
              <div className='row'>
                <input className='button input' type='submit' text='Save' />
                <button className='button' onClick={IsHide}>
                  Cancel
                </button>
              </div>
            ) : null}
          </form>
        </div>
      </div>
    </div>
  );
}

export default ImportAudit;
