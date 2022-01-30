import React from "react"
import { Link, NavLink } from "react-router-dom"
import { Navbar, Nav, Container, span } from 'react-bootstrap'
import { useContexto } from "./CartContext"
import "../styles.css"

const CartWidget = () => {

    const { cantidad_total } = useContexto()
    

    return ( 
        <div> 
            {cantidad_total > 0 ? (
                <Nav.Link as={Link} to="/carrito">
                    <div className="divCount">
                    <span className="material-icons">shopping_basket</span>   
                    <span id="contItm" className="position-absolute top-20 start-70 translate-middle badge rounded-pill bg-danger">
                        {cantidad_total} 
                    </span>  
                    </div>  
                </Nav.Link>
                
            ) : <Nav.Link><span className="material-icons">remove_shopping_cart</span></Nav.Link>
            }
        </div>
        
    )
}

export default CartWidget