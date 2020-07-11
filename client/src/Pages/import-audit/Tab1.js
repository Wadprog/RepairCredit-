import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import CreditReportAccessDetails from "./CreditReportAccessDetails";
import useToogle from "../../utils/CustomHooks/useToogle";
import { connect } from "react-redux";

function Tab1({ customer }) {
  const [isExpanded, toggleExpand] = useToogle();

  const handleAudit = e => {
    console.log(e.target);
    //Temp
    return (window.location.href = `/credit-report/${customer._id}`);
  };
  return (
    <div>
      <div className='import-container'>
        <div className='header'>
          <div className='credit-report'>
            <h2>Credit Report</h2>
            <span>Last imported {`2 days ago`}</span>
            <i className='fa fa-check-circle fa-5x'></i>
            <button onClick={handleAudit}>Reimport Credit Report</button>
          </div>
          <div className='credit-analysis'>
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

        <Card>
          <Card.Header>
            <Row>
              <Col xs={11}>
                <h6>Having Trouble importing credit</h6>
              </Col>
              <Col onClick={toggleExpand}>
                <i className={`fa fa-caret-${isExpanded ? "up" : "down"} `}></i>
              </Col>
            </Row>
          </Card.Header>
          {isExpanded && (
            <Card.Body>Hello!This needs to be wrtten first</Card.Body>
          )}
        </Card>

        <CreditReportAccessDetails />
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  customer: state.customer.customer,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Tab1);
