import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import "./import-audit.css";
import PageAlert from "../../components/PageAlert";
import { Tabs, Tab, Form, Button, Table } from "react-bootstrap";

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
  const handleAudit = (e) => {
    console.log(e.target);
    //Temp
    return (window.location.href = "/credit-report/1");
  };
  return (
    <Tabs defaultActiveKey="MainImport">
      <Tab eventKey="MainImport" title="Import Credit Report">
        <div>
          <div className="import-container">
            <div className="header">
              <div className="credit-report">
                <h2>Credit Report</h2>
                <span>Last imported {`2 days ago`}</span>
                <i className="fa fa-check-circle fa-5x"></i>
                <button onClick={handleAudit}>Reimport Credit Report</button>
              </div>
              <div className="credit-analysis">
                <div className="item">
                  <div className="item-title">
                    <h2>Import Log</h2>
                    <h2>Report Provider: Smart Credit</h2>
                  </div>
                  <div className="table-responsive table-wrapper">
                    <table className="table table-hover mb-0">
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
            <div onClick={IsExpand} className="select-view-help">
              <div className="label">
                <span>Having trouble with importing ? </span>
                <Link onClick={IsExpand}>View Importing help</Link>
              </div>
              {!expand ? (
                <i class="fas fa-caret-down"></i>
              ) : (
                <i class="fas fa-caret-up"></i>
              )}
            </div>
            <div className="credit-report-form">
              <div className="form-title">
                <span>Client's credit report access details:</span>
                <Link onClick={IsHide}>Edit details</Link>
              </div>
              <form>
                <div className="row">
                  <label>Report Provider:</label>
                  {!hide ? (
                    <span>Smart Credit</span>
                  ) : (
                    <span>
                      <input
                        name=""
                        className="border-0 pl-2 form-control text-success text-bold"
                        placeholder="Smart Credit"
                      />
                    </span>
                  )}
                </div>
                <div className="row">
                  <label>Username:</label>
                  {!hide ? (
                    <span>theoasisfirm@gmail.com</span>
                  ) : (
                    <span>
                      <input
                        name=""
                        className="border-0 pl-2 form-control text-success text-bold"
                        placeholder="theoasisfirm@gmail.com"
                      />
                    </span>
                  )}
                </div>
                <div className="row">
                  <label>Password: </label>
                  {!hide ? (
                    <span>Goodcredit1</span>
                  ) : (
                    <span>
                      <input
                        name=""
                        className="border-0 pl-2 form-control text-success text-bold"
                        placeholder="Goodcredit1"
                      />
                    </span>
                  )}
                </div>
                <div className="row">
                  <label>Phone Number: </label>
                  {!hide ? (
                    <span></span>
                  ) : (
                    <span>
                      <input
                        name=""
                        className="border-0 pl-2 form-control text-success text-bold"
                        placeholder=""
                      />
                    </span>
                  )}
                </div>
                <div className="row">
                  <label>Securty Number: </label>
                  {!hide ? (
                    <span></span>
                  ) : (
                    <span>
                      <input
                        name=""
                        className="border-0 pl-2 form-control text-success text-bold"
                        placeholder=""
                      />
                    </span>
                  )}
                </div>
                <div className="row">
                  <label>Notes: </label>
                  {!hide ? (
                    <span></span>
                  ) : (
                    <span>
                      <input
                        name=""
                        className="border-0 pl-2 form-control text-success text-bold"
                        placeholder=""
                      />
                    </span>
                  )}
                </div>
                {hide ? (
                  <div className="row">
                    <input
                      className="buttonCancel input"
                      type="submit"
                      text="Save"
                    />
                    <button className="buttonCancel" onClick={IsHide}>
                      Cancel
                    </button>
                  </div>
                ) : null}
              </form>
            </div>
          </div>
        </div>
      </Tab>

      <Tab eventKey="simpleImport" title="Simple Audit(Credit Analysis)">
        <div>
          <PageAlert
            msg="Simple audit is the ultimate sales tool for a potential client 
        considering your services. With 1 click it creates an in-depth credit
        analysis report for your client, showing items affecting the score and
         next steps. Our default template will automatically fill in each client's
          name and your company information with no editing needed. you can modify
           it or add your own templates, but we recommend not making any changes at
            all"
            variant="warning"
            children={
              <span>
                <i class="fa fa-play-circle text-primary"></i>
                <Link to="#"> Watch a quick video</Link>
              </span>
            }
          />

          <div className="d-flex justify-content-center mt-2">
            <span className="h4">Generate simple Audit Now</span>
          </div>
          <div className="d-flex justify-content-center mt-2">
            <span className="">
              Using data from SmartCredit imported report
            </span>
          </div>
          <div className="d-flex justify-content-center">
            <span className="">(Last imported 3 days ago)</span>
          </div>
          <div className="d-flex justify-content-center mt-2">
            <span className="">using template</span>
          </div>
          <div className="d-flex justify-content-center mt-2">
            <Form className="p-3">
              <Form.Group>
                <Form.Control md={6} size="sm" as="select" custom>
                  <option>Simple Audit (default)</option>
                </Form.Control>
              </Form.Group>
            </Form>
          </div>
          <div className="d-flex justify-content-center mt-2 mb-4">
            <Button size="sm" variant="primary" className="px-2">
              Generate Simple Audit
            </Button>
          </div>
          <div className="mt-4">
            <span className="h4">Save Audit</span>
            <Table size="sm" className="table-border small">
              <thead className="border-bottom-0 table-borderless">
                <tr>
                  <th>Audit Name</th>
                  <th>Date Created</th>
                  <th>Team Member</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-bottom p-0 m-0">
                  <td>John Doe Credit Analysis</td>
                  <td>Jun 18 2020 03:26 pm</td>
                  <td>Carl</td>
                  <td>
                    <Form className="">
                      <Form.Group>
                        <Form.Control md={4} size="sm" as="select" custom>
                          <option>Actions</option>
                        </Form.Control>
                      </Form.Group>
                    </Form>
                  </td>
                </tr>
              </tbody>
              <p className="mt-2">
                <span className="text-primary">Total: </span>
                <span>1</span>
              </p>
            </Table>
          </div>
        </div>
      </Tab>
    </Tabs>
  );
}

export default ImportAudit;
