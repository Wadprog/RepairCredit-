import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addEmployee } from "../redux/actions/employee";
import { loadPhonetag } from "../redux/actions/phonetag";
import stateOfUsa from "../utils/data/stateofUsa.json";
import months from "../utils/data/months.json";
import SelectCreatable from "./form-input/select-creatable/select-creatable";

const RegisterEmployee = (props) => {
  useEffect(() => {
    loadPhonetag();
  }, []);

  const {
    addEmployee,
    loadPhonetag,
    employee,
    phonetag,
    error,
    loading,
  } = props;

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phones: [],
    addresses: [],
  });

  const [phones, setPhones] = useState({
    arreaCode: "",
    number: "",
    extension: "",
    tag: "",
  });

  const [addresses, setAddresses] = useState({
    state: "",
    city: "",
    zipcode: "",
    fax: "",
    description: "",
  });

  const [date, setDate] = useState({
    month: "",
    day: "",
    year: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhone = (e) => {
    setPhones({ ...phones, [e.target.name]: e.target.value });
  };

  const handleAdresses = (e) => {
    setAddresses({ ...addresses, [e.target.name]: e.target.value });
  };

  const handleDate = (e) => {
    setDate({ ...date, [e.target.name]: e.target.value });
  };

  const HandleChange = (newValue = "", actionMeta = "") => {
    setAddresses({ ...addresses, [actionMeta.name]: newValue.value });
    console.groupEnd();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    phones.arreaCode = "1";
    formData.phones.push(phones);
    formData.addresses.push(addresses);
    formData.dob = date.month + "/" + date.day + "/" + date.year;
    console.log(formData);
    addEmployee(formData);
    setFormData({ ...formData });
  };

  return (
    <div className='container mt-4'>
      <h1 className='h4'>Register People</h1>
      <form className='mx-auto' onSubmit={handleSubmit}>
        <div className='row'>
          <div className='col-md-6 col-sm-12 my-2'>
            <input
              required
              onChange={handleChange}
              name='firstname'
              type='text'
              className='form-control'
              placeholder='First name'
            />
          </div>
          <div className='col-md-6 col-sm-12 my-2'>
            <input
              required
              onChange={handleChange}
              name='lastname'
              type='text'
              className='form-control'
              placeholder='Last name'
            />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-4 col-sm-6 my-2'>
            <select
              required
              onChange={handleDate}
              name='month'
              className='form-control'
              placeholder='Birth month'
            >
              <option selected>Birth month...</option>
              {months.map((month) => (
                <option key={month.value} value={month.value}>
                  {month.name}
                </option>
              ))}
            </select>
          </div>
          <div className='col-sm-9 col-md-4 my-2'>
            <input
              required
              onChange={handleDate}
              name='day'
              type='number'
              min='1'
              max='31'
              className='form-control'
              placeholder='Birth day'
            />
          </div>
          <div className='col-md-2 col-sm-6 my-2'>
            <input
              required
              onChange={handleDate}
              name='year'
              type='number'
              min='1970'
              max='9999'
              className='form-control'
              placeholder='Birth year'
            />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6 col-sm-12 my-2'>
            <input
              required
              onChange={handleChange}
              name='email'
              type='email'
              className='form-control'
              placeholder='Email'
            />
          </div>
          <div className='col-md-6 col-sm-12 my-2'>
            <select
              required
              onChange={handlePhone}
              name='levelAccess'
              className='form-control'
              placeholder='Email'
            >
              <option selected>Who is he ?</option>
              <option value='Employee'>Employee</option>
              <option value='Afilliate'>Afilliate</option>
            </select>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-3 col-md-2 my-2'>
            <input
              readOnly
              onChange={handlePhone}
              name='arreaCode'
              type='text'
              value='+ 1'
              className='form-control'
              placeholder='Area Code'
            />
          </div>
          <div className='col-sm-9 col-md-4 my-2'>
            <input
              required
              onChange={handlePhone}
              name='number'
              type='number'
              className='form-control'
              placeholder='number'
            />
          </div>
          <div className='col-md-2 col-sm-6 my-2'>
            <input
              onChange={handlePhone}
              name='extension'
              type='text'
              className='form-control'
              placeholder='Extension'
            />
          </div>
          <div className='col-md-4 col-sm-6 my-2'>
            <select
              required
              onChange={handlePhone}
              name='tag'
              className='form-control'
              placeholder='Type'
            >
              {phonetag.map((tag) => (
                <option key={tag._id} value={tag._id}>
                  {tag.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6 col-sm-12 my-2'>
            <input
              required
              onChange={handleAdresses}
              name='fax'
              type='text'
              className='form-control'
              placeholder='Fax'
            />
          </div>
          <div className='col-md-6 col-sm-12 my-2'>
            <input
              required
              onChange={handleAdresses}
              name='description'
              type='text'
              className='form-control'
              placeholder='Description'
            />
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-9 col-md-4 my-2'>
            <input
              required
              onChange={handleAdresses}
              name='city'
              type='text'
              className='form-control'
              placeholder='City'
            />
          </div>
          <div className='col-md-4 col-sm-6 my-2'>
            <SelectCreatable
              required
              className='form-control'
              onChange={HandleChange}
              name='state'
              placeholder='State'
              items={stateOfUsa}
            />
          </div>
          <div className='col-md-2 col-sm-6 my-2'>
            <input
              required
              onChange={handleAdresses}
              name='zipcode'
              type='text'
              className='form-control'
              placeholder='Zip Code'
            />
          </div>
        </div>
        <div className='col-md-6 col-sm-12 mt-3 mx-auto'>
          <button className='btn btn-block btn-outline-primary'>
            Register Employee
          </button>
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
