import React from "react"
import { useState } from "react"
import { Link} from "react-router-dom"
import { Form, Button } from 'react-bootstrap'
import { useContexto } from "./CartContext"
import { addDoc, collection , serverTimestamp} from "firebase/firestore"
import { db } from "./firebase"

const VentaForm = () => {

    const { carrito, precio_total, clear } = useContexto()
    const [thisBuyer,setThisBuyer] = useState({
        name: "",
        lastName: "",
        email: ""
    })
    

    const hacerChange = (e) => {
        setThisBuyer((prevProps) => ({
            ...prevProps,
            [e.target.name]: e.target.value
        }))
    }


    const finalizarCompra = () => {

        const ventasCollection = collection(db, "ventas")
        addDoc(ventasCollection,{
            buyer : thisBuyer  ,
            items : carrito ,
            date : serverTimestamp(),
            total : precio_total
        })
        .then((resultado)=>{
            clear()
        })
    }


    return (
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail" >
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" name="name" value={thisBuyer.name} onChange={hacerChange} placeholder="Nombre" />
                    <Form.Text className="text-muted" >
                        Ingrese su nombre
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail" >
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control type="text" name="lastName" value={thisBuyer.lastName} onChange={hacerChange} placeholder="Apellido" />
                    <Form.Text className="text-muted" >
                        Ingrese su apellido
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail" >
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" value={thisBuyer.email} onChange={hacerChange} placeholder="Enter email" />
                    <Form.Text className="text-muted" >
                        Ingrese su email
                    </Form.Text>
                </Form.Group>

                <Button onClick={()=>{finalizarCompra()}} as={Link} to="/ventaCongrats">
                    Comprar
                </Button>
            </Form>
        </div>
    )
}


export default VentaForm

