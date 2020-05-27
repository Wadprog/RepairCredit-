import React, { Fragment } from 'react';
import Loading from '../../../components/Loading';
import './Landing.css'
const Landing = () => {
	return (
		<Fragment>
			<header className="masthead">
				<div className="container-fluid h-100 mask rgba-black-light">
					<div className="row h-100">
						<div className="col-lg-7 my-auto">
							<div className="header-content mx-auto">
								<h1 className="mb-5">Dream Credit Repair Software</h1>
								<a href="#signup" className="btn btn-outline btn-xl js-scroll-trigger mt-5">
									Sign up today
								</a>
								<a href="#getdemo" className="btn btn-outline btn-xl js-scroll-trigger mt-5">
									Get a demo
								</a>
							</div>
						</div>
						<div className="col-lg-5 my-auto">
							<div className="device-container">
								<div className="device-mockup iphone6_plus portrait white">
									<div className="device">
										<div className="screen">
											<img
												src="images/happyFace2.jpg"
												className="img-fluid"
												alt=""
												style={{ width: 800, height: 500 }}
											/>
										</div>
										<div className="button" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
		</Fragment>
	);
};

export default Landing;
