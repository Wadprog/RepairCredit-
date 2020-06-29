import React, { useState } from "react";
import { Link } from "react-router-dom";

import useToogle from "../../utils/CustomHooks/useToogle";
import { camelobjectToString } from "../../utils/StringOperations";

import { Form, Row, Col, Button } from "react-bootstrap";

import { connect } from "react-redux";

function CreditReportAccessDetails() {
  const [isHidden, toogleHide] = useToogle();
  const [state, setState] = useState({
    reportProvider: "",
    username: "",
    password: "",
    phoneNumber: "",
    secutityWord: "",
  });
  const handleSumbmit = e => {
    e.preventDefault();
    console.log(state);
  };
  const handleChange = e => {
    console.log(e.target.value);
    setState({ ...state, [e.target.name]: e.target.value });
  };
  return (
    <Form onSubmit={handleSumbmit} className='border w-50 p-3 m-3'>
      <Row>
        <Col sm={12} md={9}>
          <div className='text-bold h5'>
            Client's credit report access details:
          </div>
        </Col>
        <Col>
          <Link onClick={toogleHide}>Edit details</Link>
        </Col>
      </Row>
      {Object.keys(state).map(element => (
        <Row className='mb-2' key={`${element}-key`}>
          <Col>
            <Form.Label>{camelobjectToString(element)}:</Form.Label>
          </Col>
          <Col>
            {!isHidden ? (
              <span>Smart Credit</span>
            ) : (
              <span>
                <Form.Control
                  onChange={handleChange}
                  name={element}
                  value={state[element]}
                />
              </span>
            )}
          </Col>
        </Row>
      ))}

      {isHidden ? (
        <Row>
          <Col>
            <Button variant='primary' size='sm' type='sumbmit'>
              Save
            </Button>
          </Col>
          <Col>
            <Button variant='outline-danger' size='sm' onClick={toogleHide}>
              Cancel
            </Button>
          </Col>
        </Row>
      ) : null}
    </Form>
  );
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreditReportAccessDetails);
