import { useState } from 'react'
import ItemCount from "./ItemCount"
import "../styles.css"
import { Card, Button, span, input, InputGroup, FormControl } from 'react-bootstrap'


const ItemListContainer = ({nombre}) => {

    const onAdd = (contador) => {
            console.log(contador)
    }

    return (
        <div>
            <h1>Bienvenido a nuestra {nombre}!</h1>
            <div className="prodCards">
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="/papel_kraft.jpg" />
            <Card.Body>
                <Card.Title>Papel kraft</Card.Title>
                <Card.Text>
                    Papeleria utilizada para collage y manualidades.
                </Card.Text>
                <h6>Precio unitario $450</h6>
                <ItemCount stock={6} initial={1} onAdd={onAdd}/>
            </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="/stickers_griegos.jpg" />
            <Card.Body>
                <Card.Title>Stickers griegos</Card.Title>
                <Card.Text>
                    Stickers de coleccion para decorar tarjetas, agendas y mucho más.
                </Card.Text>
                <h6>Precio unitario $235</h6>
                <ItemCount stock={4} initial={1} onAdd={onAdd}/>
            </Card.Body>
            </Card>
            </div>
        </div>
    )
}

export default ItemListContainer