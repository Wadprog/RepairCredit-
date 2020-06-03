import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Home from '@material-ui/icons/Home';



const HomeConnect = props => {

    return (
        <Fragment>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 ">
                        <p className="border p-3">
                            <span className="h5">CheckList for starting a Credit Repair Business</span>
                            <span class="progress w-25">
                                <span className="progress-bar" style={{ width: 25 + "%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</span>
                            </span>
                        </p>
                    </div>
                </div>
                <div className="row mt-3">
                    <div class="col-4">
                        <div className="border p-1">
                            <p> <span className="font-weight-bold">Quick start </span><span>(Your most common task):</span></p>
                            <div className="card" style={{ width: 18.5 + "rem" }}>

                                <Link className="text-decoration-none" to="/#">
                                    <div className="row no-gutters border-bottom">
                                        <div class="col-md-2 mx-auto">
                                            <Home />
                                        </div>
                                        <div class="col-md-10">
                                            <span className="font-weight-bold">Add a new client </span> <br />
                                            <span className=""><small>Sign up a new client and add to database</small></span>
                                        </div>
                                    </div>
                                </Link>

                                <Link className="text-decoration-none" to="/#">
                                    <div className="row no-gutters  border-bottom">
                                        <div class="col-md-2 mx-auto">
                                            <Home />
                                        </div>
                                        <div class="col-md-10">
                                            <span className="font-weight-bold">Select an existing client </span> <br />
                                            <span className=""><small>Work with an existing client</small></span>
                                        </div>
                                    </div>
                                </Link>

                                <Link className="text-decoration-none" to="/#">
                                    <div className="row no-gutters">
                                        <div class="col-md-2 mx-auto">
                                            <Home />
                                        </div>
                                        <div class="col-md-10">
                                            <span className="font-weight-bold">Run Credit Dispute Wizard </span> <br />
                                            <span className=""><small>Order Reports, review reports, correct errors</small></span>
                                        </div>
                                    </div>
                                </Link>

                            </div>
                        </div>
                    </div>

                    <div class="col-8">
                        <div className=" border p-3">
                            <div className="row no-gutters">
                                <div className="col-6">
                                    <Link className="text-decoration-none" to="/#">
                                        <div className="row no-gutters">
                                            <div class="col-md-2 mx-auto">
                                                <Home />
                                            </div>
                                            <div class="col-md-10">
                                                <span className="font-weight-bold">My company Profile</span> <br />
                                                <span className=""><small>Configure users, permissions, billing</small></span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-6">
                                    <Link className="text-decoration-none" to="/#">
                                        <div className="row no-gutters">
                                            <div class="col-md-2 mx-auto">
                                                <Home />
                                            </div>
                                            <div class="col-md-10">
                                                <span className="font-weight-bold">Free Live Software class</span> <br />
                                                <span className=""><small>Daily for all credits Heroes!</small></span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>

                            <div className="row no-gutters mt-4">
                                <div className="col-6">
                                    <Link className="text-decoration-none" to="/#">
                                        <div className="row no-gutters">
                                            <div class="col-md-2 mx-auto">
                                                <Home />
                                            </div>
                                            <div class="col-md-10">
                                                <span className="font-weight-bold">My Clients</span> <br />
                                                <span className=""><small>Add or Delete clients and records</small></span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-6">
                                    <Link className="text-decoration-none" to="/#">
                                        <div className="row no-gutters">
                                            <div class="col-md-2 mx-auto">
                                                <Home />
                                            </div>
                                            <div class="col-md-10">
                                                <span className="font-weight-bold">Free Videos and Ressources</span> <br />
                                                <span className=""><small>Credit Repair cloud user guides</small></span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>

                            <div className="row no-gutters mt-4">
                                <div className="col-6">
                                    <Link className="text-decoration-none" to="/#">
                                        <div className="row no-gutters">
                                            <div class="col-md-2 mx-auto">
                                                <Home />
                                            </div>
                                            <div class="col-md-10">
                                                <span className="font-weight-bold">My Contacts</span> <br />
                                                <span className=""><small>Manage contacts and addresses</small></span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-6">
                                    <Link className="text-decoration-none" to="/#">
                                        <div className="row no-gutters">
                                            <div class="col-md-2 mx-auto">
                                                <Home />
                                            </div>
                                            <div class="col-md-10">
                                                <span className="font-weight-bold">Credit Repair Academy</span> <br />
                                                <span className=""><small>Get Credit Repair Training and Certificate</small></span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>

                            <div className="row no-gutters mt-4">
                                <div className="col-6">
                                    <Link className="text-decoration-none" to="/#">
                                        <div className="row no-gutters">
                                            <div class="col-md-2 mx-auto">
                                                <Home />
                                            </div>
                                            <div class="col-md-10">
                                                <span className="font-weight-bold">Schedule</span> <br />
                                                <span className=""><small>Time organizatiion and appointments</small></span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-6">
                                    <Link className="text-decoration-none" to="/#">
                                        <div className="row no-gutters">
                                            <div class="col-md-2 mx-auto">
                                                <Home />
                                            </div>
                                            <div class="col-md-10">
                                                <span className="font-weight-bold">Business Website</span> <br />
                                                <span className=""><small>Get a Professional site in minutes</small></span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>

                            <div className="row no-gutters mt-4">
                                <div className="col-6">
                                    <Link className="text-decoration-none" to="/#">
                                        <div className="row no-gutters">
                                            <div class="col-md-2 mx-auto">
                                                <Home />
                                            </div>
                                            <div class="col-md-10">
                                                <span className="font-weight-bold">Client and Affiliate Portal</span> <br />
                                                <span className=""><small>Clients and Affiliates log in here</small></span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-6">
                                    <Link className="text-decoration-none" to="/#">
                                        <div className="row no-gutters">
                                            <div class="col-md-2 mx-auto">
                                                <Home />
                                            </div>
                                            <div class="col-md-10">
                                                <span className="font-weight-bold">Get CRC Certified</span> <br />
                                                <span className=""><small>Get FREE step-by-step training get the most out of CRC</small></span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>

                            <div className="row no-gutters mt-4">
                                <div className="col-6">
                                    <Link className="text-decoration-none" to="/#">
                                        <div className="row no-gutters">
                                            <div class="col-md-2 mx-auto">
                                                <Home />
                                            </div>
                                            <div class="col-md-10">
                                                <span className="font-weight-bold">library of Dispute Letters</span> <br />
                                                <span className=""><small>Also add your custom letters</small></span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-6">
                                    <Link className="text-decoration-none" to="/#">
                                        <div className="row no-gutters">
                                            <div class="col-md-2 mx-auto">
                                                <Home />
                                            </div>
                                            <div class="col-md-10">
                                                <span className="font-weight-bold">Bonus Materials</span> <br />
                                                <span className=""><small>Legal docs and marketting materials</small></span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div >
        </Fragment >
    );

};

export default HomeConnect;
