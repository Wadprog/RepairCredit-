import React, { Fragment, useState, Sonnet } from "react";
import { Link } from "react-router-dom";
import { Alert, Table, Form, Col, Button, CardGroup, Card, Row, Image } from "react-bootstrap";
import './ClientDashboard.css';
import imgEquifax from '../../utils/img/equifax.png';
import imgExperian from '../../utils/img/experian.png';
import imgTransunion from '../../utils/img/trans_union.png';
import imgNoDataPieChart from '../../utils/img/nodata-bar-chart.png';
const ClientDashboard = props => {
    return (
        <Fragment>
            <div className='container-fluid'>
                <Row>
                    <Col>
                        <Card className="rounded-circle">
                            <tbody>
                                <tr>
                                    <td className="table-title align-middle p-0 border-right">
                                        <p className="verticaltext align-middle p-0">
                                            Client
                                        </p>
                                    </td>
                                    <td className="table-body p-3">
                                        <Row>
                                            <Col>
                                                <div>Peter Chavez</div>
                                                <div>---</div>
                                                <div>
                                                    <span>Status: </span>
                                                    <span className="text-success">Client</span>
                                                </div>
                                                <div>
                                                    <Link to="#">View/Edit Profile</Link>
                                                </div>
                                            </Col>

                                            <Col>
                                                <div className="card-body mb-2 p-0">
                                                    <Item
                                                        iconClass='hand-pointer-o'
                                                        iconColor='blue'
                                                        title='1-Click Import and Audit'
                                                        subTitile='Pull reports & create audit'
                                                        link='/#'
                                                    />
                                                </div>
                                                <div className="card-body mb-2 p-0">
                                                    <Item
                                                        iconClass='cloud'
                                                        iconColor='blue'
                                                        title='Run Dispute Wizard'
                                                        subTitile='Create letters/correct errors'
                                                        link='/#'
                                                    />
                                                </div>
                                                <div className="card-body p-0">
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

                    <Col>
                        <Card className="rounded-circle">
                            <tbody>
                                <tr>
                                    <td className="table-title align-middle p-0 border-right">
                                        <p className="verticaltext align-middle p-0">
                                            Scores
                                        </p>
                                    </td>
                                    <td className="table-middle p-2">
                                        <Row>
                                            <Col md={12}>
                                                <Table size="sm" className="table-borderless">
                                                    <thead>
                                                        <tr>
                                                            <th className="w-25 px-0">

                                                            </th>
                                                            <th className="w-25 px-0">
                                                                <Image src={imgEquifax} size="sm" />
                                                            </th>
                                                            <th className="w-25 px-0">
                                                                <Image src={imgExperian} />
                                                            </th>
                                                            <th className="w-25 px-0">
                                                                <Image src={imgTransunion} />
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    {
                                                        /*
                                                        *INFO: Maximum 5 cells, view will always have 5 cells  
                                                        */
                                                    }
                                                    <tbody className="text-center">
                                                        <tr>
                                                            <th className="font-weight-normal">06/14/2020</th>
                                                            <th className="font-weight-normal">645</th>
                                                            <th className="font-weight-normal">672</th>
                                                            <th className="font-weight-normal">642</th>
                                                        </tr>

                                                    </tbody>
                                                </Table>
                                                <div className="d-flex justify-content-between">
                                                    <span>
                                                        start date: 06/02/2020
                                                    </span>
                                                    <span>
                                                        <Link to="#">Add/Edit Scores</Link>
                                                    </span>
                                                </div>
                                            </Col>
                                        </Row>
                                    </td>
                                    <td className="table-right">
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
                        <Card className="rounded-circle">
                            <tbody>
                                <tr>
                                    <td className="table-title align-middle p-0 border-right">
                                        <p className="verticaltext align-middle p-0">
                                            Documents
                                        </p>
                                    </td>
                                    <td className="table-body p-3">
                                        <Row>
                                            <Col>
                                                <div>Peter Chavez</div>
                                                <div>---</div>
                                                <div>
                                                    <span>Status: </span>
                                                    <span className="text-success">Client</span>
                                                </div>
                                                <div>
                                                    <Link to="#">View/Edit Profile</Link>
                                                </div>
                                            </Col>

                                            <Col>
                                                <div className="card-body mb-2 p-0">
                                                    <Item
                                                        iconClass='hand-pointer-o'
                                                        iconColor='blue'
                                                        title='1-Click Import and Audit'
                                                        subTitile='Pull reports & create audit'
                                                        link='/#'
                                                    />
                                                </div>
                                                <div className="card-body mb-2 p-0">
                                                    <Item
                                                        iconClass='cloud'
                                                        iconColor='blue'
                                                        title='Run Dispute Wizard'
                                                        subTitile='Create letters/correct errors'
                                                        link='/#'
                                                    />
                                                </div>
                                                <div className="card-body p-0">
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
                    <Col>

                    </Col>
                </Row>


            </div>
        </Fragment >
    )
}

export default ClientDashboard;

/**
 * TODO: We need to create a custom File name MiniItem and Item so we can use it in another file
 * @wadson create the custom file when you will refactor this code...
 *
 */

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