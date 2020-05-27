import React, { useEffect, Fragment } from 'react';
//import AdminHome from './AdminLink';
//import EmployeeHome from './EmployeeLink';
//import AffiliateHome from './AffiliateLink';

import { connect } from 'react-redux';

const Authenticated = ({ user, logout }) => {
	return (
		<Fragment>
			{user != null &&
			user && (
				<Fragment>
					{user.level < 1 ? (
						<p> He is admin</p>
					) : user.level < 2 ? (
						<p>He is an Employee</p>
					) : (
						<p>He is just aff</p>
					)}
				</Fragment>
			)}
		</Fragment>
	);
};

const mapStateToProps = state => ({
	isAuthenticated: state.auth.isAuthenticated,
	user: state.auth.user
});
export default connect(mapStateToProps, {  })(Authenticated);
