import React from "react"
import { Navbar, Nav, Container, span } from 'react-bootstrap'

const CartWidget = () => {
    return (
        <Nav.Link href="#link">
            <span class="material-icons">shopping_basket</span>
        </Nav.Link>
    )
}

export default CartWidget