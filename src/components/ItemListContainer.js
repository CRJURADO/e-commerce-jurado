import { useState, useEffect } from 'react'
import ItemList from "./ItemList"
import productosJson from "../productos.json"
import "../styles.css"
import { useParams } from "react-router-dom"


const ItemListContainer = ({greeting}) => {

    let productos = productosJson;

    const {nombre} = useParams();

    let [prodLista, setProdLista] = useState([])


    useEffect(()=>{


        if(nombre){
            console.log("Productos por categoria")
            productos = productos.filter(prod => prod.tag === nombre)
        }else{
            console.log("Todos los productos")
            productos = productosJson
        }

        const getCat = new Promise((res,rej)=>{
            setTimeout(()=>{
                res(productos)
            },2000)
        })
        
        getCat
            .then((productos) => {
                setProdLista(productos)
            }).catch(()=>{
                console.log("Algo fallo, por favor comuniquelo.")
            })

    }, [nombre])
  

    return (
        <div>
            <h1>Bienvenido a nuestra {greeting}!</h1>
            <ItemList prodLista={prodLista}/>
        </div>
    )
}

export default ItemListContainer