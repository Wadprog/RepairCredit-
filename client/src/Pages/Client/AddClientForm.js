import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Button, Form, Col } from "react-bootstrap";

const AddClient = props => {
  return (
    <div>
      <div className='row'>
        <div className='col-12 d-flex justify-content-between'>
          <h6 className=' text-bold '>Add Client</h6>
          <Button variant='outline-secondary'>
            {" "}
            <i className='fa fa-arrow-left'></i>Back
          </Button>
        </div>
      </div>
      <div className='row mt-2'>
        <div className='col-12'>
          <Form>
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
                <Form.Label>Middle name</Form.Label>
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
                  size='sm'
                  className='box'
                  placeholder='First name'
                />
              </Col>
              <Col className='d-flex align-items-center'>
                <Form.Check type='checkbox' label='Client has no Email' />
              </Col>
            </Form.Row>
            <Form.Row className='mt-3'>
              <Col>
                <Form.Label>Last 4 of ssn</Form.Label>
                <Form.Control
                  size='sm'
                  className='box'
                  placeholder='First name'
                />
              </Col>
              <Col>
                <Form.Label>DOB</Form.Label>
                <Form.Control
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
                <Form.Control
                  size='sm'
                  className='box'
                  placeholder='First name'
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
                <Form.Control
                  size='sm'
                  className='box'
                  placeholder='First name'
                />
              </Col>
              <Col>
                <Form.Label>Referred by</Form.Label>
                <Form.Control className='box' size='sm' value='United State' />
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

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AddClient);
