import React from "react"
import "../styles.css"
import CartWidget from "./CartWidget"
import { Navbar, NavDropdown, Form, FormControl, Button, Nav, Container, Image } from 'react-bootstrap'


 const NavbarComp = () => {
        return (

          <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Brand href="#home"><Image className="logoStyle" src="/logo_libreria.png" rounded /></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#link">Nosotros</Nav.Link>
                  <NavDropdown title="Productos" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Papeleria</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Artistica</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Articulos para bujo</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Todo</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#link">Contacto</Nav.Link>
                  <CartWidget/>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>

        )
    }

export default NavbarComp