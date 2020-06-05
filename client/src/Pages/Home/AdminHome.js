import React, { Fragment } from 'react';
import SideBar from '../../components/layouts/SideBar';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SideNav from '../../components/layouts/SideBar/index';
import './home.css'
const AdminHome = ({ isAuthenticated }) => {
	return (
		<Fragment>
			<div className="container">
				
				<main className="page-wrapper bg-danger">
					<div className="d-flex h-100 py-2 px-3">
						<aside className="sidebar bg-primary h-100 mr-2 ">a</aside>
						<section className="bg-white w-100 rounded p-2">
							<div className="row bg-success h-100">r</div>
						</section>
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
