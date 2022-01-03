import { useState, useEffect } from 'react'
import ItemCount from "./ItemCount"
import ItemDetail from "./ItemDetail"
import productosJson from "../productos.json"
import "../styles.css"
import { useParams } from "react-router-dom"

/* const prodPrueba = {
    id: 1, 
    nombre: "Papel Kraft", 
    detalle: "Papeleria utilizada para collage y manualidades.", 
    stock: 6, 
    precio: 450, 
    img:"/papel_kraft.jpg"} */
    


const ItemDetailContainer = () => {

    let productos = productosJson;

    const params = useParams();
    console.log(params.id);
    let [prodDetail, setProdDetail] = useState({})

    useEffect(()=>{

        const getItem = new Promise((res,rej)=>{
            setTimeout(()=>{
                res(productos)
            },2000)
        })
        
        getItem
        .then((productos)=>{
             
            const producto = productos.find( producto => producto.id == params.id)
            setProdDetail(producto)
        })
        .catch(()=>{
            console.log("No es posible mostrar el detalle que solicito.")
        })

    },[])

    return (
        <div className="itemDet">
            <ItemDetail prodDetail={prodDetail}/>
        </div>
    )
}


export default ItemDetailContainer