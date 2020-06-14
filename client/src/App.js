import React, { Fragment } from "react";
//Components and pages
import PageWraper from "./components/layouts/PageWraper";
import Home from "./Pages/Home/";

//Routing ..
import { Switch, Route } from "react-router-dom";
import Routes from "./components/Routes";
//Redux
import { Provider } from "react-redux";
import store from "./redux/store";

//Test Componenet and pages

import "./App.css";
function App() {
  return (
    <Provider store={store}>
      <PageWraper>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route component={Routes} />
        </Switch>
      </PageWraper>
    </Provider>
  );
}

export default App;
