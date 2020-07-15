import React from "react";
import { Dropdown } from "react-bootstrap";

const ClientCard = ({ name, id, deleteSelf }) => {
  return (
    <li className='list-group-item mb-2 p-2'>
      <div className='row ml-2 p-0'>
        <div className='col-9 p-0'>
          <div>{name}</div>
          <small className='text-muted'>{name}</small>
        </div>
        <div className='col-3 p-0'>
          <Dropdown size='sm'>
            <Dropdown.Toggle variant='white' className=' btn-shadow bt-white' />
            <Dropdown.Menu>
              <Dropdown.Item href={`/customer/${id}`}>
                View <i className='fa fa-eye'></i>
              </Dropdown.Item>
              <Dropdown.Item href='#/action-2'>Move Next</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item
                className='text-danger'
                id={id}
                onClick={e => {
                  deleteSelf(e);
                }}
              >
                Delete
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </li>
  );
};

export default ClientCard;
