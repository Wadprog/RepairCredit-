import React, { useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import api from "../../utils/api";
const ManualImport = ({ manuelImport }) => {
  const [formData, setFormdata] = useState({
    monitoringService: "",
    htmlData: "",
  });
  const handleChange = ({ target }) => {
    setFormdata({ ...formData, [target.name]: target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(formData);
    try {
      const body = JSON.stringify(formData);
      api.post("/credit-Items/manual", body);
    } catch (error) {}
  };

  return (
    <div>
      <Row className='my-2'>
        <Button
          variant='secondary'
          size='sm'
          onClick={() => {
            manuelImport(false);
          }}
        >
          <i className='text-primary fa fa-arrow-left'></i>
          Back
        </Button>
      </Row>
      <h4>Paste the credit report source code in the box below</h4>
      <Form onSubmit={handleSubmit}>
        <Form.Control as='textarea' rows='8' onChange={handleChange} name="htmlData" />
        <Row>
          <Col>
            <Form.Check
              label='Indentity Iq'
              type='radio'
              name='monitoringService'
              value='Indentity Iq'
              onClick={handleChange}
              checked={
                formData.monitoringService == "Indentity Iq" ? true : false
              }
            />
          </Col>
          <Col>
            <Form.Check
              label='Smart Credit'
              type='radio'
              name='monitoringService'
              value='Smart-Credit'
              onClick={handleChange}
              checked={
                formData.monitoringService == "Smart-Credit" ? true : false
              }
            />
          </Col>
        </Row>
        <div className='d-flex justify-content-center py-2'>
          <Button size='sm' type='submit'>
            {" "}
            Reimport Credit report
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default ManualImport;
