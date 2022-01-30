import { useState } from 'react'
import {NotificationContainer, NotificationManager} from "react-notifications"
import ItemCount from "./ItemCount"
import { Image} from 'react-bootstrap'
import 'react-notifications/lib/notifications.css'
import { useContexto } from "./CartContext"


const ItemDetail = ({prodDetail}) => {

    const [carrito,setCarrito] = useState([])
    const { addItem } = useContexto()

    const createNotification = (type) => {  
          switch (type) {
            case 'success':
              NotificationManager.success('Usted agregó este producto al carrito', 'Producto agregado')
              break
          }
    }

    //Contador
     const onAdd = (contador) => { 
            let precioU = prodDetail.precio * contador
            addItem(contador,prodDetail, precioU)
            createNotification('success')
    } 


    
    return (
        <div>
            <Image src={prodDetail.img} rounded />
            <h1>Detalle de producto</h1>
            <p>Nombre: {prodDetail.nombre}</p>
            <p>Detalle: {prodDetail.detalle}</p>
            <p>Precio: ${prodDetail.precio}</p>
            <NotificationContainer/>
            <ItemCount stock={prodDetail.stock} initial={1} onAdd={onAdd} />  
        </div>
    )
}

export default ItemDetail