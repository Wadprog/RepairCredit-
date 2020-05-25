import React, { Fragment } from 'react';
import NoAuth from './NoAuth';
import { Link } from 'react-router-dom';

//import { logout } from '../../redux/actions/auth';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Navbar = ({ user, isAuthLoading }) => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light col-12">
			<a className="navbar-brand" href="#">
				Dream CR Software
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon" />
			</button>
			<NoAuth />
		</nav>
	);
};

/*const mapStateToProps = state => ({
	user: state.auth.user
});*/
export default connect(null, {})(Navbar);
