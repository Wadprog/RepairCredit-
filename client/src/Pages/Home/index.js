import React, { Fragment } from 'react';
import Landing from './Landing/index';
import Authenticated from './Authenticated';
import Loading from '../../components/Loading';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Home = ({ isAuthenticated, loading }) => {
	return (
		<Fragment>
			{!loading ? <Fragment>{isAuthenticated ? <Authenticated /> : <Landing />}</Fragment> : <Loading />}
		</Fragment>
	);
};
Home.propTypes = {
	isAuthenticated: PropTypes.bool.isRequired,
	loading: PropTypes.bool.isRequired
};
const mapStateToProps = state => ({
	isAuthenticated: state.auth.isAuthenticated,
	loading: state.auth.loading
});
export default connect(mapStateToProps, {})(Home);
