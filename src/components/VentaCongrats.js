import { useState, useEffect } from 'react'
import { db } from "./firebase"
import {getDocs, query, collection , orderBy, limit } from "firebase/firestore"

const VentaCongrats = () => {

    let [ventaDetail, setVentaDetail] = useState({})

    useEffect(()=>{

        const ventasCollection = collection(db, "ventas")

        const consulta = query(ventasCollection, orderBy("date", "desc"), limit(1))

        getDocs(consulta).then(({ docs }) => {
            setVentaDetail(docs.map((doc) => (doc.data())))
        })
        .catch((error) => {
            console.log(error)
        })

    },[])

    return (
        <div className="">
            <h2>Muchas gracias por su compra!</h2>
        </div>
    )
}


export default VentaCongrats