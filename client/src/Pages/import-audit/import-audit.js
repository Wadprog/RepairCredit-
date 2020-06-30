import React, { Fragment, useEffect } from "react";
import { Tabs, Tab } from "react-bootstrap";
import Tab1Content from "./Tab1";
import Tab2Content from "./Tab2";
import "./import-audit.css";
import { loadClientById } from "../../redux/actions/customer";
import { connect } from "react-redux";
function ImportAudit({
  customer,
  loadClientById,
  match: {
    params: { id },
  },
}) {
  useEffect(() => {
    loadClientById(id);
  }, []);
  return (
    <Fragment>
      {customer !== null && (
        <Tabs defaultActiveKey='MainImport'>
          <Tab eventKey='MainImport' title='Import Credit Report'>
            <Tab1Content />
          </Tab>

          <Tab eventKey='simpleImport' title='Simple Audit(Credit Analysis)'>
            <Tab2Content />
          </Tab>
        </Tabs>
      )}
    </Fragment>
  );
}

const mapStateToProps = state => ({
  customer: state.customer.customer,
});

const mapDispatchToProps = { loadClientById };

export default connect(mapStateToProps, mapDispatchToProps)(ImportAudit);
