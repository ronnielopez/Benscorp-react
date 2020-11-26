import React,{useState} from 'react';
import { Navbar, Nav , Table, Form, Modal, Button} from 'react-bootstrap';

const InicioAd = () => {

    const [modalShow, setModalShow] = useState(false);


    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">Admin-Benscorp</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#" onClick={()=>setModalShow(true)}>Crear noticia</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">Cerrar sesion</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <h1 className='text-center'>Bienvenido</h1>
            <div className='container'>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th></th>
                            <th className='text-center'>Noticia</th>
                            <th className='text-center'>Fecha</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td> 
                            <div className='text-center iconosadmin'><i className="fas fa-pen"></i></div>
                            </td>
                            <td> 
                            <div className='text-center iconosadmin'><i className="fas fa-trash"></i></div>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <Modals
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    animation={false}
                />
        </>
    );
}

function Modals(props) {

    const[img,setImg] = useState("");
    const[titulo,setTitulo] = useState("");
    const[descripcion,setDescripcion] = useState("");
    const handleClose = props.onHide;
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Crear una nueva noticia
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Titulo de la noticia</Form.Label>
                        <Form.Control type="text" placeholder="" onChange={(event)=>setTitulo(event.target.value)}/>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput2">
                        <Form.Label>Imagen</Form.Label>
                        <Form.File onChange={(event)=>setImg(event.target.value)}/>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea4">
                        <Form.Label>Descripcion</Form.Label>
                        <Form.Control as="textarea" rows={3} onChange={(event)=>setDescripcion(event.target.value)}/>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='secondary' onClick={props.onHide}>Cerrar</Button>
                <Button variant='success' onClick={()=>{
                    handleClose();
                }}>Crear </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default InicioAd;