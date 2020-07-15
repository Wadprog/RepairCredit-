import React, { Fragment, useEffect } from "react";

import { connect } from "react-redux";
import { loadCustomers, deleteCustomer } from "../../redux/actions/customer";
import  ClientCard  from "../../components/Client/ClientCard";
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
