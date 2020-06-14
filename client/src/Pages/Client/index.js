import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import { ButtonGroup, Button, Dropdown, SplitButton } from "react-bootstrap";
import { loadCustomers } from "../../redux/actions/person";
import { ClientStatus } from "../../utils/consts/ClientStatus";
const ListClient = ({ loadCustomers, customers }) => {
  useEffect(() => {
    loadCustomers();
  }, []);

  const filterCustomerByStatus = (customer, criteria) => {
    console.log(customer.status == criteria, customer.status, criteria);
    if (customer.status === criteria) return customer;
    else console.log("doing nothing");
  };
  const Leads = customers.filter(customer =>
    filterCustomerByStatus(customer, ClientStatus.LEAD)
  );

  const CustomersMissinInfo = customers.filter(customer =>
    filterCustomerByStatus(customer, ClientStatus.MissingInfo)
  );

  const CustomersOnCampaign = customers.filter(customer =>
    filterCustomerByStatus(customer, ClientStatus.OnCampaign)
  );
  const CustomersPaused = customers.filter(customer =>
    filterCustomerByStatus(customer, ClientStatus.Pause)
  );

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
              {Leads !== null &&
                Leads.map(customer => (
                  <ClientCard
                    name={
                      customer.person.firstName + " " + customer.person.lastName
                    }
                    id={customer.person._id}
                  />
                ))}
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
            <ul className='list-group'>
              {CustomersMissinInfo !== null &&
                Leads.map(customer => (
                  <ClientCard
                    name={
                      customer.person.firstName + " " + customer.person.lastName
                    }
                    id={customer.person._id}
                  />
                ))}
            </ul>
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
            <ul className='list-group'>
              {CustomersOnCampaign !== null &&
                Leads.map(customer => (
                  <ClientCard
                    name={
                      customer.person.firstName + " " + customer.person.lastName
                    }
                    id={customer.person._id}
                  />
                ))}
            </ul>
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
            <ul className='list-group'>
              {CustomersPaused !== null &&
                Leads.map(customer => (
                  <ClientCard
                    name={
                      customer.person.firstName + " " + customer.person.lastName
                    }
                    id={customer.person._id}
                  />
                ))}
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  customers: state.person.customers,
});

export default connect(mapStateToProps, { loadCustomers })(ListClient);

const ClientCard = ({ name, id }) => {
  return (
    <li className='list-group-item mb-2 p-2'>
      <div className='row ml-2 p-0'>
        <div className='col-9 p-0'>
          <div>{name}</div>
          <small className='text-muted'>{name}</small>
        </div>
        <div className='col-3 p-0'>
          <Dropdown size='sm'>
            <Dropdown.Toggle variant='white' className=' btn-shadow bt-white' />
            <Dropdown.Menu>
              <Dropdown.Item href={`/customer/${id}`}>
                <i className='fa fa-eye'></i> View
              </Dropdown.Item>
              <Dropdown.Item href='#/action-2'>Move Next</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item className='text-warning' href='#/action-3'>
                Pause
              </Dropdown.Item>
              <Dropdown.Item className='text-danger' href='#/action-3'>
                Delete
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </li>
  );
};
