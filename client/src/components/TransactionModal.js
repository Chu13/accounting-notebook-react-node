import React from "react";
import { Modal, Button, Form, InputGroup } from "react-bootstrap";
import "../App.css";

const TransactionModal = ({
  handleClose,
  handleSave,
  show,
  handleChange,
  handleChangeSelect,
  type,
}) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>New Transaction</Modal.Title>
      </Modal.Header>

      <Modal.Body>
      <Form>
        <Form.Group controlId="formControlsSelect1">
          <Form.Label>Transaction Type</Form.Label>
          <Form.Control
            as="select"
            className="mb-3"
            onChange={handleChangeSelect}
          >
            <option value="debit">Debit</option>
            <option value="credit">Credit</option>
          </Form.Control>
          <Form.Label>Amount</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text>$</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control onChange={handleChange} />
            <InputGroup.Append>
              <InputGroup.Text>.00</InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
        </Form.Group>
      </Form>
      </Modal.Body>
      
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Save changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TransactionModal;
