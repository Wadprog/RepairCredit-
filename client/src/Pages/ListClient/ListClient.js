import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';


const ListClient = props => {

    return (

        <Fragment>
            <div className="row row-cols-4 no-gutters pt-3" >
                <div className="col">
                    <ol className="breadcrumb breadcrumb-arrow">
                        <li className=""><a href="#">Lead in</a>
                            <div className="pt-3 h4-custom-margin">
                                <span id="total-money">0 $</span>
                                <span>•</span>
                                <span id="deals">8 deals</span>
                            </div>
                        </li>

                    </ol>
                    <span className="arrow"></span>
                    <div className="px-1">
                        <table className="table table-bordered bg-white">
                            <tbody>
                                <tr>
                                    <td className="" colspan="2">Mark</td>
                                </tr>
                                <tr>
                                    <td colspan="2">Jacob</td>

                                </tr>
                                <tr>
                                    <td colspan="2">Larry the Bird</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="col">

                    <ol className="breadcrumb breadcrumb-arrow">
                        <li className=""><a href="#">Waiting on Reports</a>
                            <div className="pt-3 h4-custom-margin">
                                <span id="total-money">0 $</span>
                                <span>•</span>
                                <span id="deals">8 deals</span>
                            </div>
                        </li>

                    </ol>
                    <span className="arrow"></span>
                    <div className="px-1">
                        <table className="table table-bordered bg-white">
                            <tbody>
                                <tr>
                                    <td colspan="3">Mark</td>
                                </tr>
                                <tr>
                                    <td colspan="3">Jacob</td>
                                </tr>
                                <tr>
                                    <td colspan="3">Larry the Bird</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="col">

                    <ol className="breadcrumb breadcrumb-arrow">
                        <li className=""><a href="#">LEAD CAMPAIGN</a>
                            <div className="pt-3 h4-custom-margin">
                                <span id="total-money">0 $</span>
                                <span>•</span>
                                <span id="deals">2 deals</span>
                            </div>
                        </li>

                    </ol>
                    <span className="arrow"></span>
                    <div className="px-1">
                        <table className="table table-bordered bg-white">
                            <tbody>
                                <tr>
                                    <td colspan="3">Mark</td>
                                </tr>
                                <tr>
                                    <td colspan="3">Jacob</td>
                                </tr>
                                <tr>
                                    <td colspan="3">Larry the Bird</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="col">

                    <ol className="breadcrumb breadcrumb-arrow">
                        <li className=""><a href="#">Pause Campaign</a>
                            <div className="pt-3 h4-custom-margin">
                                <span id="total-money">0 $</span>
                                <span>•</span>
                                <span id="deals">16 deals</span>
                            </div>
                        </li>

                    </ol>
                    <div className="px-1">
                        <table className="table table-bordered bg-white">
                            <tbody>
                                <tr>
                                    <td>Mark</td>
                                </tr>
                                <tr>
                                    <td>Jacob</td>
                                </tr>
                                <tr>
                                    <td>Larry the Bird</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Fragment >
    );
};

const mapStateToProps = state => ({

});


export default connect(mapStateToProps, {})(ListClient);