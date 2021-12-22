import { useState, useEffect } from 'react'
import ItemCount from "./ItemCount"
import ItemDetail from "./ItemDetail"
import "../styles.css"

const prodPrueba = {
    id: 1, 
    nombre: "Papel Kraft", 
    detalle: "Papeleria utilizada para collage y manualidades.", 
    stock: 6, 
    precio: 450, 
    img:"/papel_kraft.jpg"}
    


const ItemDetailContainer = () => {

    let [prodDetail, setProdDetail] = useState({})

    useEffect(()=>{

        const getItem = new Promise((res,rej)=>{
            setTimeout(()=>{
                res(prodPrueba)
            },2000)
        })
        
        getItem
        .then((prodPrueba)=>{
            setProdDetail(prodPrueba)
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