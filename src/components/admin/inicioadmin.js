import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Table, Form, Modal, Button, ListGroup, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { db } from '../../services/firebase';
import swal from 'sweetalert';
import { addNew, modificarNew } from '../../services/noticiasService';

const InicioAd = () => {

    const [modalShow, setModalShow] = useState(false);
    const [news, setNews] = useState([])

    const [isLoading, setLoading] = useState(true)

    const [dataNew, setdataNew] = useState('');

    const [action, setAction] = useState(0)


    useEffect(() => {
        const unsuscribe = db.collection('noticias').orderBy('creado', 'desc').onSnapshot(snapshot => {
            let newsData = []
            snapshot.docs.map(doc => {

                var id = doc.id
                var data = doc.data()

                newsData.push({
                    id: id,
                    nombre: data.nombre,
                    creado: data.creado,
                    imagen: data.imagen,
                    descripcion: data.descripcion
                })


            })
            setNews(newsData)
            setLoading(false)
        })

        return () => unsuscribe()

    }, [])


    const deleteNew = (idDocument) => {
        console.log(idDocument)
        db.collection('noticias').doc(idDocument).delete().then((success) => {
            swal("Noticia borrada", "La noticia ha sido borrada con exito", "success");
        })
            .catch((error) => swal("Error al eliminar", "Contacte con el administrador", "error"))
    }

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">Admin-Benscorp</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#" onClick={() => {
                            setAction(0)
                            setModalShow(true)
                        }}>Crear noticia</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/admin">Cerrar sesion</Nav.Link>
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
                        isLoading ?

                            <div className="d-flex justify-content-center mt-5">
                                <div className="spinner-border" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                            </div>

                            :

                            news.map((element, index) =>

                                <ListGroup.Item>
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <div className="font-weight-bold">{element.nombre}</div>
                                            <div className="text-secondary">{element.creado.toDate().toDateString()}</div>
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
                                                    <div role="button" onClick={() => {
                                                        setAction(1)
                                                        setdataNew(element)
                                                        setModalShow(true)
                                                    }} className="bg-warning text-white mr-2 pt-1 pb-1 pl-2 pr-2 rounded shadow-sm" >
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
                                                    <div role="button" onClick={() => {
                                                        swal({
                                                            title: "Esta seguro que quiere borrar la noticia",
                                                            text: "Una vez borrada la noticia no podra ser recuperada!",
                                                            icon: "warning",
                                                            buttons: true,
                                                            dangerMode: true,
                                                        })
                                                            .then((willDelete) => {
                                                                if (willDelete) {
                                                                    deleteNew(element.id);
                                                                }
                                                            });
                                                    }} className="bg-danger text-white mr-2 pt-1 pb-1 pl-2 pr-2 rounded shadow-sm">
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
                actionState={action}
                dataNew={dataNew}
            />
        </>
    );
}

function Modals(props) {

    const [img, setImg] = useState("");
    const [titulo, setTitulo] = useState("");
    const [descripcion, setDescripcion] = useState("");

    const handleClose = props.onHide;
    const dataNew = props.dataNew;
    const actionState = props.actionState;

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {actionState == 0 ? 'Crear una nueva noticia' : 'Editar una noticia'}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Titulo de la noticia</Form.Label>
                        <Form.Control type="text" placeholder="" defaultValue={actionState == 0 ? '' : dataNew.nombre} onChange={(event) => setTitulo(event.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput2">
                        <Form.Label>Imagen</Form.Label>

                        <Form.File accept="image/*,.jpg,.png" label={actionState == 0 ? '' : dataNew.imagen} onChange={(event) => setImg(event.target.value.split('\\').pop())} />


                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea4">
                        <Form.Label>Descripcion</Form.Label>
                        <Form.Control as="textarea" defaultValue={actionState == 0 ? '' : dataNew.descripcion} rows={3} onChange={(event) => setDescripcion(event.target.value)} />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='secondary' onClick={props.onHide}>Cerrar</Button>
                
                <Button variant='success' onClick={() => {
                    const datos = {
                        nombre: titulo,
                        img: img,
                        descripcion: descripcion,
                        id: dataNew.id
                    };
                    actionState == 0 ? 
                    addNew(datos).then((success) => {
                        swal("Noticia agregada", "La noticia ha sido agregada con exito", "success");
                        handleClose();
                    }).catch((error) => swal("Error al agregar", "Contacte con el administrador", "error"))
                    
                :
                    modificarNew(datos).then((success) => {
                        swal("Noticia modificada", "La noticia ha sido modificada con exito", "success");
                        handleClose();
                    }).catch((error) => {swal("Error al agregar", 'Contacte con el administrador' , "error")
                    console.log(error);
                })
                
            }
        }
            >{actionState == 0 ? 'Crear' : 'Modificar'} </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default InicioAd;