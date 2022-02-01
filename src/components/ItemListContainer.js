import { useState, useEffect } from 'react'
import ItemList from "./ItemList"
import "../styles.css"
import { useParams } from "react-router-dom"
import { db } from "./firebase"
import { getDocs, query, collection , where } from "firebase/firestore"


const ItemListContainer = ({greeting}) => {

    const {nombre} = useParams();

    let [prodLista, setProdLista] = useState([])


    useEffect(()=>{

        const productosCollection = collection(db, "productos")


        if(nombre){

            const consulta = query(productosCollection,where("tag","==",nombre))

            getDocs(consulta).then(({ docs }) => {
                setProdLista(docs.map((doc) => ({ id: doc.id, ...doc.data() })))
            })
            .catch((error) => {
                console.log(error)
            })

        }else{

            getDocs(productosCollection).then(({ docs }) => {
                setProdLista(docs.map((doc) => ({ id: doc.id, ...doc.data() })))
            })
            .catch((error) => {
                console.log(error)
            })
        }

    }, [nombre])
  

    return (
        <div>
            <h1>Bienvenido a nuestra {greeting}!</h1>
            <ItemList prodLista={prodLista}/>
        </div>
    )
}

export default ItemListContainer