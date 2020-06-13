import React, { useState, useEffect, Fragment } from "react";
import { Button, Modal, Form, Col, Spinner } from "react-bootstrap";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { AccessLevel } from "../utils/consts/Permitions/AccessLevel";
import { addPerson } from "../redux/actions/person";
const Addpartner = ({ onHide, show, redirect = "" }) => {
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
    <Modal
      show={show}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header>
        <Modal.Title>Add new Partner</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control type='email' placeholder='Enter email' />
            <Form.Text className='text-muted'>
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

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
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>

      {/*formData.fireRedirect && <Redirect to={redirect} />*/}
    </Modal>
  );
};

const mapDispatchToProps = {
  addPerson,
};
const mapStateToProps = state => ({});
export default connect(mapStateToProps, mapDispatchToProps)(Addpartner);
