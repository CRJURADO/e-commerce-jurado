import React from "react"
import { Link, NavLink } from "react-router-dom"
import { Navbar, Nav, Container, span } from 'react-bootstrap'
import { useContexto } from "./CartContext"

const CartWidget = () => {

    const { cantidad_total } = useContexto()

    return (
        <Nav.Link as={Link} to="/carrito">
            <span className="material-icons">shopping_basket</span>   
            {cantidad_total}     
        </Nav.Link>
    )
}

export default CartWidget