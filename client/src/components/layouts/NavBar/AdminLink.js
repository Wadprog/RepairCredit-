import React, { Fragment } from 'react';
import EmployeeLink from './EmployeeLink';
const AdminLink = () => {
	return (
		<Fragment>
			<li className="nav-item active">
				<a className="nav-link" href="#">
					<i className="fa fa-dollar-sign" /> Deals
				</a>
			</li>

			<li className="nav-item">
				<a className="nav-link" href="#">
					<i className="fa fa-user" /> Employees
				</a>
			</li>
			<li className="nav-item">
				<a className="nav-link" href="#">
					<i className="fa fa-user" /> Affilates
				</a>
			</li>
			<EmployeeLink />
		</Fragment>
	);
};
export default AdminLink;
