import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Button, Form, Col } from "react-bootstrap";
import stateOfUsa from "../../utils/data/stateofUsa.json";
import { Redirect } from "react-router";

import { loadCoworkers, addPerson } from "../../redux/actions/person";
/////////////////////////////////////Dealing with Access Level////////////////////////////////////////////////////////
import { AccessLevel } from "../../utils/consts/Permitions/AccessLevel";
/********************************************************************************************************************/
/////////////////////////////////// Defining the Component////////////////////////////////////////////////////////////
/*********************************************************************************************************************/

const AddClient = ({ loading, partners, addPerson, loadCoworkers }) => {
  useEffect(() => {
    loadCoworkers();
  }, []);

  /**
   * TODO: We need to Shrink this file my ideas is to create a custom Form.row
   * INFO: We are getting the employes for the partners array
   * ? REASON FOR Const Employess Because clients can be only assigned only to employess not to affiliates
   * ** Partnes will pull both Affiliate and Employes
   * @Gervens and @Fenley  and Admin is just an employee with all access level
   *
   */

  const Employees = partners.filter(partner => {
    if (
      partner.AccessLevel < AccessLevel.Employee ||
      partner.AccessLevel == AccessLevel.Employee
    ) {
      console.log(`We have ${partner.firstName} as an employee`);
      return partner;
    }
  });

  const [formData, setFormdata] = useState({
    firstName: "",
    lastName: "",
    middleName: "",
    Suffix: "",
    email: "",
    hasNoEmail: false,
    ssn: "",
    dob: "",
    phoneH: "",
    phoneW: "",
    phoneM: "",
    fax: "",
    address: "",
    city: "",
    state: "",
    country: "United States",
    zipCode: "",
    status: "",
    dateStarted: "",
    assignedTo: "",
    referedBy: "",
    portalAccess: false,
    fireRedirect: false,
    AccessLevel: AccessLevel.Client,
  });

  const handleChange = e => {
    console.log(e.target.type);
    setFormdata({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
    console.log({ ...formData.referedBy.firstName });
  };
  const handleSubmit = e => {
    e.preventDefault();
    console.log(formData);
    addPerson(formData);
    setFormdata({ fireRedirect: true });
  };
  return (
    <div>
      <div className='row'>
        <div className='col-12 d-flex justify-content-between'>
          <h6 className=' text-bold '>Add Client</h6>
          <Button variant='outline-secondary' href='/'>
            <i className='fa fa-arrow-left'></i>Back
          </Button>
        </div>
      </div>
      <div className='row mt-2'>
        <div className='col-12'>
          <Form onSubmit={handleSubmit}>
            <FormRow
              labe1='First name*'
              value1={formData.firstName}
              name1='firstName'
              label2='Middle name'
              value2={formData.middleName}
              name2='middleName'
              handleChange={handleChange}
            />

            <FormRow
              labe1='Last name*'
              value1={formData.lastName}
              name1='lastName'
              label2='Suffix (Jr, Sr, etc)'
              value2={formData.Suffix}
              name2='Suffix'
              handleChange={handleChange}
            />

            <Form.Row className='mt-3'>
              <Col>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  name='email'
                  value={formData.email}
                  type='email'
                  size='sm'
                  className='box'
                  placeholder='Someone@somewhere.com'
                />
              </Col>
              <Col className='d-flex align-items-center'>
                <Form.Check
                  type='checkbox'
                  label='Client has no Email'
                  onChange={e =>
                    setFormdata({ ...formData, hasNoEmail: e.target.checked })
                  }
                />
              </Col>
            </Form.Row>

            <Form.Row className='mt-3'>
              <Col>
                <Form.Label>Last 4 of ssn</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  name='ssn'
                  value={formData.ssn}
                  size='sm'
                  className='box'
                  placeholder='9999'
                />
              </Col>
              <Col>
                <Form.Label>DOB</Form.Label>
                <Form.Control
                  type='date'
                  name='dob'
                  onChange={handleChange}
                  value={formData.dob}
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
                  type='tel'
                  name='phoneH'
                  onChange={handleChange}
                  value={formData.phoneH}
                  size='sm'
                  className='box'
                  placeholder='First name'
                />
              </Col>
              <Col>
                <Form.Label>Phone W</Form.Label>
                <Form.Control
                  type='tel'
                  name='phoneW'
                  onChange={handleChange}
                  value={formData.phoneW}
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
                  type='tel'
                  name='phoneM'
                  onChange={handleChange}
                  value={formData.phoneM}
                  size='sm'
                  className='box'
                  placeholder='First name'
                />
              </Col>
              <Col>
                <Form.Label>Fax</Form.Label>
                <Form.Control
                  type='tel'
                  name='fax'
                  onChange={handleChange}
                  value={formData.fax}
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
                  name='address'
                  onChange={handleChange}
                  value={formData.address}
                  as='textarea'
                  size='sm'
                  className='box'
                  placeholder='Adress'
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
                  name='city'
                  onChange={handleChange}
                  value={formData.city}
                />
              </Col>
              <Col>
                <Form.Label>State</Form.Label>
                <Form.Control
                  as='select'
                  htmlSize={3}
                  custom
                  className='box form-control-sm'
                  required
                  className='form-control'
                  onChange={handleChange}
                  name='state'
                  items={partners}
                >
                  {stateOfUsa.map(state => (
                    <option key={state.abbreviation} value={state.value}>
                      {state.abbreviation}
                    </option>
                  ))}
                </Form.Control>
              </Col>
            </Form.Row>

            <Form.Row className='mt-3'>
              <Col>
                <Form.Label>Zip Code</Form.Label>
                <Form.Control
                  size='sm'
                  className='box'
                  placeholder='First name'
                  onChange={handleChange}
                  name='zipCode'
                  value={formData.state}
                />
              </Col>
              <Col>
                <Form.Label>Country</Form.Label>
                <Form.Control
                  className='border-0 text-bold'
                  size='sm'
                  disabled
                  placeholder='First name'
                  onChange={handleChange}
                  name='zipCode'
                  value={formData.country}
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
                <Form.Control
                  name='dateStarted'
                  value={formData.dateStarted}
                  onChange={handleChange}
                  className='box'
                  type='date'
                />
              </Col>
            </Form.Row>

            <Form.Row className='mt-3'>
              <Col>
                <Form.Label>Assigned to</Form.Label>
                <Form.Control
                  as='select'
                  htmlSize={3}
                  custom
                  className='box form-control-sm'
                  required
                  className='form-control'
                  onChange={handleChange}
                  name='assignedTo'
                >
                  {Employees.map(Employee => (
                    <option key={Employee._id} value={Employee._id}>
                      {Employee.firstName}
                    </option>
                  ))}
                </Form.Control>
              </Col>
              <Col>
                <Form.Label>Referred by</Form.Label>

                <Form.Control
                  as='select'
                  htmlSize={3}
                  custom
                  className='box form-control-sm'
                  required
                  className='form-control'
                  onChange={handleChange}
                  name='referedBy'
                  items={partners}
                >
                  {partners.map(partner => (
                    <option key={partner._id} value={partner._id}>
                      {partner.firstName}
                    </option>
                  ))}
                </Form.Control>
              </Col>
            </Form.Row>
            <hr></hr>
            {formData.email && (
              <Form.Row className='my-3'>
                <Form.Check
                  nane='Portal access'
                  type='checkbox'
                  label='Give user Portal Access'
                  onChange={e =>
                    setFormdata({ ...formData, portalAccess: e.target.checked })
                  }
                />
              </Form.Row>
            )}
            <Button variant='primary' type='submit'>
              Submit
            </Button>
          </Form>
          {formData.fireRedirect && <Redirect to={`/customers`} />}
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
  partners: state.person.coworkers,
});

const mapDispatchToProps = {
  addPerson,
  loadCoworkers,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddClient);

const FormRow = ({
  labe1,
  value1,
  name1,
  label2,
  value2,
  name2,
  handleChange,
}) => {
  return (
    <Form.Row className='mt-3'>
      <Col>
        <Form.Label>{labe1}</Form.Label>
        <Form.Control
          value={value1}
          name={name1}
          onChange={handleChange}
          className='box'
          size='sm'
          placeholder='First name'
        />
      </Col>
      <Col>
        <Form.Label>{label2}</Form.Label>
        <Form.Control
          value={value2}
          name={name2}
          onChange={handleChange}
          size='sm'
          className='box'
          placeholder='Last name'
        />
      </Col>
    </Form.Row>
  );
};
