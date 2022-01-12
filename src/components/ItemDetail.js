import { useState } from 'react'
import ItemCount from "./ItemCount"
import { Image} from 'react-bootstrap'
import { useContexto } from "./CartContext"

const ItemDetail = ({prodDetail}) => {

    const [carrito,setCarrito] = useState([])
    const { addItem } = useContexto()

    //Contador
     const onAdd = (contador) => { 
            console.log("Soy detail " + contador + "PROD" + prodDetail)
            addItem(contador,prodDetail)
    } 
    
    return (
        <div>
            <Image src={prodDetail.img} rounded />
            <h1>Detalle de producto</h1>
            <p>Nombre: {prodDetail.nombre}</p>
            <p>Detalle: {prodDetail.detalle}</p>
            <p>Precio: ${prodDetail.precio}</p>
            <ItemCount stock={prodDetail.stock} initial={1} onAdd={onAdd} />
        </div>
    )
}

export default ItemDetail