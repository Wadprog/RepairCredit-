import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Button, Form, Col } from "react-bootstrap";
import stateOfUsa from "../../utils/data/stateofUsa.json";
import SelectCreatable from "../../components/Form-input/select-creatable";
import { addCustomer } from "../../redux/actions/customer";
import loadPartners from "../../redux/actions/partners";
/////////////////////////////////////Dealing with Access Level////////////////////////////////////////////////////////
import { AccessLevel } from "../../utils/consts/Permitions/AccessLevel";
/********************************************************************************************************************/
/////////////////////////////////// Defining the Component////////////////////////////////////////////////////////////
/*********************************************************************************************************************/

const AddClient = ({ loading, partners, addCustomer, loadPartners }) => {
  useEffect(() => {
    loadPartners();
  }, []);

  /**
   * TODO: We need to Shrink this file my ideas is to create a custom Form.row
   * INFO: We are getting the employes for the partners array
   * ? REASON FOR Const Employess Because clients can be only assigned only to employess not to affiliates
   * ** Partnes will pull both Affiliate and Employes
   * @Gervens and @Fenley  and Admin is just an employee will all access level
   *
   */

  const Employees = partners.filter(partner => {
    if (
      partner.AcessLevel < AccessLevel.Employee ||
      partner.AcessLevel == AccessLevel.Employee
    )
      return partner;
  });
  const [formData, setFormdata] = useState({});

  const handleSubmit = e => {
    e.preveentDefault();
    console.log(formData);
  };
  return (
    <div>
      <div className='row'>
        <div className='col-12 d-flex justify-content-between'>
          <h6 className=' text-bold '>Add Client</h6>
          <Button variant='outline-secondary' href='/'>
            {" "}
            <i className='fa fa-arrow-left'></i>Back
          </Button>
        </div>
      </div>
      <div className='row mt-2'>
        <div className='col-12'>
          <Form onSubmit={handleSubmit}>
            <Form.Row>
              <Col>
                <Form.Label>First name*</Form.Label>
                <Form.Control
                  className='box'
                  size='sm'
                  placeholder='First name'
                />
              </Col>
              <Col>
                <Form.Label>Middl name</Form.Label>
                <Form.Control
                  size='sm'
                  className='box'
                  placeholder='Last name'
                />
              </Col>
            </Form.Row>

            <Form.Row className='mt-3'>
              <Col>
                <Form.Label>Last name*</Form.Label>
                <Form.Control
                  size='sm'
                  className='box'
                  placeholder='First name'
                />
              </Col>
              <Col>
                <Form.Label>Suffix </Form.Label> (Jr, Sr, etc.)
                <Form.Control
                  size='sm'
                  className='box'
                  placeholder='Last name'
                />
              </Col>
            </Form.Row>

            <Form.Row className='mt-3'>
              <Col>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type='email'
                  size='sm'
                  className='box'
                  placeholder='Someone@somewhere.com'
                />
              </Col>
              <Col className='d-flex align-items-center'>
                <Form.Check type='checkbox' label='Client has no Email' />
              </Col>
            </Form.Row>
            <Form.Row className='mt-3'>
              <Col>
                <Form.Label>Last 4 of ssn</Form.Label>
                <Form.Control size='sm' className='box' placeholder='9999' />
              </Col>
              <Col>
                <Form.Label>DOB</Form.Label>
                <Form.Control
                  type='date'
                  size='sm'
                  className='box'
                  placeholder='First name'
                />
              </Col>
            </Form.Row>

            <Form.Row className='mt-3'>
              <Col>
                <Form.Label>Phone (H)</Form.Label>
                <Form.Control
                  size='sm'
                  className='box'
                  placeholder='First name'
                />
              </Col>
              <Col>
                <Form.Label>Phone W</Form.Label>
                <Form.Control
                  size='sm'
                  className='box'
                  placeholder='First name'
                />
              </Col>
            </Form.Row>

            <Form.Row className='mt-3'>
              <Col>
                <Form.Label>Phone (M)</Form.Label>
                <Form.Control
                  size='sm'
                  className='box'
                  placeholder='First name'
                />
              </Col>
              <Col>
                <Form.Label>Fax</Form.Label>
                <Form.Control
                  size='sm'
                  className='box'
                  placeholder='First name'
                />
              </Col>
            </Form.Row>

            <Form.Row className='mt-3'>
              <Col>
                <Form.Label>Mailing address</Form.Label>
                <Form.Control
                  size='sm'
                  className='box'
                  placeholder='First name'
                />
              </Col>
            </Form.Row>

            <Form.Row className='mt-3'>
              <Col>
                <Form.Label>City</Form.Label>
                <Form.Control
                  size='sm'
                  className='box'
                  placeholder='First name'
                />
              </Col>
              <Col>
                <Form.Label>State</Form.Label>
                <SelectCreatable
                  className='box form-control-sm'
                  required
                  className='form-control'
                  onChange={null}
                  name='state'
                  placeholder='State'
                  items={stateOfUsa}
                />
              </Col>
            </Form.Row>

            <Form.Row className='mt-3'>
              <Col>
                <Form.Label>Zip Code</Form.Label>
                <Form.Control
                  size='sm'
                  className='box'
                  placeholder='First name'
                />
              </Col>
              <Col>
                <Form.Label>Country</Form.Label>
                <Form.Control
                  className='border-0 text-bold'
                  size='sm'
                  disabled
                  value='United State'
                />
              </Col>
            </Form.Row>
            <hr></hr>
            <Form.Row className='mt-3'>
              <Col>
                <Form.Label>Status</Form.Label>
                <Form.Control
                  size='sm'
                  className='box'
                  placeholder='First name'
                />
              </Col>
              <Col>
                <Form.Label>Date of Start</Form.Label>
                <Form.Control className='box' value='United State' />
              </Col>
            </Form.Row>

            <Form.Row className='mt-3'>
              <Col>
                <Form.Label>Assigned to</Form.Label>
                <SelectCreatable
                  className='box form-control-sm'
                  required
                  className='form-control'
                  onChange={null}
                  name='Employess'
                  placeholder='Employees'
                  items={["Jhon", "paul"]}
                />
              </Col>
              <Col>
                <Form.Label>Referred by</Form.Label>
                <SelectCreatable
                  className='box form-control-sm'
                  required
                  className='form-control'
                  onChange={null}
                  name='Affiliates and employees'
                  placeholder='Employees'
                  items={["Jhon", "paul", "Antoine"]}
                />
              </Col>
            </Form.Row>
            <hr></hr>

            <Button variant='primary' type='submit'>
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

AddClient.prototype = {
  loading: PropTypes.bool.isRequired,
  partners: PropTypes.array.isRequired,
  addCustomer: PropTypes.func.isRequired,
  loadPartners: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
  loading: state.partners.loading,
  partners: state.partners.partners,
});

const mapDispatchToProps = {
  addCustomer,
  loadPartners,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddClient);
