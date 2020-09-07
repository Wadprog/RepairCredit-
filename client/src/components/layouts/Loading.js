import React from "react";
const Loading = ({ message }) => {
  return (
    <div className='w-100  d-flex justify-content-center'>
      <div className='spinner-border' role='status'>
        <span className='sr-only'>Loading... {message}</span>
      </div>
    </div>
  );
};
export default Loading;
