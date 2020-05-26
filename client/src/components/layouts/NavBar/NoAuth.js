import React, { useState } from 'react';
import { login } from '../../../redux/actions/auth';

import { connect } from 'react-redux';
const NoAuth = ({ login, loading }) => {
	const [ formData, setFormData ] = useState({
		email: '',
		password: ''
	});

	const handleSubmit = e => {
		e.preventDefault();
		login(formData);
	};
	return (
		<div className="collapse navbar-collapse">
			<ul className="navbar-nav mr-auto" />
			<form onSubmit={handleSubmit} className="form-inline my-2  my-lg-0">
				<div className="form-group mb-2">
					<label htmlFor="staticEmail2" className="sr-only">
						Email
					</label>
					<input
						value={formData.email}
						onChange={e => setFormData({ ...formData, email: e.target.value })}
						type="text"
						className="form-control-sm"
						placeholder="email@example.com"
					/>
				</div>
				<div className="form-group mx-sm-3 mb-2">
					<label htmlFor="inputPassword2" className="sr-only">
						Password
					</label>
					<input
						value={formData.password}
						onChange={e => setFormData({ ...formData, password: e.target.value })}
						type="password"
						className="form-control-sm"
						placeholder="Password"
					/>
				</div>
    <button 
    disabled={loading}
    type="submit" 
    className="btn btn-sm btn-outline-primary mb-2">
					{`Sign in ${loading ? "...":""}`}
				</button>
			</form>
		</div>
	);
};

const mapStateToProps = state => ({
	loading: state.auth.loading
});
export default connect(mapStateToProps, { login })(NoAuth);
