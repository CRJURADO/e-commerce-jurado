import { useState, useEffect } from 'react'
import ItemList from "./ItemList"
import productosJson from "../productos.json"
import "../styles.css"
import { useParams } from "react-router-dom"


const ItemListContainer = ({greeting}) => {

    let productos = productosJson;

    const params = useParams();
    let catId = params.id;
    

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

    

    return (
        <div>
            <h1>Bienvenido a nuestra {greeting}!</h1>
            <ItemList prodLista={prodLista} catId={catId}/>
        </div>
    )
}

export default ItemListContainer