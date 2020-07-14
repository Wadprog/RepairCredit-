import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useToogle from "../../utils/CustomHooks/useToogle";
import { camelobjectToString } from "../../utils/StringOperations";

import { Form, Row, Col, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { getAllMonitoringService } from "../../redux/actions/monitoringService";
import { updateClient } from "../../redux/actions/customer";

function CreditReportAccessDetails({
  getAllMonitoringService,
  monitoringServices,
  updateClient,
  customer,
}) {
  useEffect(() => {
    getAllMonitoringService();
  }, []);

  const [isHidden, toogleHide] = useToogle();
  const [state, setState] = useState({
    id: customer._id,
    reportProvider: "",
    username: "",
    password: "",
    secutityWord: "",
  });
  const handleSumbmit = e => {
    e.preventDefault();
    const formData = {};
    formData.id = state.id;
    formData.monitoringService = state;
    updateClient(formData);
  };
  const handleChange = e => {
    console.log(e.target.value);
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const t = ["userName", "password", "code"];

  let name = null;
  if (customer.monitoringService) name = customer.monitoringService.name;
  let i = 0;
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
      <Row className='mb-2'>
        <Col>
          <Form.Label>Report Provider:</Form.Label>
        </Col>
        <Col>
          {!isHidden ? (
            <span className={`${name != null && !name && "text-muted"}`}>
              {name || "Not provided"}
            </span>
          ) : (
            <span>
              <Form.Control
                as='select'
                onChange={handleChange}
                name='reportProvider'
                value={state["reportProvider"]}
              >
                <option></option>
                {monitoringServices != null &&
                  monitoringServices.length > 0 &&
                  monitoringServices.map(monitoringService => (
                    <option key={monitoringService._id}>
                      {monitoringService.name}
                    </option>
                  ))}
              </Form.Control>
            </span>
          )}
        </Col>
      </Row>

      {Object.keys(state).map(element => {
        if (element !== "reportProvider" && element !== "id")
          return (
            <Row className='mb-2' key={`${element}-key`}>
              <Col>
                <Form.Label>{camelobjectToString(element)}:</Form.Label>
              </Col>
              <Col>
                {!isHidden ? (
                  <span
                    className={`${
                      name == null ||
                      (!customer.monitoringService[t[i]] && "text-muted")
                    }`}
                  >
                    {name == null ||
                      customer.monitoringService[t[i++]] ||
                      "Not Provided"}
                  </span>
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
          );
      })}

      {isHidden && (
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
      )}
    </Form>
  );
}

const mapStateToProps = state => ({
  monitoringServices: state.monitoringService.monitoringServices,
  customer: state.customer.customer,
});

const mapDispatchToProps = { getAllMonitoringService, updateClient };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreditReportAccessDetails);
