import React from "react"
import "../styles.css"
import { Link, NavLink } from "react-router-dom"
import CartWidget from "./CartWidget"
import { Navbar, NavDropdown, Nav, Container, Image } from 'react-bootstrap'


 const NavbarComp = ({links}) => {
   
        return (

          <Navbar bg="light" expand="lg">
            <Container>
              <NavLink to="/">
                <Image className="logoStyle" src="/logo_libreria.png" rounded />
              </NavLink>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link as={Link} to="/">Home</Nav.Link>
                  <Nav.Link as={Link}  to="/nosotros">Nosotros</Nav.Link>
                  <NavDropdown title="Productos" id="basic-nav-dropdown">
                    <NavDropdown.Item><Nav.Link as={Link} key="3" to="/productos/3">Papeleria</Nav.Link></NavDropdown.Item>
                    <NavDropdown.Item><Nav.Link as={Link} key="4" to="/productos/4">Artistica</Nav.Link></NavDropdown.Item>
                    <NavDropdown.Item><Nav.Link as={Link} key="5" to="/productos/5">Articulos para bujo</Nav.Link></NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item><Nav.Link as={Link} key="6" to="/productos">Todo</Nav.Link></NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
                  <CartWidget/>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>

        )
    }

export default NavbarComp