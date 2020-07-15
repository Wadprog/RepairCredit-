import React, { Fragment, useState, useEffect } from "react";
import { Dropdown } from "react-bootstrap";
import { connect } from "react-redux";
import { loadCustomers, deleteCustomer } from "../../redux/actions/customer";

const ListClient = ({ deleteCustomer, loadCustomers, customers }) => {
  useEffect(() => {
    loadCustomers();
  }, []);

  const categories = [
    "LEADS",
    "With Monitoring Service ",
    "On Automation",
    "Paused Customers",
  ];
  const catArray = [];

  categories.forEach(category => {
    catArray.push([]);
  });
  // Grouping by status
  const filterCustomerByStatus = customers => {
    if (!customers.length > 0) return;
    customers.forEach(customer => {
      catArray[parseInt(customer.status)].push(customer);
    });
    return catArray;
  };
  filterCustomerByStatus(customers);

  const handleDeleteCustomer = e => {
    deleteCustomer(e.target.id);
  };

  return (
    <Fragment>
      <div className='row  no-gutters pt-3 text-dark'>
        {catArray != null &&
          catArray.length > 0 &&
          catArray.map((category, idx) => (
            <div className='col' key={idx}>
              <ol className='breadcrumb breadcrumb-arrow'>
                <li className=''>
                  <a href='#'>{categories[idx]}</a>
                  <div className='pt-3 h4-custom-margin'>
                    <span id='deals'> Total : {category.length}</span>
                  </div>
                </li>
              </ol>
              <span className='arrow'></span>
              <div className='px-1'>
                <ul className='list-group'>
                  {category.length > 0 &&
                    category.map(customer => (
                      <ClientCard
                        key={customer._id}
                        id={customer._id}
                        deleteSelf={handleDeleteCustomer}
                        name={
                          customer.person.firstName +
                          " " +
                          customer.person.lastName
                        }
                      />
                    ))}
                </ul>
              </div>
            </div>
          ))}
      </div>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  customers: state.customer.customers,
});

export default connect(mapStateToProps, { loadCustomers, deleteCustomer })(
  ListClient
);

const ClientCard = ({ name, id, deleteSelf }) => {
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
                View <i className='fa fa-eye'></i>
              </Dropdown.Item>
              <Dropdown.Item href='#/action-2'>Move Next</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item
                className='text-danger'
                id={id}
                onClick={e => {
                  deleteSelf(e);
                }}
              >
                Delete
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </li>
  );
};
