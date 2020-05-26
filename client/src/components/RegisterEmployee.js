import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addEmployee } from '../redux/actions/employee';
import { loadPhonetag } from '../redux/actions/phonetag';
import stateOfUsa from '../utils/data/stateofUsa.json';
import months from '../utils/data/months.json';

const RegisterEmployee = props => {

    useEffect(() => {
        loadPhonetag();
    }, []);

    const { addEmployee, loadPhonetag, employee, phonetag, error, loading } = props;

    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phones: [],
        addresses: [],
    });

    const [phones, setPhones] = useState({
        arreaCode: '',
        number: '',
        extension: '',
        tag: '',
    });

    const [addresses, setAddresses] = useState({
        state: '',
        city: '',
        zipcode: '',
        fax: '',
        description: '',
    });

    const [date, setDate] = useState({
        month: '',
        day: '',
        year: '',
    });

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handlePhone = e => {
        setPhones({ ...phones, [e.target.name]: e.target.value });
    };

    const handleAdresses = e => {
        setAddresses({ ...addresses, [e.target.name]: e.target.value });
    };

    const handleDate = e => {
        setDate({ ...date, [e.target.name]: e.target.value });
    }

    const handleSubmit = e => {
        e.preventDefault();
        phones.arreaCode = '1';
        formData.phones.push(phones);
        formData.addresses.push(addresses);
        formData.dob = date.month + '/' + date.day + '/' + date.year;
        console.log(formData);
        addEmployee(formData);
        setFormData({ ...formData });
    };


    return (
        <div className="container mt-4">
            <h1 className="h4">Register Employee</h1>
            <form className="mx-auto" onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md-6 col-sm-12 my-2">
                        <input
                            required="true"
                            onChange={handleChange}
                            name="firstname"
                            type="text"
                            className="form-control"
                            placeholder="First name"
                        />
                    </div>
                    <div className="col-md-6 col-sm-12 my-2">
                        <input
                            required="true"
                            onChange={handleChange}
                            name="lastname"
                            type="text"
                            className="form-control"
                            placeholder="Last name"
                        />
                    </div>
                </div>
                <div className="row">
                    <div class="col-md-4 col-sm-6 my-2">
                        <select
                            required="true"
                            onChange={handleDate}
                            name="month"
                            className="form-control"
                            placeholder="Birth month"
                        >
                            <option selected>Birth month...</option>
                            {months.map((month) => (
                                <option key={month.value} value={month.value}>{month.name}</option>
                            ))}
                        </select>
                    </div>
                    <div class="col-sm-9 col-md-4 my-2">
                        <input
                            required="true"
                            onChange={handleDate}
                            name="day"
                            type="number"
                            min="1"
                            max='31'
                            className="form-control"
                            placeholder="Birth day"
                        />
                    </div>
                    <div class="col-md-2 col-sm-6 my-2">
                        <input
                            required="true"
                            onChange={handleDate}
                            name="year"
                            type="number"
                            min="1970"
                            max="9999"
                            className="form-control"
                            placeholder="Birth year"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-sm-12 my-2">
                        <input
                            required="true"
                            onChange={handleChange}
                            name="email"
                            type="email"
                            className="form-control"
                            placeholder="Email"
                        />
                    </div>
                </div>
                <div className="row">
                    <div class="col-sm-3 col-md-2 my-2">
                        <input
                            required="true"
                            onChange={handlePhone}
                            name="arreaCode"
                            type="text"
                            value="1"
                            className="form-control"
                            placeholder="Area Code"
                        />
                    </div>
                    <div class="col-sm-9 col-md-4 my-2">
                        <input
                            required="true"
                            onChange={handlePhone}
                            name="number"
                            type="text"
                            className="form-control"
                            placeholder="number"
                        />
                    </div>
                    <div class="col-md-2 col-sm-6 my-2">
                        <input
                            onChange={handlePhone}
                            name="extension"
                            type="text"
                            className="form-control"
                            placeholder="Extension"
                        />
                    </div>
                    <div class="col-md-4 col-sm-6 my-2">
                        <select
                            required="true"
                            onChange={handlePhone}
                            name="tag"
                            className="form-control"
                            placeholder="Type"
                        >
                            <option selected>Type...</option>
                            {phonetag.map((tag) => (
                                <option key={tag.id} value={tag.id}>{tag.name}</option>
                            ))}

                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-sm-12 my-2">
                        <input
                            required="true"
                            onChange={handleAdresses}
                            name="fax"
                            type="text"
                            className="form-control"
                            placeholder="Fax"
                        />
                    </div>
                    <div className="col-md-6 col-sm-12 my-2">
                        <input
                            required="false"
                            onChange={handleAdresses}
                            name="description"
                            type="text"
                            className="form-control"
                            placeholder="Description"
                        />
                    </div>
                </div>
                <div className="row">
                    <div class="col-sm-9 col-md-4 my-2">
                        <input
                            required="true"
                            onChange={handleAdresses}
                            name="city"
                            type="text"
                            className="form-control"
                            placeholder="City"
                        />
                    </div>
                    <div class="col-md-4 col-sm-6 my-2">
                        <select
                            required="true"
                            onChange={handleAdresses}
                            name="state"
                            className="form-control"
                            placeholder="State"
                        >
                            <option selected>State...</option>
                            {stateOfUsa.map((state) => (
                                <option key={state.abbreviation} value={state.name}>{state.name}</option>
                            ))}
                        </select>
                    </div>
                    <div class="col-md-2 col-sm-6 my-2">
                        <input
                            required="true"
                            onChange={handleAdresses}
                            name="zipcode"
                            type="text"
                            className="form-control"
                            placeholder="Zip Code"
                        />
                    </div>
                </div>
                <div className="col-md-6 col-sm-12 mt-3 mx-auto">
                    <button className="btn btn-block btn-outline-primary">Register Employee</button>
                </div>
            </form>
        </div>
    );
};

RegisterEmployee.prototype = {
    loading: PropTypes.bool.isRequired,
    phonetag: PropTypes.array.isRequired,
    employee: PropTypes.array.isRequired,
    addEmployee: PropTypes.func.isRequired,
    loadPhonetag: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    error: state.employee.errors || state.phonetag.error,
    employee: state.employee.employee,
    phonetag: state.phonetag.phonetag,
});

const mapDispatchToProps = {
    addEmployee,
    loadPhonetag,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterEmployee);
