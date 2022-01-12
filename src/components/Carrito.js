import { useContexto } from "./CartContext"

const Carrito = () => {

    const { carrito, removeItem, clear } = useContexto()


    return (
        <div>
            Soy Carrito
            {carrito.length > 0 ? (
                <ul>
                    {carrito.map((producto, indice) => {
                        return <li key={indice}>{producto.nombre} - ${producto.precio}</li>
                    })}
                </ul>
            ) : <p>No hay productos en el carrito</p>}

        </div>
    )
}

export default Carrito