import React from 'react'
import "./Navbar.css"  
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Cartwidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar expand="lg" className="navbar"> 
                <Container className='nav-container'>
                    <Navbar.Brand href="#home" className='navbar-logo text-white'>Shop</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav ">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home" className='options text-white'>Home</Nav.Link>
                            <Nav.Link href="#link" className='options text-white'>Link</Nav.Link>
                            <Link href="#home" className='ver-carrito text-white' to={"/cart"}> {/*Nombre de ruta*/}
                                <Cartwidget/>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;

