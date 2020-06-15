import React, { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import routes from "./routes";
import Sidebar from "./Sidebar";
const Profile = () => {
  const switchRoutes = (
    <Switch>
      {routes.map((prop, index) => {
        if (prop.layout === "/company") {
          return (
            <Route
              path={prop.layout + prop.path}
              component={prop.component}
              key={index}
            />
          );
        }
        return null;
      })}
      <Redirect from='/company' to='/company/main' />
    </Switch>
  );

  const [activeComponent, setActiveComponent] = useState("a");
  const switchComponent = component => {
    setActiveComponent(component);
  };

  return (
    <div className='container  '>
      <div className='row border py-3 '>
        <div className='col-3 py-4'>
          <Sidebar switchComponent={switchComponent} />
        </div>
        <div className='col-9'>
          <div className=''>{switchRoutes}</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
