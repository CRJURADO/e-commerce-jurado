import React from "react"
import { Link, NavLink } from "react-router-dom"
import { Navbar, Nav, Container, span } from 'react-bootstrap'
import { useContexto } from "./CartContext"

const CartWidget = () => {

    const { cantidad_total } = useContexto()
    

    return ( 
        <div> 
            {cantidad_total > 0 ? (
                <Nav.Link as={Link} to="/carrito">
                    <span className="material-icons">shopping_basket</span>   
                    {cantidad_total}     
                </Nav.Link>
            ) : <span className="material-icons">remove_shopping_cart</span>
            }
        </div>
        
    )
}

export default CartWidget