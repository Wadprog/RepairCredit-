import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { Row, Col, Card, Spinner, Alert, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import PageAlert from "../../components/PageAlert";
import { getClientCreditReport } from "../../redux/actions/creditItems";
import CreditItem from "./CreditItem";
export const CreditReport = ({
  loading,
  creditItems,
  getClientCreditReport,
  match: {
    params: { id },
  },
}) => {
  useEffect(() => {
    getClientCreditReport(id);
  }, []);
  return (
    <Fragment>
      {!loading ? (
        <div>
          <Row>
            <Col>
              <h5>
                Preview Credit Report <small>({`Laurie X`})</small>
              </h5>
            </Col>
            <Col>
              <span>
                <Link to='#' className='mx-3'>
                  <i className='fa fa-play-circle mx-2'></i>
                  Watch a quick video
                </Link>
              </span>
            </Col>
          </Row>
          <Row className='border rounded p-0'>
            <Col className=' p-0'>
              <Card>
                <Card.Body>
                  <Alert variant='warning' className='text-dark'>
                    <Row>
                      <Col>
                        <i className='fa fa-font fa-3x text-center text-info'></i>
                      </Col>
                      <Col xs={11}>
                        <b>Instructions:</b> The first time you import a credit
                        report for a client, all items are flagged as "negative"
                        or "positive." For a new client, there's no reason to
                        change any item's status (unless it is incorrect). Your
                        goal here is to create "dispute items" for the wizard.
                        To do this, scroll down this page, look for "Negative"
                        items highlighted red and choose a "Reason and
                        Instructions" for each. When you get to the bottom,
                        click to save and continue. Click here for a video demo.
                        **If the report below has no data, that means you have
                        not imported the correct credit report source code.
                        Click here for help with this task.
                      </Col>
                    </Row>
                  </Alert>
                  <Row>
                    <Col className='text-right  ' xs={{ span: 6, offset: 6 }}>
                      <b>Saved on:</b> 05/06/2020 <b>Provider:</b> SmartCredit
                    </Col>
                  </Row>

                  <Row>
                    <Table
                      striped
                      bordered
                      hover
                      size='sm'
                      className='text-center'
                    >
                      <thead>
                        <tr>
                          <th className='bg-white'></th>
                          <th className='d-flex justify-content-center'>
                            TransUnion
                          </th>
                          <th className='text-center'>Experian</th>
                          <th className='text-center'>Equifax</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <h5>Personal Profile</h5>
                          </td>
                          <td colspan='3' className='text-left'>
                            {" "}
                            Personal information as it appears on the credit
                            file. Check carefully, as inaccuracies can mean
                            identity theft. if any personal information is
                            incorrect, click the record to save it as a saved
                            dispute item for the wizard
                          </td>
                        </tr>
                        <tr>
                          <td>Score</td>
                          <td>437</td>
                          <td>535</td>
                          <td>@486</td>
                        </tr>
                        <tr>
                          <td>Credit Report Date</td>
                          <td>05/06/2020 </td>
                          <td>05/06/2020 </td>
                          <td>05/06/2020 </td>
                        </tr>

                        <tr>
                          <td>Name</td>
                          <td>Gia Miller</td>
                          <td></td>
                          <td>Gia Miller</td>
                        </tr>

                        <tr>
                          <td>Also Know as</td>
                          <td> </td>
                          <td>Gia Miller</td>
                          <td> </td>
                        </tr>
                        <tr>
                          <td>Date of Birth</td>
                          <td>1976 </td>
                          <td>1976</td>
                          <td>1976 </td>
                        </tr>

                        <tr>
                          <td>Current Address</td>
                          <td>North Vickie </td>
                          <td>North Vickie</td>
                          <td>North Vickie </td>
                        </tr>

                        <tr>
                          <td>Employer</td>
                          <td>Bartell - Bauch </td>
                          <td>Bartell - Bauch</td>
                          <td>Bartell - Bauch </td>
                        </tr>

                        <tr>
                          <td>Previous Address</td>
                          <td>10381 Antonio Radial</td>
                          <td>62281 Volkman Lights</td>
                          <td>349 McLaughlin Fort</td>
                        </tr>
                      </tbody>
                    </Table>
                    {creditItems != null && (
                      <Row>
                        <Col>
                          {creditItems.creditBureauData.length > 0 &&
                            creditItems.creditBureauData.map(bureauData => (
                              <CreditItem bureauData={bureauData} />
                            ))}
                        </Col>
                      </Row>
                    )}
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      ) : (
        <div className=' h-100 d-flex justify-content-center align-items-center flex-column'>
          <div>
            <Spinner animation='grow' variant='info' role='status'>
              <span className='sr-only'>Loading...</span>
            </Spinner>
          </div>
          <h4> Be Patient Slowly Loading Data...</h4>
        </div>
      )}
    </Fragment>
  );
};

const mapStateToProps = state => ({
  creditItems: state.creditItems.creditItems,
  loading: state.creditItems.loading,
});

const mapDispatchToProps = { getClientCreditReport };

export default connect(mapStateToProps, mapDispatchToProps)(CreditReport);
