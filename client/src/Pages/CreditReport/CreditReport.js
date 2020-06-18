import React from "react";
import { connect } from "react-redux";
import { Row, Col, Card, Button, Alert, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

export const CreditReport = () => {
  return (
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
                  <Col>1</Col>
                  <Col xs={11}>
                    <b>Instructions:</b> The first time you import a credit
                    report for a client, all items are flagged as "negative" or
                    "positive." For a new client, there's no reason to change
                    any item's status (unless it is incorrect). Your goal here
                    is to create "dispute items" for the wizard. To do this,
                    scroll down this page, look for "Negative" items highlighted
                    red and choose a "Reason and Instructions" for each. When
                    you get to the bottom, click to save and continue. Click
                    here for a video demo. **If the report below has no data,
                    that means you have not imported the correct credit report
                    source code. Click here for help with this task.
                  </Col>
                </Row>
              </Alert>
              <Row>
                <Col className='text-right  ' xs={{ span: 6, offset: 6 }}>
                  <b>Saved on:</b> 05/06/2020 <b>Provider:</b> SmartCredit
                </Col>
              </Row>

              <Row>
                <Table striped bordered hover size='md' className='text-center'>
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
                        Personal information as it appears on the credit file.
                        Check carefully, as inaccuracies can mean identity
                        theft. if any personal information is incorrect, click
                        the record to save it as a saved dispute item for the
                        wizard
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td colSpan='2'>Larry the Bird</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </Table>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CreditReport);
