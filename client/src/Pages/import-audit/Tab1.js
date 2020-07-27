import React, { Fragment } from "react";
import { Row, Col, Card, ButtonGroup, Button } from "react-bootstrap";
import CreditReportAccessDetails from "./CreditReportAccessDetails";
import useToogle from "../../utils/CustomHooks/useToogle";
import { connect } from "react-redux";
import { getALLClientCreditReport } from "../../redux/actions/creditItems";
import { useEffect } from "react";
import moment from "moment";
import Loading from "../../components/Loading";
import { camelobjectToString } from "../../utils/StringOperations";

function Tab1({ customer, getALLClientCreditReport, creditItems, loading }) {
  const [isExpanded, toggleExpand] = useToogle();

  useEffect(() => {
    getALLClientCreditReport(customer._id);
  }, []);

  creditItems.sort(function (a, b) {
    if (moment(a.datepulled).isAfter(b.datepulled)) {
      return 1;
    } else if (moment(a.datepulled).isBefore(b.datepulled)) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });
  let maxdays = 0;
  if (creditItems) {
    const lastestPullDate =
      creditItems.length > 0 ? creditItems[0].datepulled : null;
    maxdays = moment(new Date()).diff(moment(lastestPullDate), "days");
  }
  const maxDaysForReimporting = 30;
  return (
    <div>
      <div className="import-container">
        <div className="header">
          <div className="credit-report">
            <h2>Credit Report</h2>

            {!loading ? (
              <Fragment>
                {maxdays == null ? (
                  <span>
                    {" "}
                    <b>Never Imported</b>{" "}
                  </span>
                ) : (
                  <span>Last imported {maxdays} days ago</span>
                )}

                <i
                  className={`fa fa-${
                    maxdays == null || maxdays < maxDaysForReimporting
                      ? "check-circle text-success"
                      : "times-circle text-danger"
                  } fa-5x`}
                ></i>

                <a href={`/credit-report/${customer._id}`} className="imp-btn">
                  {`${
                    maxdays == null || maxdays > maxDaysForReimporting
                      ? "Im"
                      : "Reim"
                  }port Credit Report`}
                </a>
              </Fragment>
            ) : (
              <span>Calculating...</span>
            )}
          </div>
          <div className="credit-analysis">
            <div className="item">
              <div className="item-title">
                <h2>Import Log</h2>

                {customer.monitoringService && (
                  <h2>
                    Report Provider:{" "}
                    {camelobjectToString(customer.monitoringService.name)}
                  </h2>
                )}
              </div>
              <div className="table-responsive table-wrapper">
                <table className="table table-hover mb-0">
                  <thead>
                    <tr>
                      <th>Date Imported</th>
                      <th>Team Member</th>
                      <th></th>
                    </tr>
                  </thead>
                  {loading ? (
                    <div className="d-flex justify-content-center align-items-center w-100 bg-danger">
                      <Loading />
                    </div>
                  ) : (
                    <tbody>
                      <Fragment>
                        {creditItems != null &&
                          creditItems.length > 0 &&
                          creditItems.map((creditItem, idx) => (
                            <Fragment key={idx}>
                              {idx < 3 && (
                                <tr>
                                  <td>
                                    {moment(creditItem.datepulled).format("l")}
                                  </td>
                                  <td>Carl</td>
                                  <td>
                                    <ButtonGroup size="sm">
                                      <Button size="sm" variant="info">
                                        <i className="fa fa-eye"></i>
                                      </Button>
                                      <Button size="sm" variant="success">
                                        <i className="fa fa-pencil"></i>
                                      </Button>
                                      <Button size="sm" variant="danger">
                                        <i className="fa fa-trash"></i>
                                      </Button>
                                    </ButtonGroup>
                                  </td>
                                </tr>
                              )}
                            </Fragment>
                          ))}
                      </Fragment>
                    </tbody>
                  )}
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

const mapStateToProps = (state) => ({
  customer: state.customer.customer,
  creditItems: state.creditItems.creds,
  loading: state.creditItems.loading,
});

const mapDispatchToProps = { getALLClientCreditReport };

export default connect(mapStateToProps, mapDispatchToProps)(Tab1);
