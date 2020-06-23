import React, { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import Tab1Content from "./Tab1";
import Tab2Content from "./Tab2";
import "./import-audit.css";

function ImportAudit() {
  return (
    <Tabs defaultActiveKey='MainImport'>
      <Tab eventKey='MainImport' title='Import Credit Report'>
        <Tab1Content />
      </Tab>

      <Tab eventKey='simpleImport' title='Simple Audit(Credit Analysis)'>
        <Tab2Content />
      </Tab>
    </Tabs>
  );
}

export default ImportAudit;
