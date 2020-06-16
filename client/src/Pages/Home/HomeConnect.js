import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Home from "@material-ui/icons/Home";
import { Alert, ProgressBar } from "react-bootstrap";
const HomeConnect = props => {
  const f = "folder";
  return (
    <Fragment>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-12 mb-2'>
            <Alert variant='warning'>
              You have a full account with all access! Get started with the
              Welcome Video, the Guided Tour and learn with your Sample Client.
              Be sure to read our User Guides. For the best possible experience,
              tune-up your web browser. For account changes click here. Need
              help? See help and support options.
            </Alert>
          </div>
          <div className='col-12 '>
            <div className='card p-2'>
              <div className='card-body p-0'>
                <p>
                  <span className='h5'>
                    CheckList for starting a Credit Repair Business
                  </span>
                </p>
                <ProgressBar
                  animated
                  striped
                  variant='success'
                  now={60}
                  label={`${60}%`}
                />

                <h6 className='text-center my-2'>
                  <Link className='text-success' to='/#'>
                    Open My CheckList
                  </Link>
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className='row mt-3'>
          <div class='col-4'>
            <div className='card p-1 box'>
              <div className='card-header'>
                <h5 className='card-title'>
                  {" "}
                  <span className='font-weight-bold'>Quick start </span>
                  <span>(Your most common task):</span>
                </h5>
              </div>
              <div className='card-body'>
                <MiniItem
                  title='Add New Client'
                  subTitile='Sign up a new client and add to database'
                  icontext='A'
                  link='/register'
                />
                <MiniItem
                  title='Select an existing client'
                  subTitile='Work with an existing client'
                  icontext='B'
                  link='/ListClientCR'
                />

                <MiniItem
                  title='Run Credit Dispute Wizard'
                  subTitile=' Order Reports, review reports, correct errors'
                  icontext='C'
                  link='/#'
                />
              </div>
            </div>
          </div>

          <div class='col-8'>
            <div className=' card box'>
              <div className='card-body'>
                <div className='row '>
                  <Item
                    iconClass='home'
                    iconColor='green'
                    title=' My company Profile'
                    subTitile='Configure users, permissions, billing'
                    link='/company'
                  />

                  <Item
                    iconClass='bookmark'
                    iconColor='blue'
                    title=' Free Live Software class'
                    subTitile='Dailly for all credits heroes!'
                    link='/#'
                  />
                </div>

                <div className='row  mt-4'>
                  <Item
                    iconClass='users'
                    iconColor='blue'
                    title=' My Clients'
                    subTitile='Add or delete cleints and records'
                    link='/customers'
                  />

                  <Item
                    iconClass='cloud'
                    iconColor='#AFFBA'
                    title=' Free Videos and Ressources'
                    subTitile='Credit Repair cloud user guides'
                    link='/#'
                  />
                </div>

                <div className='row  mt-4'>
                  <Item
                    iconClass='address-book'
                    iconColor='#F8D775'
                    title=' My Contacts '
                    subTitile='Manage contact and Address'
                    link='/#'
                  />

                  <Item
                    iconClass='graduation-cap'
                    iconColor='green'
                    title=' Credit Repair Academy '
                    subTitile=' Get Credit Repair Training and Certificate'
                    link='/#'
                  />
                </div>

                <div className='row  mt-4'>
                  <Item
                    iconClass='calendar'
                    iconColor='orange'
                    title=' Schedule '
                    subTitile=' Time organisation and appointments'
                    link='/#'
                  />
                  <Item
                    iconClass='calculator'
                    iconColor='blue'
                    title=' Business Website '
                    subTitile='Get a Professional site in minutes'
                    link='/#'
                  />
                </div>

                <div className='row  mt-4'>
                  <Item
                    iconClass='grav'
                    iconColor='blue'
                    title=' Client and Affiliate Portal '
                    subTitile='Client and Affiliate log in here'
                    link='/#'
                  />
                  <Item
                    iconClass='telegram'
                    iconColor='orange'
                    title=' Get CRC Certified '
                    subTitile='Get Free step by step training most out of CRC'
                    link='/#'
                  />
                </div>

                <div className='row  mt-4'>
                  <Item
                    iconClass='grav'
                    iconColor='blue'
                    title=' Library of disspute Letters '
                    subTitile='Also add your ow custom letters'
                    link='/#'
                  />
                  <Item
                    iconClass='folder'
                    iconColor='orange'
                    title='Bonus Materials '
                    subTitile='Legal docs and marketing materials'
                    link='/#'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HomeConnect;

const Item = ({ title, subTitile, link, iconClass, iconColor }) => {
  return (
    <div className=' box box-item p-2 col-6'>
      <Link className='text-decoration-none text-dark' to={link}>
        <div className='row no-gutters'>
          <div class='col-md-2 mx-auto'>
            <i
              className={`fa fa-${iconClass} fa-2x`}
              style={{ color: `${iconColor}` }}
            ></i>
          </div>
          <div class='col-md-10'>
            <span className='font-weight-bold'>{title}</span> <br />
            <span className=''>
              <small>{subTitile}</small>
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

const MiniItem = ({ title, subTitile, link, icontext }) => {
  return (
    <div className=' box mb-2 box-item '>
      <Link className='text-decoration-none text-dark' to={link}>
        <div className='row p-3'>
          <div class='col-md-2 mx-auto'>
            <div className='bg-danger text-white text-bold rounded-circle miniItem-icon'>
              {icontext}
            </div>
          </div>
          <div class='col-md-10'>
            <span className='font-weight-bold'>{title} </span> <br />
            <span className=''>
              <small>{subTitile}</small>
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};
