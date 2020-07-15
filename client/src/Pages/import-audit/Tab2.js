import React, { useEffect, useState } from "react";
import { Form, Table, Button, DropdownButton, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import Modal from "../../components/Modals";
import CreditAnalisis from "../../components/CreditAnalisis";
import PageAlert from "../../components/PageAlert";
import { connect } from "react-redux";
import { getALLClientCreditReport } from "../../redux/actions/creditItems";

const Tab2 = ({ customer, getALLClientCreditReport, creditItems }) => {
  useEffect(() => {
    getALLClientCreditReport(customer._id);
    return () => {
      console.log("cleaned");
    };
  }, []);

  const [show, handleShow] = useState(false);
  const [creditItemId, setCreditItemId] = useState();
  return (
    <div>
      <PageAlert
        msg="Simple audit is the ultimate sales tool for a potential client 
      considering your services. With 1 click it creates an in-depth credit
      analysis report for your client, showing items affecting the score and
       next steps. Our default template will automatically fill in each client's
        name and your company information with no editing needed. you can modify
         it or add your own templates, but we recommend not making any changes at
          all"
        variant='warning'
        children={
          <span>
            <i class='fa fa-play-circle text-primary'></i>
            <Link to='#'> Watch a quick video</Link>
          </span>
        }
      />

      <div className='d-flex justify-content-center mt-2'>
        <span className='h4'>Generate simple Audit Now</span>
      </div>
      <div className='d-flex justify-content-center mt-2'>
        <span className=''>Using data from SmartCredit imported report</span>
      </div>
      <div className='d-flex justify-content-center'>
        <span className=''>(Last imported 3 days ago)</span>
      </div>
      <div className='d-flex justify-content-center mt-2'>
        <span className=''>using template</span>
      </div>
      <div className='d-flex justify-content-center mt-2'>
        <Form className='p-3'>
          <Form.Group>
            <Form.Control md={6} size='sm' as='select' custom>
              <option>Simple Audit (default)</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </div>
      <div className='d-flex justify-content-center mt-2 mb-4'>
        <Button size='sm' variant='primary' className='px-2'>
          Generate Simple Audit
        </Button>
      </div>
      {creditItems != null && creditItems.length > 0 && (
        <div className='mt-4'>
          <span className='h4'>Saved Audit</span>
          <Table size='sm' className='table-border small'>
            <thead className='border-bottom-0 table-borderless'>
              <tr>
                <th>Audit Name</th>
                <th>Date Created</th>
                <th>Team Member</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {creditItems.map(creditItem => (
                <tr key={creditItem._id} className='border-bottom p-0 m-0'>
                  <td>{customer.person.firstName} Credit Analisys</td>
                  <td>{creditItem.datepulled}</td>
                  <td>Carl</td>
                  <td>
                    <Dropdown>
                      <Dropdown.Toggle variant='success' size='sm'>
                        Actions
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item
                          onClick={() => {
                            setCreditItemId(creditItem._id);
                            handleShow(true);
                          }}
                        >
                          View
                        </Dropdown.Item>
                        <Dropdown.Item href='#/action-2'>Delete</Dropdown.Item>
                        <Dropdown.Item href='#/action-3'>Edit</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </td>
                </tr>
              ))}
            </tbody>
            <small className='mt-2'>
              <span className='text-primary'>Total: </span>
              <span>{creditItems.length}</span>
            </small>
          </Table>
        </div>
      )}
      <Modal
        title={`${customer.person.firstName} credit analisys`}
        show={show}
        onHide={() => {
          handleShow(false);
        }}
      >
        <CreditAnalisis customer={customer} creditItemId={creditItemId} />
      </Modal>
    </div>
  );
};

const mapStateToProps = state => ({
  customer: state.customer.customer,
  creditItems: state.creditItems.creds,
});

const mapDispatchToProps = { getALLClientCreditReport };

export default connect(mapStateToProps, mapDispatchToProps)(Tab2);
