import React from "react"
import "../styles.css"
import { Link, NavLink } from "react-router-dom"
import CartWidget from "./CartWidget"
import { Navbar, NavDropdown, Form, FormControl, Button, Nav, Container, Image } from 'react-bootstrap'


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
                  <NavLink to="/">Home</NavLink>
                  <NavLink to="/nosotros">Nosotros</NavLink>
                  <NavDropdown title="Productos" id="basic-nav-dropdown">
                    <NavDropdown.Item><NavLink key="3" to="/productos/papeleria">Papeleria</NavLink></NavDropdown.Item>
                    <NavDropdown.Item><NavLink key="4" to="/productos/artistica">Artistica</NavLink></NavDropdown.Item>
                    <NavDropdown.Item><NavLink key="5" to="/productos/bujo">Articulos para bujo</NavLink></NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item><NavLink key="6" to="/productos">Todo</NavLink></NavDropdown.Item>
                  </NavDropdown>
                  <NavLink to="/contacto">Contacto</NavLink>
                  <CartWidget/>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>

        )
    }

export default NavbarComp