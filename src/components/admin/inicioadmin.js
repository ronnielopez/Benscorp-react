import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Navbar, Nav, Table, Form, Modal, Button, ListGroup, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { db } from '../../services/firebase';
import swal from 'sweetalert';
import { addNew, modificarNew } from '../../services/noticiasService';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { data } from 'jquery';



const InicioAd = () => {

    const [modalShow, setModalShow] = useState(false);
    const [news, setNews] = useState([])

    const [isLoading, setLoading] = useState(true)

    const [datanew, setdatanew] = useState('');

    const [action, setAction] = useState(0)

    const history = useHistory();

    useEffect(() => {
        let token = sessionStorage.getItem('idToken');
        if (token === null) {
            history.push("/admin");
        }
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
                    descripcion: data.descripcion,
                    fecha: data.fecha
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

                                <ListGroup.Item key={element.id}>
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <div className="font-weight-bold">{element.nombre}</div>
                                            <div className="text-secondary">{element.creado.toDate().toDateString()}</div>
                                        </div>
                                        <div className="row align-self-center">
                                            <i className="fas fa-calendar-week align-self-center mr-3"></i>
                                            <span>{element.fecha.toDate().toDateString()}</span>
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
                                                        setdatanew(element)
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
                actionstate={action}
                datanew={datanew}
            />
        </>
    );
}

function Modals(props) {

    const datanew = props.datanew;
    const [img, setImg] = useState("");
    const [titulo, setTitulo] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const handleClose = props.onHide;
    const actionstate = props.actionstate;
    const [startDate, setStartDate] = useState(new Date());

    useEffect(()=>{
        if(actionstate === 1){
            setImg(datanew.imagen);
            setTitulo(datanew.nombre);
            setDescripcion(datanew.descripcion);
        }
    }, [datanew.imagen, datanew.nombre, datanew.descripcion])
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >

            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {actionstate == 0 ? 'Crear una nueva noticia' : 'Editar una noticia'}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="exampleForm.ControlInput1" >
                        <Form.Label>Titulo de la noticia</Form.Label>
                        <Form.Control type="text" placeholder="" defaultValue={actionstate == 0 ? '' : datanew.nombre} onChange={(event) => setTitulo(event.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput2">
                        <Form.Label>Imagen</Form.Label>
                        <Form.File accept="image/*,.jpg,.png" label={actionstate == 0 ? '' : datanew.imagen} onChange={(event) => setImg(URL.createObjectURL(event.target.files[0]))} />
                    </Form.Group>
                    <Form.Group className='row'>
                        <Form.Label className='col-md-2'>Fecha </Form.Label>
                        <DatePicker className='col-md-8' dateFormat="dd/MM/yyyy" selected={actionstate === 0 ? startDate : datanew.fecha.toDate()} onChange={date => setStartDate(date)} />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea4">
                        <Form.Label>Descripcion</Form.Label>
                        <Form.Control as="textarea" defaultValue={actionstate == 0 ? '' : datanew.descripcion} rows={3} onChange={(event) => setDescripcion(event.target.value)} />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='secondary' onClick={props.onHide}>Cerrar</Button>

                <Button variant='success' onClick={() => {
                    let datos = {
                        nombre: titulo,
                        img: img,
                        descripcion: descripcion,
                        id: datanew.id,
                        fecha: startDate
                    }
                     console.log(datos);   
                    if(datos.nombre != '' && datos.img != '' && datos.descripcion != ''){
                        actionstate == 0 ?
                            addNew(datos).then((success) => {
                                swal("Noticia agregada", "La noticia ha sido agregada con exito", "success");
                                handleClose();
                                setTitulo("");
                                setDescripcion("");
                                setImg("");
                            }).catch((error) => swal("Error al agregar", "Contacte con el administrador", "error"))

                            :
                            modificarNew(datos).then((success) => {
                                swal("Noticia modificada", "La noticia ha sido modificada con exito", "success");
                                handleClose();
                                setImg('');
                                setDescripcion('');
                                setTitulo('');
                            }).catch((error) => {
                                swal("Error al agregar", 'Contacte con el administrador', "error")
                                console.log(error);
                            })
                        }else{
                            swal('Llene los datos');
                        }
                }
                }
                >{actionstate == 0 ? 'Crear' : 'Modificar'} </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default InicioAd;