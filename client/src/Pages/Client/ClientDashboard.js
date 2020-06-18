import React, { Fragment, useState, useEffect, Sonnet } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { customerStatusName } from "../../utils/consts/ClientStatus";
import {
  Alert,
  Table,
  Form,
  Col,
  Button,
  CardGroup,
  Card,
  Row,
  Image,
  Tabs,
  Tab,
} from "react-bootstrap";
import "./ClientDashboard.css";
import imgEquifax from "../../utils/img/equifax.png";
import imgExperian from "../../utils/img/experian.png";
import imgTransunion from "../../utils/img/trans_union.png";
import imgNoDataPieChart from "../../utils/img/nodata-bar-chart.png";
import { loadClientById } from "../../redux/actions/person";
const ClientDashboard = ({
  customer,
  loadClientById,
  match: {
    params: { id },
  },
}) => {
  useEffect(() => {
    loadClientById(id);
  }, []);
  return (
    <Fragment>
      <div className='container-fluid'>
        {customer != null && (
          <Fragment>
            <Row>
              <Col>
                <DashBoarElement title='Client'>
                  <Row>
                    <Col>
                      <h5 className='text-bold'>{`${customer.person.firstName} ${customer.person.lastName}`}</h5>
                      <div>---</div>

                      <div>
                        <span className='h6'>Status: </span>
                        <span className='text-success'>
                          {customerStatusName(customer.status)}
                        </span>
                      </div>
                      <div>
                        <Link className='text-info' to={`/customer/edit/${id}`}>
                          View/Edit Profile
                        </Link>
                      </div>
                    </Col>

                    <Col>
                      <div className='card-body mb-2 p-0'>
                        <Item
                          iconClass='hand-pointer-o'
                          iconColor='blue'
                          title='1-Click Import and Audit'
                          subTitile='Pull reports & create audit'
                          link={`/import-audit/${id}`}
                        />
                      </div>
                      <div className='card-body mb-2 p-0'>
                        <Item
                          iconClass='cloud'
                          iconColor='blue'
                          title='Run Dispute Wizard'
                          subTitile='Create letters/correct errors'
                          link='/#'
                        />
                      </div>
                      <div className='card-body p-0'>
                        <Item
                          iconClass='lock'
                          iconColor='blue'
                          title='Send Secure Message'
                          subTitile='via Client Portal'
                          link='/#'
                        />
                      </div>
                    </Col>
                  </Row>
                </DashBoarElement>
              </Col>

              <Col>
                <Card className='rounded-circle'>
                  <tbody>
                    <tr>
                      <td className='table-title align-middle p-0 border-right'>
                        <p className='verticaltext align-middle p-0'>Scores</p>
                      </td>
                      <td className='table-middle p-2'>
                        <Row>
                          <Col md={12}>
                            <Table size='sm' className='table-borderless'>
                              <thead>
                                <tr>
                                  <th className='w-25 px-0'>...</th>
                                  <th className='w-25 px-0'>
                                    <Image src={imgEquifax} size='sm' />
                                  </th>
                                  <th className='w-25 px-0'>
                                    <Image src={imgExperian} />
                                  </th>
                                  <th className='w-25 px-0'>
                                    <Image src={imgTransunion} />
                                  </th>
                                </tr>
                              </thead>
                              {/*
                               *INFO: Maximum 5 cells, view will always have 5 cells
                               */}
                              <tbody className='text-center'>
                                <tr>
                                  <th className='font-weight-normal'>
                                    06/14/2020
                                  </th>
                                  <th className='font-weight-normal'>645</th>
                                  <th className='font-weight-normal'>672</th>
                                  <th className='font-weight-normal'>642</th>
                                </tr>
                              </tbody>
                            </Table>
                            <div className='d-flex justify-content-between'>
                              <span>start date: 06/02/2020</span>
                              <span>
                                <Link to='#'>Add/Edit Scores</Link>
                              </span>
                            </div>
                          </Col>
                        </Row>
                      </td>
                      <td className='table-right'>
                        {/*
                         *TODO: Add statistic no pie chart here
                         */}
                      </td>
                    </tr>
                  </tbody>
                </Card>
              </Col>
            </Row>

            {
              //Second Line
            }
            <Row>
              <Col>
                <DashBoarElement title='Documents'>
                  <Row>
                    <Col>
                      <Row>
                        <Col className='mb-3'>
                          <span className='text-bold'>Issued/Received</span>
                        </Col>
                      </Row>
                      <Form>
                        <Form.Row>
                          <Col>
                            <Form.Check
                              type='checkbox'
                              label='Client Agreement '
                            />
                          </Col>
                          <Col>
                            <Button variant='light'>
                              <i className='fa fa-cloud-upload'></i>
                            </Button>
                          </Col>
                        </Form.Row>
                      </Form>
                      <Form>
                        <Form.Row>
                          <Col>
                            <Form.Check
                              type='checkbox'
                              label='Photo ID Copy  '
                            />
                          </Col>
                          <Col>
                            <Button variant='light'>
                              <i className='fa fa-cloud-upload'></i>
                            </Button>
                          </Col>
                        </Form.Row>
                      </Form>
                      <Form>
                        <Form.Row>
                          <Col>
                            <Form.Check
                              type='checkbox'
                              label='Utility Bill/Proof of Address  '
                            />
                          </Col>
                          <Col>
                            <Button variant='light'>
                              <i className='fa fa-cloud-upload'></i>
                            </Button>
                          </Col>
                        </Form.Row>
                      </Form>
                      <Form>
                        <Form.Row>
                          <Col>
                            <Form.Check
                              type='checkbox'
                              label='Social Security Card (optional) '
                            />
                          </Col>
                          <Col>
                            <Button variant='light'>
                              <i className='fa fa-cloud-upload'></i>
                            </Button>
                          </Col>
                        </Form.Row>
                      </Form>
                    </Col>
                  </Row>
                </DashBoarElement>

                {/* Second ellement*/}
                <DashBoarElement title='Tasks'>
                  <Tabs defaultActiveKey='profile' className='p-0 m-0'>
                    <Tab eventKey='home' title='Team task' className='w-100'>
                      <div className='my-3 p-2'>
                        <ul className='list-group list-group-flush'>
                          <li className='list-group-item'>Cras justo odio</li>
                          <li className='list-group-item'>
                            Dapibus ac facilisis in
                          </li>
                          <li className='list-group-item'>Morbi leo risus</li>
                          <li className='list-group-item'>
                            Porta ac consectetur ac
                          </li>
                          <li className='list-group-item'>
                            Vestibulum at eros
                          </li>
                        </ul>
                        <div className='d-flex justify-content-between mt-3 mb-2'>
                          <Link to='#'>View complete list</Link>
                          <Button size='sm' variant='link'>
                            <i className='fa fa-plus'></i>Add new Task{" "}
                          </Button>
                        </div>
                      </div>
                    </Tab>
                    <Tab
                      eventKey='profile'
                      title='Client Task'
                      className='w-100'
                    >
                      <div className='my-3 p-2'>
                        <ul className='list-group list-group-flush'>
                          <li className='list-group-item'>Cras justo odio</li>
                          <li className='list-group-item'>
                            Dapibus ac facilisis in
                          </li>
                          <li className='list-group-item'>Morbi leo risus</li>
                          <li className='list-group-item'>
                            Porta ac consectetur ac
                          </li>
                          <li className='list-group-item'>
                            Vestibulum at eros
                          </li>
                        </ul>
                        <div className='d-flex justify-content-between mt-3 mb-2'>
                          <Link to='#'>View complete list</Link>
                          <Button size='sm' variant='link'>
                            <i className='fa fa-plus'></i>Add new Task{" "}
                          </Button>
                        </div>
                      </div>
                    </Tab>
                  </Tabs>
                </DashBoarElement>
              </Col>
              <Col>
                {" "}
                <DashBoarElement title='Dispute Status'>
                  <Tabs defaultActiveKey='profile' className='p-0 m-0'>
                    <Tab eventKey='home' title='Team task' className='w-100'>
                      <div className='my-3 p-2'>
                        <ul className='list-group list-group-flush'>
                          <li className='list-group-item'>Cras justo odio</li>
                          <li className='list-group-item'>
                            Dapibus ac facilisis in
                          </li>
                          <li className='list-group-item'>Morbi leo risus</li>
                          <li className='list-group-item'>
                            Porta ac consectetur ac
                          </li>
                          <li className='list-group-item'>
                            Vestibulum at eros
                          </li>
                        </ul>
                        <div className='d-flex justify-content-between mt-3 mb-2'>
                          <Link to='#'>View complete list</Link>
                          <Button size='sm' variant='link'>
                            <i className='fa fa-plus'></i>Add new Task{" "}
                          </Button>
                        </div>
                      </div>
                    </Tab>
                    <Tab
                      eventKey='profile'
                      title='Client Task'
                      className='w-100'
                    >
                      <div className='my-3 p-2'>
                        <ul className='list-group list-group-flush'>
                          <li className='list-group-item'>Cras justo odio</li>
                          <li className='list-group-item'>
                            Dapibus ac facilisis in
                          </li>
                          <li className='list-group-item'>Morbi leo risus</li>
                          <li className='list-group-item'>
                            Porta ac consectetur ac
                          </li>
                          <li className='list-group-item'>
                            Vestibulum at eros
                          </li>
                        </ul>
                        <div className='d-flex justify-content-between mt-3 mb-2'>
                          <Link to='#'>View complete list</Link>
                          <Button size='sm' variant='link'>
                            <i className='fa fa-plus'></i>Add new Task{" "}
                          </Button>
                        </div>
                      </div>
                    </Tab>
                  </Tabs>
                </DashBoarElement>
              </Col>
            </Row>
            <Row>
              <Col>
                <DashBoarElement title='Memo'>Memo</DashBoarElement>
              </Col>
              <Col></Col>
            </Row>
            <Row>
              <Col>
                <DashBoarElement title='Memo'>
                  Contacts Assigned
                </DashBoarElement>
              </Col>
              <Col></Col>
            </Row>
            <Row className='mt-3'>
              <Col>
                <Card className='rounded-circle'>
                  <tbody class='table-sm'>
                    <tr>
                      <td
                        className='table-title  justify-content-center  p-0 border-right p-0'
                        style={{
                          maxWidth: 60,
                          position: "relative",
                          minWidth: 60,
                        }}
                      >
                        <p
                          className='verticaltext text-center bg-danger  abc'
                          style={{
                            display: "block",
                            position: "absolute",
                            left: -20,
                            top: 50 + "%",
                            width: 100,
                            textOrientation: "sideways-right",
                          }}
                        >
                          Documents
                        </p>
                      </td>
                      <td className='table-body p-3'>
                        <Row>
                          <Col>
                            <div>Peter Chavez</div>
                            <div>---</div>
                            <div>
                              <span>Status: </span>
                              <span className='text-success'>Client</span>
                            </div>
                            <div>
                              <Link to='#'>View/Edit Profile</Link>
                            </div>
                          </Col>

                          <Col>
                            <div className='card-body mb-2 p-0'>
                              <Item
                                iconClass='hand-pointer-o'
                                iconColor='blue'
                                title='1-Click Import and Audit'
                                subTitile='Pull reports & create audit'
                                link='/#'
                              />
                            </div>
                            <div className='card-body mb-2 p-0'>
                              <Item
                                iconClass='cloud'
                                iconColor='blue'
                                title='Run Dispute Wizard'
                                subTitile='Create letters/correct errors'
                                link='/#'
                              />
                            </div>
                            <div className='card-body p-0'>
                              <Item
                                iconClass='lock'
                                iconColor='blue'
                                title='Send Secure Message'
                                subTitile='via Client Portal'
                                link='/#'
                              />
                            </div>
                          </Col>
                        </Row>
                      </td>
                    </tr>
                  </tbody>
                </Card>
              </Col>
              <Col></Col>
            </Row>
          </Fragment>
        )}
      </div>
    </Fragment>
  );
};
const mapStateToProps = state => ({
  customer: state.person.customer,
});
export default connect(mapStateToProps, { loadClientById })(ClientDashboard);

