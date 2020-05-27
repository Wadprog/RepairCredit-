import React, { useEffect, Fragment } from 'react';
import AdminLink from './AdminLink'
import EmployeeLink from './EmployeeLink'
import AfilliateLink from './AffiliateLink'
import { logout, loadUser } from '../../../redux/actions/auth';

import { connect } from 'react-redux';
const Authenticated = ({ user, logout }) => {
	useEffect(() => {
		loadUser();
	}, []);
	return (
		<div className="collapse navbar-collapse">
			{user != null && (
				<ul className="navbar-nav mr-auto">
					{user.level < 1 ? <AdminLink /> : user.level < 2 ? <EmployeeLink /> : <AfilliateLink />}
				</ul>
			)}
			<form
				onSubmit={e => {
					e.preventDefault();
					logout();
				}}
				className="form-inline my-2  my-lg-0"
			>
				<button type="submit" className="btn btn-sm btn-outline-primary mb-2">
					Sign out
				</button>
			</form>
		</div>
	);
};

const mapStateToProps = state => ({
	isAuthenticated: state.auth.isAuthenticated,
	user: state.auth.user
});
export default connect(mapStateToProps, { logout, loadUser })(Authenticated);



