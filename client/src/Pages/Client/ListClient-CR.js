import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Alert, Table, Form, Col } from "react-bootstrap";
const ListClientCR = props => {
    return (
        <Fragment>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12 d-flex justify-content-between'>
                        <h6 className=' text-bold '>Search my client</h6>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 d-flex justify-content-between'>
                        <Form className="form-inline">
                            <Form.Group>
                                <Form.Row className='mt-3'>
                                    <Col>
                                        <Form.Label htmlFor="search">Search by name or by email</Form.Label>
                                        <Form.Control
                                            id="search"
                                            onChange={''}
                                            name='search'
                                            value={''}
                                            type='search'
                                            size='sm'
                                            className='box'
                                        />
                                    </Col>
                                </Form.Row>
                            </Form.Group>
                        </Form>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 mb-2'>
                        <Alert variant='warning'>
                            This page list your clients your <Link to="#">clients</Link>, <Link to="#">prospects</Link>, <Link to="#">lead</Link>.
                            Use <Link to="#">Advanced Search</Link> above to sort by affiliate or team member. Use quick filter to sort by status
                             (for followed-up). Click a client's name to access records, the pencil icon to edit a profile or click a status to change it. If you enable portal access or set an agreement in a new client profile, icons of envelopes or checkmarks will appear below. Mouse-over the icons below to see more details. To learn the system, use your <Link to="#">Sample Client</Link>.
                        </Alert>
                    </div>
                </div>

                <div className="Row">
                    <div className="col-12 mb-2">
                        <Table responsive>
                            <thead>
                                <tr>
                                    <th><u>Name</u></th>
                                    <th>Assigned To</th>
                                    <th><u>Referred By</u></th>
                                    <th><u>Added</u></th>
                                    <th><u>Start Date</u></th>
                                    <th>Last Login</th>
                                    <th><u>Status</u></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Peter Chavez</td>
                                    <td>Carl C</td>
                                    <td></td>
                                    <td>06/01/2020</td>
                                    <td>06/01/2020</td>
                                    <td></td>
                                    <td>client</td>
                                    <td className="text-right">
                                        <Link to="#" className="text-success"><i className="fa fa-pencil-square-o mx-2"></i></Link>
                                        <Link to="#" className="text-primary"><i className="fa fa-user mx-2"></i></Link>
                                        <Link to="#" className="text-warning"><i className="fa fa-pencil mx-2"></i></Link>
                                        <Link to="#" className="text-danger"><i className="fa fa-times mx-2"></i></Link>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>

                </div>
            </div>
        </Fragment>
    )
}

export default ListClientCR;