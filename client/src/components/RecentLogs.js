import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Card, Table, Row, Col, Alert } from "react-bootstrap";
import SimpleCard from "./SimpleCard";
import PageAlert from "./PageAlert";
const RecentLogs = ({ limit }) => {
  return (
    <Fragment>
      <Row>
        <Col>
          <SimpleCard
            titleIcon='key'
            titleLeft='Recent Login Activity'
            titleLinkName='Full History'
          >
            <Table responsive hover size='sm'>
              <thead>
                <tr>
                  <th>User</th>
                  <th>Ip Address</th>
                  <th>Access Type</th>
                  <th>Logged in</th>
                  <th>Logged out</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Someone@Somehere.com</td>
                  <td>192.189.45.12</td>
                  <td>Chrome- Brwoser</td>
                  <td>Thu Jan 02 2020 14:47:20 </td>
                  <td>Thu Jan 02 2020 14:57:20 </td>
                </tr>

                <tr>
                  <td>Someone@Somehere.com</td>
                  <td>192.189.45.12</td>
                  <td>Chrome- Brwoser</td>
                  <td>Thu Jan 02 2020 14:47:20 </td>
                  <td>Thu Jan 02 2020 14:57:20 </td>
                </tr>
              </tbody>
            </Table>
          </SimpleCard>
        </Col>
      </Row>
      <Row className='mt-2'>
        <Col>
          <PageAlert
            border={true}
            icon='warning'
            Inconcolor='warning'
            textInconcolor='warning'
            variant='light'
            msg='If you notice any unusual activity you do not recognize,
          change your password
          change your password to protect your account'
          />
        </Col>
      </Row>
    </Fragment>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(RecentLogs);
