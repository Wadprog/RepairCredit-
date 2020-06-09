import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import { ButtonGroup, Button, Dropdown, SplitButton } from "react-bootstrap";
import { loadClient } from "../../redux/actions/client";
const ListClient = ({ loadClient, customers }) => {
  useEffect(() => {
    loadClient();
  }, []);
  return (
    <Fragment>
      <div className='row row-cols-4 no-gutters pt-3 text-dark'>
        <div className='col'>
          <ol className='breadcrumb breadcrumb-arrow'>
            <li className=''>
              <a href='#'>Lead in</a>
              <div className='pt-3 h4-custom-margin'>
                <span id='total-money'>0 $</span>
                <span>•</span>
                <span id='deals'>8 deals</span>
              </div>
            </li>
          </ol>
          <span className='arrow'></span>
          <div className='px-1'>
            <ul className='list-group'>
              {customers !== null && customers.map(customer => <ClientCard />)}

              <li className='list-group-item mb-2'>
                <div className='row ml-2'>
                  <div className='col-10'>
                    <div>Carl Osny</div>
                    <small className='text-muted'>Carl Osny</small>
                  </div>
                  <div className='col-2'>
                    <Dropdown as={ButtonGroup} size='sm'>
                      <Button href='/6' variant='success'>
                        <i className='fa fa-eye'></i>
                      </Button>

                      <Dropdown.Toggle
                        split
                        variant='success'
                        id='dropdown-split-basic'
                      />

                      <Dropdown.Menu>
                        <Dropdown.Item href='#/action-1'>Action</Dropdown.Item>
                        <Dropdown.Item href='#/action-2'>
                          Another action
                        </Dropdown.Item>
                        <Dropdown.Item href='#/action-3'>
                          Something else
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className='col'>
          <ol className='breadcrumb breadcrumb-arrow'>
            <li className=''>
              <a href='#'>Waiting on Reports</a>
              <div className='pt-3 h4-custom-margin'>
                <span id='total-money'>0 $</span>
                <span>•</span>
                <span id='deals'>8 deals</span>
              </div>
            </li>
          </ol>
          <span className='arrow'></span>
          <div className='px-1'>
            <table className='table table-bordered bg-white'>
              <tbody>
                <tr>
                  <td colspan='3'>Mark</td>
                </tr>
                <tr>
                  <td colspan='3'>Jacob</td>
                </tr>
                <tr>
                  <td colspan='3'>Larry the Bird</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className='col'>
          <ol className='breadcrumb breadcrumb-arrow'>
            <li className=''>
              <a href='#'>LEAD CAMPAIGN</a>
              <div className='pt-3 h4-custom-margin'>
                <span id='total-money'>0 $</span>
                <span>•</span>
                <span id='deals'>2 deals</span>
              </div>
            </li>
          </ol>
          <span className='arrow'></span>
          <div className='px-1'>
            <table className='table table-bordered bg-white'>
              <tbody>
                <tr>
                  <td colspan='3'>Mark</td>
                </tr>
                <tr>
                  <td colspan='3'>Jacob</td>
                </tr>
                <tr>
                  <td colspan='3'>Larry the Bird</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className='col'>
          <ol className='breadcrumb breadcrumb-arrow'>
            <li className=''>
              <a href='#'>Pause Campaign</a>
              <div className='pt-3 h4-custom-margin'>
                <span id='total-money'>0 $</span>
                <span>•</span>
                <span id='deals'>16 deals</span>
              </div>
            </li>
          </ol>
          <div className='px-1'>
            <table className='table table-bordered bg-white'>
              <tbody>
                <tr>
                  <td>Mark</td>
                </tr>
                <tr>
                  <td>Jacob</td>
                </tr>
                <tr>
                  <td>Larry the Bird</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  customers: state.customer.customers,
});

export default connect(mapStateToProps, { loadClient })(ListClient);

const ClientCard = ({ name, _id }) => {
  return (
    <li className='list-group-item mb-2'>
      <div className='row ml-2 p-0'>
        <div className='col-9 p-0'>
          <div>{name}</div>
          <small className='text-muted'>({name})</small>
        </div>
        <div className='col-3 p-0'>
          <Dropdown as={ButtonGroup} size='sm'>
            <Button href='/5' variant='success'>
              <i className='fa fa-eye'></i>
            </Button>

            <Dropdown.Toggle split variant='success' />
            <Dropdown.Menu>
              <Dropdown.Item href={`/customer/${_id}`}>
                View <i className='fa fa-eye'></i>
              </Dropdown.Item>
              <Dropdown.Item href='#/action-2'>
                Move Next <i className='fa fa-arrow-right'></i>
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item className='text-warning' href='#/action-3'>
                Pause <i className='fa fa-pause'></i>
              </Dropdown.Item>
              <Dropdown.Item className='text-danger' href='#/action-3'>
                Delete <i className='fa fa-trash'></i>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </li>
  );
};
