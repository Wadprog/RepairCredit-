import React, { useState } from 'react';
import { logout } from '../../../redux/actions/auth';

import { connect } from 'react-redux';
const Authenticated = ({ logout }) => {
	return (
		<div className="collapse navbar-collapse">
			<ul className="navbar-nav mr-auto" />
			<form onSubmit={e=>{e.preventDefault();logout()}} className="form-inline my-2  my-lg-0">
				<button type="submit" className="btn btn-sm btn-outline-primary mb-2">
					Sign out
				</button>
			</form>
		</div>
	);
};

const mapStateToProps = state => ({
	isAuthenticated: state.auth.isAuthenticated
});
export default connect(null, { logout })(Authenticated);
