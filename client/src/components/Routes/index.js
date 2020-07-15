import React from "react";
import { Route, Switch } from "react-router-dom";
import NotFound from "../../Pages/NotFound";
import PrivateRoute from "./PrivateRoute";
import HomeConnect from "../../Pages/Home/HomeConnect";
import ListClient from "../../Pages/Client";
import RegisterEmployee from "../../Pages/Client/AddClientForm";
import ImportAudit from "../../Pages/import-audit/import-audit";

import ImportAudit from "../../Pages/import-audit/import-audit";

import ListClientCR from "../../Pages/Client/ListClient-CR";
import ClientDashboard from "../../Pages/Client/ClientDashboard";
import Company from "../../Pages/Company";
import CreditReport from "../../Pages/CreditReport/CreditReport";
const Routes = props => {
  return (
    <section className='container'>
      <Switch>
        {/*<Route exact path="/register" component={} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/profiles" component={Profiles} />
        <Route exact path="/profile/:id" component={Profile} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/create-profile" component={ProfileForm} />
        <PrivateRoute exact path="/edit-profile" component={ProfileForm} />
        <PrivateRoute exact path="/add-experience" component={AddExperience} />
        <PrivateRoute exact path="/add-education" component={AddEducation} />
        <PrivateRoute exact path="/posts" component={Posts} />
        <PrivateRoute exact path="/posts/:id" component={Post} />
          
        */}
<<<<<<< HEAD

        <PrivateRoute exact path="/register" component={RegisterEmployee} />
        <PrivateRoute exact path="/customers" component={ListClient} />
        <PrivateRoute exact path="/homeconnect" component={HomeConnect} />
        <PrivateRoute exact path="/ListClientCR" component={ListClientCR} />
        <PrivateRoute
          exact
          path="/customer/:id"
          component={ClientDashboard}
        />
        <PrivateRoute path="/company" component={Company} />
=======
        <PrivateRoute exact path='/homeconnect' component={HomeConnect} />
        <PrivateRoute exact path='/register' component={RegisterEmployee} />
        <PrivateRoute exact path='/customers' component={ListClient} />
        <PrivateRoute exact path='/ListClientCR' component={ListClientCR} />
        <PrivateRoute exact path='/customer/:id' component={ClientDashboard} />
        <PrivateRoute path='/import-audit/:id' component={ImportAudit} />
        <PrivateRoute path='/credit-report/:id' component={CreditReport} />
        <PrivateRoute path='/company' component={Company} />
>>>>>>> 89e139886417731057d1f05c00975838e12ae0c8

        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
