import React, { useState } from 'react';
import { Modal, Button, Form} from 'react-bootstrap';

const Navbar = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const [modalShow, setModalShow] = React.useState(false);
    return (
        <>
            <nav className="navbar navbar-expand-md navbar-light bg-light">
                <div className="w-100 order-1 order-md-0">
                    <ul className="navbar-nav mr-auto">
                        <div className="row">
                            <div className="col">
                                <li className="nav-item">
                                    <a href="#" className="nav-link letra_menu text-center"><i className="fas fa-phone"></i> +503 2556-0740</a>
                                </li>
                            </div>
                            <div className="col">
                                <li className="nav-item">
                                    <a href="#" className="nav-link letra_menu text-center"><i className="fas fa-envelope"></i> info@benscorp.com</a>
                                </li>
                            </div>
                        </div>
                    </ul>
                </div>
                <div className="navbar-collapse collapse mx-auto order-0 dual-collapse2">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                <h4><i className="fab fa-facebook-square"></i></h4>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                <h4><i className="fab fa-twitter-square"></i></h4>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                <h4><i className="fab fa-linkedin"></i></h4>
                            </a>
                        </li>
                    </ul>

                </div>
                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 ">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href='#' onClick={() => setModalShow(true)}>
                                <h2 className="text-right">¡Sera un gusto asesorarte!</h2>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
            <Modals
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    animation={false}
                />
        </>
    )
}

function Modals(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Ponte en contacto con nosotros
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Nombre completo</Form.Label>
                        <Form.Control type="text" placeholder="John Doe" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput2">
                        <Form.Label>Correo electronico </Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea4">
                        <Form.Label>Mensaje</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='secondary' onClick={props.onHide}>Cerrar</Button>
                <Button variant='success'>Enviar </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default Navbar