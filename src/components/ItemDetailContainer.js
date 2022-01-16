import { useState, useEffect } from 'react'
import ItemCount from "./ItemCount"
import ItemDetail from "./ItemDetail"
import "../styles.css"
import { collection, doc, getDoc } from "firebase/firestore"
import { db } from "./firebase"
import { useParams } from "react-router-dom"   


const ItemDetailContainer = () => {

    const { id } = useParams();

    let [prodDetail, setProdDetail] = useState({})

    useEffect(()=>{

        const productosCollection = collection(db, "productos")

        const refDoc = doc(productosCollection, id)

        getDoc(refDoc)
            .then((resultado) => {
                setProdDetail(resultado.data())
            })
            .catch((error) => {

            })

    },[id])

    return (
        <div className="itemDet">
            <ItemDetail prodDetail={prodDetail}/>
        </div>
    )
}


export default ItemDetailContainer