/**
 * 
 If Someone Logs into the app it's either an affilliate or an admin
 */

import React from "react";

//custom imports
import AdminHome from "./AdminHome";
import helper from "../../utils/helper";
//reduc
import { connect } from "react-redux";

const Authenticated = ({ user }) => {
  return (
    <>
      {user != null && user && (
        <>
          {helper.userType(user) === "ADMIN" ? (
            <AdminHome />
          ) : (
            <p>Here is an Affilitate module not built yet </p>
          )}
        </>
      )}
    </>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
});
export default connect(mapStateToProps, {})(Authenticated);
