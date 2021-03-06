import React, { Fragment } from "react";

// BootStrap Components ...
import { Container, Row, Col } from "react-bootstrap";
import RecentLogs from "../../components/Logs";

//Custom Components ..
import SimpleCard from "../../components/Cards/SimpleCard";
import HomeConnect from "./HomeConnect";

//Redux Component ....
import PropTypes from "prop-types";
import { connect } from "react-redux";

const AdminHome = ({ isAuthenticated }) => {
  return (
    <Container>
      <Row className='my-3'>
        <HomeConnect />
      </Row>
      <Row className='my-3'>
        <Col>
          <SimpleCard
            titleIcon='signal'
            titleLeft='Bussiness Status '
            titleLinkName='Active Clients'
            iconColor='success'
          >
            A Graph will be here
          </SimpleCard>
        </Col>
        <Col>
          <SimpleCard
            titleIcon='calendar'
            titleLeft={`Sun Jun 21 2020`}
            titleLinkName='Manage Schedule'
            iconColor='danger'
          >
            Missing the logic
          </SimpleCard>
        </Col>
      </Row>
      <Row>
        <Col>
          <RecentLogs />
        </Col>
      </Row>
    </Container>
  );
};
AdminHome.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
};
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
});
export default connect(mapStateToProps, {})(AdminHome);
