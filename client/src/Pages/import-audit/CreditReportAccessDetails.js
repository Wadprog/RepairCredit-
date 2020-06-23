import React, { useState } from "react";
import { Link } from "react-router-dom";
import useToogle from "../../utils/CustomHooks/useToogle";
import { Form, Row, Col } from "react-bootstrap";

function CreditReportAccessDetails() {
  const [isHidden, toogleHide] = useToogle();
  return (
    <div className='credit-report-form'>
      <div className='form-title'>
        <span>Client's credit report access details:</span>
        <Link onClick={toogleHide}>Edit details</Link>
      </div>
      <Form>
        <Row>
          <Col>
            <Form.Label>Report Provider:</Form.Label>
          </Col>
          <Col>
            {!isHidden ? (
              <span>Smart Credit</span>
            ) : (
              <span>
                <Form.Control name='' className='' />
              </span>
            )}
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Label>Username:</Form.Label>
          </Col>
          {!isHidden ? (
            <span>theoasisfirm@gmail.com</span>
          ) : (
            <span>
              <Form.Control
                name=''
                className='border-0 pl-2 form-control text-success text-bold'
                placeholder='theoasisfirm@gmail.com'
              />
            </span>
          )}
        </Row>
        <Row>
          <Col>
            <Form.Label>Password: </Form.Label>
          </Col>
          <Col>
            {!isHidden ? (
              <span>Goodcredit1</span>
            ) : (
              <span>
                <Form.Control
                  name=''
                  className='border-0 pl-2 form-control text-success text-bold'
                  placeholder='Goodcredit1'
                />
              </span>
            )}
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Label>Phone Number: </Form.Label>
          </Col>
          <Col>
            {!isHidden ? (
              <span></span>
            ) : (
              <span>
                <Form.Control
                  name=''
                  className='border-0 pl-2 form-control text-success text-bold'
                  placeholder=''
                />
              </span>
            )}
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Label>Securty Number: </Form.Label>
          </Col>
          <Col>
            {!isHidden ? (
              <span></span>
            ) : (
              <span>
                <Form.Control
                  name=''
                  className='border-0 pl-2 form-control text-success text-bold'
                  placeholder=''
                />
              </span>
            )}
          </Col>
        </Row>

        {isHidden ? (
          <Row>
            <Form.Control
              className='buttonCancel Form.Control'
              type='submit'
              text='Save'
            />
            <button className='buttonCancel' onClick={toogleHide}>
              Cancel
            </button>
          </Row>
        ) : null}
      </Form>
    </div>
  );
}

export default CreditReportAccessDetails;
