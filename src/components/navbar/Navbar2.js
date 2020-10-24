import React from 'react';
import { Nav } from 'react-bootstrap';
import logo from '../../img/logo.png'
import Navbar from "react-bootstrap/Navbar"
const Navbar2 = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="sm" sticky="top" className="bg-white">
                <Navbar.Brand href="#home"><img className='img_resposive' src={logo} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <Nav>
                        <Nav.Link href="#QuienesSomos">¿Quienes somos?</Nav.Link>
                        <Nav.Link href="#servicio">Nuestros Servicios</Nav.Link>
                        <Nav.Link href="#nuestrosocios">Socios</Nav.Link>
                        <Nav.Link href="#alianza">Opiniones</Nav.Link>
                        <Nav.Link href="#Contacto">Contactenos</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Navbar2