import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';

const ModalInicio = () => {

  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <Modal animation={false} show={show} onHide={handleClose} size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
        <Modal.Header closeButton>
          <Modal.Title>Informacion</Modal.Title>
        </Modal.Header>
        <Modal.Body>Sed ut perspiciatis unde voluptatem omnis iste natus
        error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
        inventore veritatis et quasi architecto beatae vitae explicabo. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat.</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Entendido
            </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalInicio;