import React, { Fragment } from 'react';
import SideBar from '../../components/layouts/SideBar';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SideNav from '../../components/layouts/SideBar/index';

const AdminHome = ({ isAuthenticated }) => {
	return (
		<Fragment>
			<div className="page-wrapper chiller-theme toggled">
				<a id="show-sidebar" class="btn btn-sm btn-dark" href="#">
					<i className="fa fa-bars" />
				</a>
				<SideNav />
				<main class="page-content">
					<div class="container-fluid">
						<h2>Pro Sidebar</h2>
					</div>
				</main>
			</div>
		</Fragment>
	);
};
AdminHome.propTypes = {
	isAuthenticated: PropTypes.bool.isRequired,
	loading: PropTypes.bool.isRequired
};
const mapStateToProps = state => ({
	isAuthenticated: state.auth.isAuthenticated,
	loading: state.auth.loading
});
export default connect(mapStateToProps, {})(AdminHome);
