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
import pencilBig from "../../utils/img/pencil_big.png";
import avatarNoImage from "../../utils/img/avatar-noimage.png";
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
                                  <th className='w-25 px-0'></th>
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
            <Row className="mt-3">
              <Col>

              <Row>
                <Col md={12}>
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
                </Col>

                <Col className="mt-2" md={12}>
                 {/* Second ellement*/}
                 <DashBoarElement title='Tasks'>
                  <Tabs defaultActiveKey='profile' className='p-0 m-0'>
                    <Tab eventKey='home' title='Team task' className='w-100'>
                      <div className='my-1 p-2'>
                        <ul className='list-group list-group-flush'>
                          <li className='list-group-item'>Cras justo odio</li>
                         
                        </ul>
                        <div className='d-flex justify-content-between mt-1 mb-0'>
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
                      <div className='my-1 p-2'>
                        <ul className='list-group list-group-flush'>
                         
                          <li className='list-group-item'>
                            Vestibulum at eros
                          </li>
                        </ul>
                        <div className='d-flex justify-content-between mt-1 mb-0'>
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
                
                </Col>

                <Col>
                <DashBoarElement3 title='Dispute Status'
                childrenBody={
                <Row>
                          <Col md={12}>
                            <Table size='sm' className='table-borderless'>
                              <thead>
                                <tr>
                                  <th className='px-0'></th>
                                  <th className='px-0'>
                                    <Image src={imgEquifax} size='sm' />
                                  </th>
                                  <th className='px-0'>
                                    <Image src={imgExperian} />
                                  </th>
                                  <th className='px-0'>
                                    <Image src={imgTransunion} />
                                  </th>
                                </tr>
                              </thead>
                              {/*
                               *INFO: Maximum 5 cells, view will always have 5 cells
                               */}
                              <tbody className='text-center small'>

                                <tr className="text-blueLight">
                                  <th className='font-weight-normal text-left'>
                                    Unspecified
                                  </th>
                                  <th className='font-weight-normal'>3</th>
                                  <th className='font-weight-normal'>3</th>
                                  <th className='font-weight-normal'>3</th>
                                </tr>

                                <tr className="text-greenLight">
                                  <th className='font-weight-normal text-left'>
                                    Positive
                                  </th>
                                  <th className='font-weight-normal'>34</th>
                                  <th className='font-weight-normal'>33</th>
                                  <th className='font-weight-normal'>34</th>
                                </tr>

                                <tr className="text-greenLight">
                                  <th className='font-weight-normal text-left'>
                                    Deleted
                                  </th>
                                  <th className='font-weight-normal'>0</th>
                                  <th className='font-weight-normal'>0</th>
                                  <th className='font-weight-normal'>0</th>
                                </tr>

                                <tr className="text-greenLight">
                                  <th className='font-weight-normal text-left'>
                                    Repaired
                                  </th>
                                  <th className='font-weight-normal'>0</th>
                                  <th className='font-weight-normal'>0</th>
                                  <th className='font-weight-normal'>0</th>
                                </tr>

                                <tr className="text-apricotLight">
                                  <th className='font-weight-normal text-left'>
                                    in Disputed
                                  </th>
                                  <th className='font-weight-normal'>3</th>
                                  <th className='font-weight-normal'>3</th>
                                  <th className='font-weight-normal'>3</th>
                                </tr>

                                <tr className="text-redLight">
                                  <th className='font-weight-normal text-left'>
                                    Verified
                                  </th>
                                  <th className='font-weight-normal'>0</th>
                                  <th className='font-weight-normal'>0</th>
                                  <th className='font-weight-normal'>0</th>
                                </tr>

                                <tr className="text-redLight">
                                  <th className='font-weight-normal text-left'>
                                    Negative
                                  </th>
                                  <th className='font-weight-normal'>1</th>
                                  <th className='font-weight-normal'>1</th>
                                  <th className='font-weight-normal'>1</th>
                                </tr>

                                <tr className="text-greenLight">
                                  <th className='font-weight-normal text-left'>
                                    Updated
                                  </th>
                                  <th className='font-weight-normal'>0</th>
                                  <th className='font-weight-normal'>0</th>
                                  <th className='font-weight-normal'>0</th>
                                </tr>

                                <tr>
                                  <th className='font-weight-normal text-left'>
                                    Bureau Letters                                  
                                  </th>
                                  <th className='font-weight-normal'>2</th>
                                  <th className='font-weight-normal'>2</th>
                                  <th className='font-weight-normal'>2</th>
                                </tr>

                              </tbody>
                            </Table>
                            <div className='d-flex justify-content-center border-top small mt-1'>
                              <span>Furnishers Letters: 3</span>
                            </div>
                            <div className='d-flex justify-content-center'>
                              <Button size="sm" variant="success" className="mt-2 btn-small">View/Update All Disputes Items</Button>
                            </div>
                            <div className='d-flex justify-content-center'>
                            <Button size="sm" variant="primary" className="mt-2">Import Online Credit Report</Button>
                            </div>
                          </Col>
                          </Row>
                        }

                        childrenRight={
                          <div>
                          <Form className="p-3">
                             <Form.Group>
                                  <Form.Control size="sm" as="select" custom>
                                     <option>All</option>
                                  </Form.Control>
                              </Form.Group>
                          </Form>
                          <div className="border-top border-white m-2"></div>
                          <div className="small mt-2 text-center"><Link to="#">Client's Saved Letters</Link></div>
                          <div  className="small mt-2 text-center"><Link to="#">Client's Saved Reports</Link></div>
                          <div  className="small mt-2 text-center"><Link to="#">Document Storage</Link></div>
                           <div  className="small mt-2 text-center"><Link to="#">Pending Report</Link></div>
                           </div>
                        }
                         />
                </Col>
                </Row>
        
            <Row className="mt-3">
              <Col>
                <DashBoarElement title='Memo'>
                  <div className="d-flex justify-content-center">
                    <Image src={pencilBig} />
                  </div>
                </DashBoarElement>
              </Col>

              <Col>
                <DashBoarElement title='Invoices'>
                  <div>
                    <div className=" p-1 d-flex justify-content-between">
                      <span>Balance</span>
                      <span><Link to="#">Chargebee Transaction History</Link></span>
                    </div>
                    <Table size='sm' className='table-borderless mt-2'>
                              <thead className="font-weight-normal small text-center">
                                <tr>
                                  <th className='font-weight-normal w-25 px-0'>Total Invoiced</th>
                                  <th className='font-weight-normal w-25 px-0'>Received</th>
                                  <th className='font-weight-normal w-25 px-0'>Outstanding</th>
                                  <th className='font-weight-normal w-25 px-0'>Past Due </th>
                                </tr>
                              </thead>
                              {/*
                               *INFO: Maximum 5 cells, view will always have 5 cells
                               */}
                              <tbody className='text-center small'>

                                <tr className="">
                                  <th className='font-weight-normal'>
                                    $0
                                  </th>
                                  <th className='font-weight-normal'>$0</th>
                                  <th className='font-weight-normal'>$0</th>
                                  <th className='font-weight-normal'>$0</th>
                                </tr>
                              </tbody>
                      </Table>
                      <div className="border-bottom"></div>
                      <div className="my-3 d-flex justify-content-between">
                        <span className="small"><Link to="#">Create Invoice</Link></span>
                        <span className="small"><Link to="#">All Invoices</Link></span>
                        <span className="small"><Link to="#">Payments</Link></span>
                        <span className="small"><Link to="#">New Task</Link></span>
                      </div>
                  </div>
                </DashBoarElement>
              </Col>
            </Row>

            <Row className="mt-3">
              <Col>
                <DashBoarElement title='Contacts Assigned'>
                  <Table className="p-0">
                    <tbody className="p-0">
                      <tr>

                        <th className="w-25 border-right dashed">
                          <div>
                              <span className="font-weight-bold small">Admin</span>
                          </div>
                          <div className="mt-2">
                            <Image src={avatarNoImage} />
                          </div>
                          <div>
                            <span className="font-weight-bold small mt-2">Carl Cyrius</span>
                          </div>
                          <div>
                            <span className="font-weight-normal small">The Oasis Firm</span>
                          </div>
                          <div className="mt-3">
                            <div className="small"><Link to="#">Send Email</Link></div>
                            <div className="small"><Link to="#">Visit Website</Link></div>
                          </div>
                        </th>

                        <th></th>
                        </tr>
                       
                    </tbody>
                  </Table>
                </DashBoarElement>
              </Col>
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

const DashBoarElement3 = ({ title, childrenBody, childrenRight }) => {
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
          <td className='table-middle p-2'>{childrenBody}</td>
          <td className='table-right align-top'>
                        {childrenRight}
                      </td>
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
