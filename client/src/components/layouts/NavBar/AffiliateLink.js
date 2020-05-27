import React, {Fragment} from 'react';
const AfilliateLink = () => {
	return (
		<Fragment>
			<li className="nav-item">
				<a className="nav-link" href="#">
					<i className="fas fa-envelope" /> Profile
				</a>
			</li>
			<li className="nav-item">
				<a className="nav-link" href="#">
					<i className=" fa fa-calendar-day" /> Notificaciones
				</a>
			</li>

			<li className="nav-item">
				<a className="nav-link" href="#">
					<i className="fa fa-user" /> Clientes
				</a>
			</li>
		</Fragment>
	);
};
export default AfilliateLink;
