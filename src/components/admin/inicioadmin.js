import React,{useState, useEffect} from 'react';
import { Navbar, Nav , Table, Form, Modal, Button, ListGroup, OverlayTrigger, Tooltip} from 'react-bootstrap';
import { db } from '../../services/firebase';
import { addNew, getAllNews } from '../../services/noticiasService';

const InicioAd = () => {

    const [modalShow, setModalShow] = useState(false);
    const [news, setNews] = useState([])

    const [isLoading, setLoading] = useState(true)

    
    useEffect(() => {
        const unsuscribe = db.collection('noticias').onSnapshot(snapshot => {
            const data = snapshot.docs.map(doc => doc.data())
            setNews(data)
            setLoading(false)
        })

    }, [])


    

    

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
            <div className="container m-5">
                <h1>Noticias</h1>      
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <div className="d-flex justify-content-between">
                            <span>Noticia</span>
                            <span className="text-secondary">Acciones</span>
                        </div>
                    </ListGroup.Item>
                    { 
                        isLoading ? <h1>Cargando</h1> : 

                        news.map((element) => 
                        
                        <ListGroup.Item>
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <div className="font-weight-bold">{element.nombre}</div>
                                        <div className="text-secondary">{element.fecha}</div>
                                    </div>
                                    <div className="row align-self-center">
                                        <i className="far fa-image align-self-center mr-3"></i>
                                        <span>Contiene imagen</span>
                                    </div>
                                    <div>
                                        <div className="row">
                                            <OverlayTrigger
                                            key="edit"
                                            placement="top"
                                            overlay={
                                                <Tooltip id={`tooltip-top-edit`}>
                                                    Editar
                                                </Tooltip>
                                            }
                                            >
                                                <div role="button" className="bg-warning text-white mr-2 pt-1 pb-1 pl-2 pr-2 rounded shadow-sm">
                                                    <i className="fas fa-pen"></i>
                                                </div>
                                            </OverlayTrigger>
                                            <OverlayTrigger
                                            key="delete"
                                            placement="top"
                                            overlay={
                                                <Tooltip id={`tooltip-top-edit`}>
                                                    Eliminar
                                                </Tooltip>
                                            }
                                            >
                                                <div role="button" className="bg-danger text-white mr-2 pt-1 pb-1 pl-2 pr-2 rounded shadow-sm">
                                                    <i className="fas fa-trash"></i>
                                                </div>
                                            </OverlayTrigger>
                                        </div>
                                    </div>
                                </div>
                            </ListGroup.Item>
                        )
                    }
                </ListGroup>
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
                    addNew().then((success) => {
                        handleClose();
                    }).catch((error) => console.log(error))
                }}>Crear </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default InicioAd;