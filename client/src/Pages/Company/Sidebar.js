import React from "react";
import routes from "./routes";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

function Sidebar({ switchComponent }) {
  const handleSwitch = e => {
    switchComponent(e.target.name);
  };
  return (
    <ListGroup>
      {routes.map(route => (
        <ListGroup.Item action variant='info' name={route.path}>
          <Link className='text-dark ' to={`${route.layout}${route.path}`}>
            {route.name}
          </Link>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default Sidebar;
