import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const NoAuth = () => {
	return (
		<div className="collapse navbar-collapse">
			<ul className="navbar-nav mr-auto" />
			<form className="form-inline my-2  my-lg-0">
				<div className="form-group mb-2">
					<label for="staticEmail2" className="sr-only">
						Email
					</label>
					<input type="text" className="form-control-sm" placeholder="email@example.com" />
				</div>
				<div className="form-group mx-sm-3 mb-2">
					<label for="inputPassword2" className="sr-only">
						Password
					</label>
					<input type="password" className="form-control-sm" placeholder="Password" />
				</div>
				<button type="submit" className="btn btn-sm btn-outline-primary mb-2">
					Sign in
				</button>
			</form>
		</div>
	);
};

export default NoAuth;
