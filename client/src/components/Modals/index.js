import React from "react";
import { Modal, Button } from "react-bootstrap";
const SimPleModal = ({ title, children, show, onHide }) => {
  return (
    <Modal show={show} size='lg' centered>
      <Modal.Header>
        <Modal.Title>{title}</Modal.Title>
        <Button variant='ligth' onClick={onHide}>
          <i className=' fa fa-window-close'></i>
        </Button>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
};

export default SimPleModal;
