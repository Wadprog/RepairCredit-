import React from "react";
import { connect } from "react-redux";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const CreditReport = () => {
  return (
    <div>
      <Row>
        <Col>
          <h5>
            Preview Credit Report <small>({`Laurie X`})</small>
          </h5>
        </Col>
        <Col>
          <span>
            <Link to='#' className='mx-3'>
              <i className='fa fa-play-circle mx-2'></i>
              Watch a quick video
            </Link>
          </span>
        </Col>
      </Row>
      <Row className='border'> a</Row>
    </div>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CreditReport);
