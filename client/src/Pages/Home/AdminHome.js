import React, { Fragment } from "react";
import SideBar from "../../components/layouts/SideBar";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import HomeConnect from "./HomeConnect";
import "./home.css";
const AdminHome = ({ isAuthenticated }) => {
  return (
    <Fragment>
      <HomeConnect />
    </Fragment>
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