/**
 * TODO: We need to create a custom File name MiniItem and Item so we can use it in another file
 * @wadson create the custom file when you will refactor this code...
 *
 */

const DashBoarElement = ({ title, children }) => {
  return (
    <Card className='rounded-circle'>
      <tbody>
        <tr>
          <td
            className='table-title align-middle p-0 border-right'
            style={{
              maxWidth: 60,
              position: "relative",
              minWidth: 60,
            }}
          >
            <p
              className='verticaltext align-middle p-0 abc'
              style={{
                display: "block",
                position: "absolute",
                left: -20,
                top: 50 + "%",
                width: 100,
                textOrientation: "sideways-right",
              }}
            >
              {title}
            </p>
          </td>
          <td className='table-body p-3'>{children}</td>
        </tr>
      </tbody>
    </Card>
  );
};

const ClientDetails = () => {
  return (
    <Row>
      <Col>
        <div>Peter Chavez</div>
        <div>---</div>
        <div>
          <span>Status: </span>
          <span className='text-success'>Client</span>
        </div>
        <div>
          <Link to='#'>View/Edit Profile</Link>
        </div>
      </Col>

      <Col>
        <div className='card-body mb-2 p-0'>
          <Item
            iconClass='hand-pointer-o'
            iconColor='blue'
            title='1-Click Import and Audit'
            subTitile='Pull reports & create audit'
            link='/#'
          />
        </div>
        <div className='card-body mb-2 p-0'>
          <Item
            iconClass='cloud'
            iconColor='blue'
            title='Run Dispute Wizard'
            subTitile='Create letters/correct errors'
            link='/#'
          />
        </div>
        <div className='card-body p-0'>
          <Item
            iconClass='lock'
            iconColor='blue'
            title='Send Secure Message'
            subTitile='via Client Portal'
            link='/#'
          />
        </div>
      </Col>
    </Row>
  );
};
const Item = ({ title, subTitile, link, iconClass, iconColor }) => {
  return (
    <div className=' box box-item p-2 col-12'>
      <Link className='text-decoration-none text-dark' to={link}>
        <div className='row no-gutters'>
          <div class='col-md-2 mx-auto'>
            <i
              className={`fa fa-${iconClass} fa-2x`}
              style={{ color: `${iconColor}` }}
            ></i>
          </div>
          <div class='col-md-10'>
            <span className='font-weight-bold small'>{title}</span> <br />
            <span className=''>
              <small>{subTitile}</small>
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};
