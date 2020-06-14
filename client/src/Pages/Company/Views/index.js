import React from "react";
import { Alert, Form, Row, Col, Button } from "react-bootstrap";

function CompanyDetails() {
  return (
    <div>
      <div className='row mb-2'>
        <div className='col-12'>
          <div className='d-flex justify-content-between'>
            <h5>My Company Profile</h5>
            <h5>
              <span
                className='e-circle text-center'
                style={{ height: 25, width: 25 }}
              >
                <i className='fa fa-play'></i>
              </span>
              Watch a quick video
            </h5>
          </div>
        </div>
      </div>

      <Alert variant='warning'>
        Please fill in all the details on this page, so the appropriate details
        will appear for your clients and affiliates. Show guided tour For
        account information or to make changes to your account, visit My
        Account.
      </Alert>
      <Form className='mb-3'>
        <Form.Group as={Row} controlId='formHorizontalEmail'>
          <Form.Label column sm={2}>
            Company Name
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              className='box'
              type='text'
              placeholder='My Company name'
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId='formHorizontalPassword'>
          <Form.Label column sm={2}>
            Website Url
          </Form.Label>
          <Col sm={10}>
            <Form.Control className='box' type='text' />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId='formHorizontalPassword'>
          <Form.Label column sm={2}>
            Address
          </Form.Label>
          <Col sm={10}>
            <Form.Control as='textarea' className='box' type='text' />
          </Col>
        </Form.Group>

        <Form.Row className='mt-3'>
          <Col>
            <Form.Group as={Row} controlId='formHorizontalPassword'>
              <Form.Label column sm={2}>
                City
              </Form.Label>
              <Col sm={10}>
                <Form.Control className='box' type='text' />
              </Col>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group as={Row} controlId='formHorizontalPassword'>
              <Form.Label column sm={2}>
                State
              </Form.Label>
              <Col sm={10}>
                <Form.Control className='box' type='text' />
              </Col>
            </Form.Group>
          </Col>
        </Form.Row>

        <Form.Row className='mt-3'>
          <Col>
            <Form.Group as={Row} controlId='formHorizontalPassword'>
              <Form.Label column sm={2}>
                Zip
              </Form.Label>
              <Col sm={10}>
                <Form.Control className='box' type='text' />
              </Col>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group as={Row} controlId='formHorizontalPassword'>
              <Form.Label column sm={2}>
                country
              </Form.Label>
              <Col sm={10}>
                <Form.Text>
                  <h5>United States</h5>
                </Form.Text>
              </Col>
            </Form.Group>
          </Col>
        </Form.Row>

        <Form.Row className='mt-3'>
          <Col>
            <Form.Group as={Row} controlId='formHorizontalPassword'>
              <Form.Label column sm={2}>
                Time Zone
              </Form.Label>
              <Col sm={10}>
                <Form.Control className='box' type='text' />
              </Col>
            </Form.Group>
          </Col>
          <Col></Col>
        </Form.Row>

        <Form.Row className='mt-3'>
          <Col>
            <Form.Group as={Row} controlId='formHorizontalPassword'>
              <Form.Label column sm={2}>
                Phone
              </Form.Label>
              <Col sm={10}>
                <Form.Control className='box' type='text' />
              </Col>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group as={Row} controlId='formHorizontalPassword'>
              <Form.Label column sm={2}>
                Fax
              </Form.Label>
              <Col sm={10}>
                <Form.Control className='box' type='text' />
              </Col>
            </Form.Group>
          </Col>
        </Form.Row>

        <Form.Text>
          By default, automated notifications are sent from the account holder's
          name and email address. Or you may designate a different name (or a
          company name) and email for all automated notifications sent.
        </Form.Text>
        <Form.Row className='mt-3'>
          <Col>
            <Form.Group as={Row} controlId='formHorizontalPassword'>
              <Form.Label column sm={2}>
                Sender Name
              </Form.Label>
              <Col sm={10}>
                <Form.Control className='box' type='text' />
              </Col>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group as={Row} controlId='formHorizontalPassword'>
              <Form.Label column sm={2}>
                Sender Email
              </Form.Label>
              <Col sm={10}>
                <Form.Control className='box' type='text' />
              </Col>
            </Form.Group>
          </Col>
        </Form.Row>

        <Form.Row className='mt-3'>
          <Col>
            <Form.Text>
              Name/company that your client invoices should be payable to
            </Form.Text>
          </Col>
          <Col>
            <Form.Control className='box' type='text' />
          </Col>
        </Form.Row>
      </Form>
      <Alert variant='light' className='border rounded'>
        <div className='row'>
          <div className='col-1 text-center'>
            <i className='fa fa-lightbulb-o fa-3x text-warning'></i>
          </div>
          <div className='col-11'>
            The company contact information you enter here will also display in
            your client and affiliate portal. Don’t have a website? Get one now
          </div>
        </div>
      </Alert>
    </div>
  );
}

export default CompanyDetails;
