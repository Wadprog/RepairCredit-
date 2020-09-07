import React from "react";
import { Button, Modal } from "react-bootstrap";

import AddPartnerForm from "./AddPartnerForm";
const Addpartner = ({ onHide, show }) => {
  return (
    <Modal show={show} size="lg" centered>
      <Modal.Header>
        <Modal.Title>Add new Partner</Modal.Title>
        <Button variant="ligth" onClick={onHide}>
          <i className=" fa fa-window-close"></i>
        </Button>
      </Modal.Header>
      <Modal.Body>{<AddPartnerForm />}</Modal.Body>
    </Modal>
  );
};

export default Addpartner;
