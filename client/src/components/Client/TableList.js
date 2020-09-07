import React from "react";
import { Link } from "react-router-dom";

//Boostrap components
import { Alert, Table, Form, Col, Button } from "react-bootstrap";
//Custom imports ..

import { customerStatusName } from "../../utils/consts/ClientStatus";
import helper from "../../utils/helper";

const TableList = ({
  customers,
  filrteredClientsName,
  setFilrteredClientsName,
  assignedTo,
  setAssignedTo,
}) => {
  return (
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
                  <u>Referred B</u>
                </th>
                <th>
                  <u>Added</u>
                </th>

                <th>Last update</th>
                <th>
                  <u>Status</u>
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {helper
                .filterObj(
                  customers,
                  {
                    assignedTo: assignedTo,
                    firstName: filrteredClientsName,
                  },
                  "person"
                )
                .map(customer => {
                  return (
                    <tr>
                      <td>{`${customer.person.firstName} ${customer.person.lastName}`}</td>
                      <td>
                        {customer.assignedTo
                          ? customer.assignedTo.firstName
                          : "Carl C"}
                      </td>
                      <td></td>
                      <td>{customer.person.addedDate.toLocaleString("en")}</td>

                      <td>{customer.lastAction.toLocaleString("en")}</td>
                      <td>{customerStatusName(customer.status)}</td>
                      <td className='text-right'>
                        <Link
                          to={`/import-audit/${customer._id}`}
                          className='text-success'
                        >
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
  );
};

export default TableList;
