import { useState, useEffect } from 'react'
import ItemCount from "./ItemCount"
import ItemList from "./ItemList"
import "../styles.css"


const productos = [
    {id: 1, nombre: "Papel Kraft", detalle: "Papeleria utilizada para collage y manualidades.", stock: 6, precio: 450, img:"/papel_kraft.jpg"},
    {id: 2, nombre: "Stickers griegos", detalle: "Stickers de coleccion para decorar tarjetas, agendas y mucho más.", stock: 4, precio: 235, img:"/stickers_griegos.jpg"}
]


const ItemListContainer = ({nombre}) => {

    let [prodLista, setProdLista] = useState([])

    useEffect(()=>{

        const promesa = new Promise((res,rej)=>{
            setTimeout(()=>{
                res(productos)
            },2000)
        })
        
        promesa
        .then((productos)=>{
            setProdLista(productos)
        })
        .catch(()=>{
            console.log("Algo fallo, por favor comuniquelo.")
        })

    },[])

    //De momento no se utiliza contador
    /* const onAdd = (contador) => { 
            console.log(contador)
    } */

    return (
        <div>
            <h1>Bienvenido a nuestra {nombre}!</h1>
            <ItemList prodLista={prodLista}/>
        </div>
    )
}

export default ItemListContainer