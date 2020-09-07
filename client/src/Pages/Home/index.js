import React, { Fragment } from "react";

//custom imports ...
import Landing from "./Landing/index";
import Authenticated from "./Authenticated";
import Loading from "../../components/layouts/Loading";

//redux
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Home = ({ isAuthenticated, loading }) => {
  return (
    <Fragment>
      {!loading ? (
        <Fragment>{isAuthenticated ? <Authenticated /> : <Landing />}</Fragment>
      ) : (
        <Loading />
      )}
    </Fragment>
  );
};
Home.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
};
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
});
export default connect(mapStateToProps, {})(Home);
