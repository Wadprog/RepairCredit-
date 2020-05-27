import React, { Fragment } from 'react';
import AfilliateLink from './AffiliateLink';
const EmployeeLink = () => {
	return (
		<Fragment>
			<AfilliateLink />
			<li className="nav-item">
				<a className="nav-link" href="#">
					<i className=" fa fa-calendar-day" /> Activities
				</a>
			</li>
		</Fragment>
	);
};
export default EmployeeLink;
