import React, { useState, useEffect, Fragment } from "react";
import { Button, Form, Col, Spinner } from "react-bootstrap";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { AccessLevel as Level } from "../../utils/consts/Permitions/AccessLevel";
import { addPerson } from "../../redux/actions/person";
const AddPartnerForm = ({ redirect = "", loading, addPerson }) => {
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
    AccessLevel: Level.Afilliate,
  });

  const handleChange = (e) => {
    setFormdata({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    addPerson(formData);
    setFormdata({ fireRedirect: true });
  };
  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Form onSubmit={handleSubmit}>
          <FormRow
            label1="First name"
            label2="Last Name"
            name1="firstName"
            value1={formData.firstName}
            name2="lastName"
            value2={formData.lastName}
            handleChange={handleChange}
          />
          <FormRow
            label1="Date of birth"
            label2="Email"
            name1="dob"
            type1="date"
            value1={formData.dob}
            name2="email"
            value2={formData.email}
            handleChange={handleChange}
          />
          <FormRow
            label1="Home  Phone"
            label2="Mobile Phone"
            name1="phoneH"
            type2="tel"
            type1="tel"
            value1={formData.phoneH}
            name2="phoneM"
            value2={formData.phoneM}
            handleChange={handleChange}
          />
          <Form.Group>
            <Form.Label>Address</Form.Label>
            <Form.Control
              as="textarea"
              name="address"
              type="text"
              value={formData.address}
              onChange={handleChange}
              className="box"
            />
          </Form.Group>
          <Form.Row>
            <Col>
              <Form.Group>
                <Form.Label>Date added</Form.Label>
                <Form.Control
                  type="date"
                  name="dateStarted"
                  value={formData.dateStarted}
                  onChange={handleChange}
                  className="box"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Type</Form.Label>
                <select
                  name="AccessLevel"
                  value={formData.AccessLevel}
                  onChange={handleChange}
                  className="box h-100 w-100"
                >
                  <option value={Level.Afilliate}>Affiliate</option>
                  <option value={Level.Employee}>Employee</option>
                </select>
              </Form.Group>
            </Col>
          </Form.Row>
          <Button variant="primary" block type="submit">
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
const mapStateToProps = (state) => ({
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
            type={type1 || "text"}
            value={value1}
            name={name1}
            onChange={handleChange}
            className="box"
          />
        </Form.Group>
      </Col>
      <Col>
        <Form.Group>
          <Form.Label>{label2}</Form.Label>
          <Form.Control
            type={type2 || "text"}
            value={value2}
            name={name2}
            onChange={handleChange}
            className="box"
          />
        </Form.Group>
      </Col>
    </Form.Row>
  );
};
