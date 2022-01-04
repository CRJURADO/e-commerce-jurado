import { useState } from 'react'
import ItemCount from "./ItemCount"
import { Image} from 'react-bootstrap'

const ItemDetail = ({prodDetail}) => {

    const [carrito,setCarrito] = useState([])

    //Contador
     const onAdd = (contador) => { 
            console.log("Soy detail " + contador)
            setCarrito([...carrito,{cantPedida:contador}])
            console.log(carrito)
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