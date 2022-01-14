import { createContext, useContext, useState } from "react";

const contexto = createContext()

export const { Provider } = contexto

export const useContexto = () => {
    return useContext(contexto)
}



const CustomProvider = ({children}) => {

    const [cantidad_total,setCantidadTotal] = useState(0)
    const [carrito,setCarrito] = useState([])

    const addItem = (contador,prodDetail) => {

        const id = prodDetail.id
        console.log(id)

        if(isInCarrito(id)){

            const cartCopy = [...carrito]
            let finded = cartCopy.find((p) => p.id === prodDetail.id)
            finded.contador = finded.contador + contador
            setCarrito(cartCopy)

        }else{
            const itemAndQty = {
                ...prodDetail, contador
            }
            setCarrito([...carrito, itemAndQty])
            console.log(carrito)
        }

        setCantidadTotal(cantidad_total + contador)
    }

    const removeItem = (id, contador) => {
        let carritoFiltrado = carrito.filter(e => (e.id) !== id)
        setCarrito(carritoFiltrado)
        setCantidadTotal(cantidad_total - contador)
    }

    const clear = () => {  setCarrito([])  }

    const isInCarrito = (id) => {
        return carrito.some((p) => p.id === id)
    }

    const valorDelContexto = {
        cantidad_total , 
        carrito , 
        addItem , 
        removeItem ,
        clear
    }

    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}

export default CustomProvider