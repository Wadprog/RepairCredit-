import React, { useState, useEffect, Fragment } from "react";
import { Button, Form, Col, Spinner } from "react-bootstrap";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { AccessLevel } from "../../utils/consts/Permitions/AccessLevel";
import { addPerson } from "../../redux/actions/person";
const AddPartnerForm = ({ redirect = "", loading }) => {
  const [formData, setFormdata] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
    phoneM: "",
    phoneH: "",
    address: "",
    dateStarted: "",
    fireRedirect: false,
    AccessLevel: AccessLevel.Afilliate,
  });

  const handleChange = e => {
    setFormdata({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
    console.log({ ...formData.referedBy.firstName });
  };
  const handleSubmit = e => {
    e.preventDefault();
    console.log(formData);
    //addPerson(formData);
    setFormdata({ fireRedirect: true });
  };
  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Form onSubmit={handleSubmit}>
          <FormRow
            label1='First name'
            label2='Last Name'
            type1='text'
            name1='firstName'
            value1={formData.lastName}
            type2='text'
            name2='lastName'
            value2={formData.lastName}
            handleChange={handleChange}
          />
          <Form.Group controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' placeholder='Password' />
          </Form.Group>
          <Form.Group controlId='formBasicCheckbox'>
            <Form.Check type='checkbox' label='Check me out' />
          </Form.Group>
          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
      )}
      {formData.fireRedirect && <Redirect to={redirect} />}
    </Fragment>
  );
};

const mapDispatchToProps = {
  addPerson,
};
const mapStateToProps = state => ({
  loading: state.person.loading,
});
export default connect(mapStateToProps, mapDispatchToProps)(AddPartnerForm);
const FormRow = ({
  label1,
  label2,
  type1,
  name1,
  value1,
  type2,
  name2,
  value2,
  handleChange,
}) => {
  return (
    <Form.Row>
      <Col>
        <Form.Group>
          <Form.Label>{label1}</Form.Label>
          <Form.Control
            type={type1}
            value={value1}
            name={name1}
            onChange={handleChange}
          />
        </Form.Group>
      </Col>
      <Col>
        <Form.Group>
          <Form.Label>{label2}</Form.Label>
          <Form.Control
            type={type2}
            value={value2}
            name={name2}
            onChange={handleChange}
          />
        </Form.Group>
      </Col>
    </Form.Row>
  );
};
