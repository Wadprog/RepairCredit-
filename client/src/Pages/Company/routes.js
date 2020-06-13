//import Clients from "./views/ClientList/ClientList.js";
import React from "react";
import CompanyDetails from "./Views";

import Partners from "./Views/Partners";
const dummy = () => {
  return <p> Iam dummy original</p>;
};

const dummy1 = () => {
  return <p> Iam dummy coy</p>;
};
const dashboardRoutes = [
  {
    path: "/main",
    name: "My Company",
    component: CompanyDetails,
    layout: "/company",
  },

  {
    path: "/team",
    name: "My Team Menbers(Users)",
    component: Partners,
    layout: "/company",
  },

  {
    path: "/roles",
    name: "Roles & Permissions",
    component: dummy,
    layout: "/company",
  },

  {
    path: "/monitoringService",
    name: "Credit Monitoring Service",
    component: dummy1,
    layout: "/company",
  },

  {
    path: "/HomeConnect",
    name: "Client/ Affiliate Portal",
    component: dummy,
    layout: "/company",
  },
];

export default dashboardRoutes;
