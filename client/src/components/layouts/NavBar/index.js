import React, { Fragment } from "react";
import NoAuth from "./NoAuth";
import Authenticated from "./Authenticated";

import PropTypes from "prop-types";
import { connect } from "react-redux";

const Navbar = ({ isAuthenticated }) => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light col-12'>
      <a className='navbar-brand' href='/'>
        Dream CR Software
      </a>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarSupportedContent'
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon' />
      </button>
      <Fragment>
        {isAuthenticated == true ? <Authenticated /> : <NoAuth />}
      </Fragment>
    </nav>
  );
};
Navbar.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
};
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
});
export default connect(mapStateToProps, {})(Navbar);
