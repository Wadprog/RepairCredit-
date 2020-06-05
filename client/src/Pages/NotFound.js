import React, { Fragment } from "react";

const NotFound = () => {
  return (
    <Fragment>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 d-flex justify-content-center'>
            <div className=''>
              <h1>Oops!</h1>
              <h2>404 Not Found</h2>
              <div className='error-details'>
                Sorry, an error has occured, Requested page not found!
              </div>
              <div className='error-actions'>
                <a
                  href='/'
                  className=' text-center btn btn-outline-primary '
                >
                  
                  Take Me Home{" "} <i className="fa fa-home"></i>
                </a>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default NotFound;
