import { Button} from 'react-bootstrap'
import { Link} from "react-router-dom"
import { useContexto } from "./CartContext"

const Carrito = () => {

    const { carrito, removeItem, clear } = useContexto()

    return (
        <div>
            <h3>Carrito de compras</h3>
            {carrito.length > 0 ? (
                <ul>
                    {carrito.map((producto, indice) => {
                        return <li key={indice}>
                                   {producto.nombre} - ${producto.precio} - Cantidad: {producto.contador}
                                   <Button variant="outline-danger" onClick={()=>removeItem(producto.id,producto.contador)}>Borrar</Button>
                               </li>
                               
                    })}
                    <Button variant="outline-primary" as={Link} to="/resume">Finalizar compra</Button>
                    <Button variant="outline-success" as={Link} to="/">Seguir comprando</Button>
                    <Button variant="outline-secondary" onClick={()=>clear()}>Limpiar carrito</Button>
                </ul>
            ) : <div>  
                    <p>No hay productos en el carrito</p>
                    <Button variant="outline-success" as={Link} to="/">Seguir comprando</Button>
                </div>}

        </div>
    )
}

export default Carrito