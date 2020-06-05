import React, { Fragment } from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setAlert } from "../../redux/actions/alert";
const PrivateRoute = ({
  setAlert,
  component: Component,
  auth: { isAuthenticated, loading },
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props =>
        !isAuthenticated && !loading ? (
          <Fragment>
            {setAlert("Please login to view this page", "danger")}
            <Redirect to='/' />
          </Fragment>
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};
PrivateRoute.prototype = {
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { setAlert })(PrivateRoute);
