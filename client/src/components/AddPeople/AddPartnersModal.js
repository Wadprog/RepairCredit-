import React from "react";
import { Button, Modal } from "react-bootstrap";

import AddPartnerForm from "./AddPartnerForm";
const Addpartner = ({ onHide, show }) => {
  return (
    <Modal show={show} size='lg' centered>
      <Modal.Header>
        <Modal.Title>Add new Partner</Modal.Title>
      </Modal.Header>
      <Modal.Body>{<AddPartnerForm />}</Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Addpartner;
