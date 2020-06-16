import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { Alert, Table, Form, Col, Button } from "react-bootstrap";
import { loadCustomers } from "../../redux/actions/person";
import { customerStatusName } from "../../utils/consts/ClientStatus";
import { connect } from "react-redux";
const ListClientCR = ({ loadCustomers, customers }) => {
  useEffect(() => {
    loadCustomers();
  }, []);

  return (
    <Fragment>
      <div className='container-fluid'>
        <div className='row mb-3'>
          <div className='col-12 d-flex justify-content-between'>
            <h6 className='text-bold'>Search my client</h6>
            <span>
              <Link to='#' className='mx-3'>
                <i className='fa fa-play-circle mx-2'></i>
                Watch a quick video
              </Link>
              <Button
                variant='secondary'
                type='submit'
                size='sm'
                className='mx-3'
              >
                <i className='fa fa-plus-circle mx-2 text-success'></i>
                Add New Client
              </Button>
            </span>
          </div>
        </div>
        <div className='row my-3'>
          <div className='col-12 d-flex justify-content-between'>
            <Form className='form-inline'>
              <Form.Group>
                <Form.Label column sm='6'>
                  Search by name or by email
                </Form.Label>
                <Col sm='4'>
                  <Form.Control
                    id='search'
                    onChange={""}
                    name='search'
                    value={""}
                    type='search'
                    size='sm'
                    className='box'
                  />
                </Col>
              </Form.Group>
              <Link to='#' className='mx-3'>
                Advanced search
              </Link>
              <Button
                variant='primary'
                type='submit'
                size='sm'
                className='mx-3'
              >
                Search
              </Button>
            </Form>
          </div>
        </div>
        <div className='row'>
          <div className='col-12 mb-2'>
            <Alert variant='warning' className='justify-content'>
              This page list your clients your <Link to='#'>clients</Link>,{" "}
              <Link to='#'>prospects</Link>, <Link to='#'>lead</Link>. Use{" "}
              <Link to='#'>Advanced Search</Link> above to sort by affiliate or
              team member. Use quick filter to sort by status (for followed-up).
              Click a client's name to access records, the pencil icon to edit a
              profile or click a status to change it. If you enable portal
              access or set an agreement in a new client profile, icons of
              envelopes or checkmarks will appear below. Mouse-over the icons
              below to see more details. To learn the system, use your{" "}
              <Link to='#'>Sample Client</Link>.
            </Alert>
          </div>
        </div>
        <div className='row mb-3'>
          <div className='col-12 d-flex justify-content-between'>
            <Form className='form-inline'>
              <Form.Group>
                <Form.Label column sm='6'>
                  Quick Filter:
                </Form.Label>
                <Col sm='6'>
                  <Form.Control
                    size='sm'
                    as='select'
                    name='search'
                    value={""}
                    onChange={""}
                  >
                    <option>All</option>
                  </Form.Control>
                </Col>
              </Form.Group>
              <span>Learn how to find clients faster:</span>
              <Link to='#' className='mx-2'>
                click here
              </Link>
            </Form>
            <div className='align-self-center'>
              <Link to='#' className='mx-2'>
                Import CSV
              </Link>
              <Link to='#' className='mx-2'>
                Export CSV
              </Link>
              <Link to='#' className='mx-2'>
                print
              </Link>
            </div>
          </div>
        </div>
        <div className='Row'>
          <div className='col-12 mb-2'>
            {customers != null && customers.length > 0 ? (
              <Table responsive className='border-bottom'>
                <thead>
                  <tr>
                    <th>
                      <u>Name</u>
                    </th>
                    <th>Assigned To</th>
                    <th>
                      <u>Referred By</u>
                    </th>
                    <th>
                      <u>Added</u>
                    </th>
                    <th>
                      <u>Start Date</u>
                    </th>
                    <th>Last Login</th>
                    <th>
                      <u>Status</u>
                    </th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {customers.map(customer => {
                    return (
                      <tr>
                        <td>{`${customer.person.firstName} ${customer.person.lastName}`}</td>
                        <td>Carl C</td>
                        <td></td>
                        <td>06/01/2020</td>
                        <td>06/01/2020</td>
                        <td></td>
                        <td>{customerStatusName(customer.status)}</td>
                        <td className='text-right'>
                          <Link to='#' className='text-success'>
                            <i className='fa fa-pencil-square-o mx-2'></i>
                          </Link>
                          <Link to='#' className='text-primary'>
                            <i className='fa fa-user mx-2'></i>
                          </Link>
                          <Link to='#' className='text-warning'>
                            <i className='fa fa-pencil mx-2'></i>
                          </Link>
                          <Link to='#' className='text-danger'>
                            <i className='fa fa-times mx-2'></i>
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            ) : (
              <p>There are no client's yet</p>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  customers: state.person.customers,
});

export default connect(mapStateToProps, { loadCustomers })(ListClientCR);
