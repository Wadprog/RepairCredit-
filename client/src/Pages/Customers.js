import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";

//Boostrap components
import { Alert, Form, Col, Button } from "react-bootstrap";
// Redux imports
import { connect } from "react-redux";

//Custom imports ..
import AddClientForm from "../components/Client/AddClientForm";
import CardList from "../components/Client/CardList";
import { loadCustomers } from "../redux/actions/customer";
import LoadingCircle from "../components/layouts/Loading";
import Modal from "../components/Modals";
import TableList from "../components/Client/TableList";

const Customers = ({ loadCustomers, customers, Loading }) => {
  useEffect(() => {
    loadCustomers();
  }, []);

  const [filrteredClientsName, setFilrteredClientsName] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [viewTable, setViewTable] = useState(true);
  const [addClientModal, setAddClientModal] = useState(false);

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
                onClick={() => setAddClientModal(true)}
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
                    onChange={e => {
                      setFilrteredClientsName(e.target.value);
                    }}
                    name='search'
                    value={filrteredClientsName}
                    type='search'
                    size='sm'
                    className='box'
                  />
                </Col>
              </Form.Group>
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
                    value={assignedTo}
                    onChange={e => {
                      setAssignedTo(e.target.value);
                      console.log(e.target.value);
                    }}
                  >
                    <option selected disabled>
                      All
                    </option>
                    {customers
                      .reduce((acc, cust) => {
                        const assigned = cust.assignedTo
                          ? cust.assignedTo.firstName
                          : "Carl ";
                        return acc + "," + assigned;
                      }, "")
                      .split(",")
                      .map(assign => (
                        <option>{assign}</option>
                      ))}
                  </Form.Control>
                </Col>
              </Form.Group>

              <Form.Group>
                <Form.Label column sm='6'>
                  Category
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
            </Form>
            <div className='align-self-center'>
              <a
                href='#'
                className='mx-3'
                onClick={() => {
                  setViewTable(!viewTable);
                }}
              >
                <i className={`fa fa-${viewTable ? "th" : "list"}`}></i>
              </a>

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
        {Loading ? (
          <LoadingCircle />
        ) : (
          <Fragment>
            {viewTable ? (
              <TableList
                customers={customers}
                filrteredClientsName={filrteredClientsName}
                setFilrteredClientsName={setFilrteredClientsName}
                setFilrteredClientsName={setFilrteredClientsName}
                assignedTo={assignedTo}
                setAssignedTo={setAssignedTo}
              />
            ) : (
              <CardList customers={customers} />
            )}
          </Fragment>
        )}
      </div>
      <Modal
        title='Add a new customer '
        show={addClientModal}
        onHide={() => setAddClientModal(false)}
      >
        <AddClientForm cust={customers[0]} />
      </Modal>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  customers: state.customer.customers,
  Loading: state.customer.loading,
});

export default connect(mapStateToProps, { loadCustomers })(Customers);
