import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Alert = ({ alerts }) => {
  let body = document.querySelector("body");
  body.scrollTop = 0;
  document.documentElement.scrollTop = 0;

  return (
    alerts !== null &&
    alerts.length > 0 &&
    alerts.map(alert => (
      <div className='container-fluid'>
        <div key={alert.id} className={`alert alert-${alert.alertType}`}>
          {alert.msg}
        </div>
      </div>
    ))
  );
};
Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(Alert);
