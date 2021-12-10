import React from "react"
import "../styles.css"
import { Card, Button, span, input, InputGroup, FormControl } from 'react-bootstrap'

const ItemListContainer = ({nombre}) => {
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
                <div className="countInpu">
                    <Button variant="outline-secondary">
                        <span class="material-icons">remove_circle_outline</span>
                    </Button>
                    <InputGroup className="mb-3">
                        <InputGroup.Text className="countText" id="inputGroup-sizing-default">1</InputGroup.Text>
                    </InputGroup>
                    <Button variant="outline-secondary">
                        <span class="material-icons">add_circle_outline</span>
                    </Button>
                </div>
                <Button variant="primary">Agregar al carrito</Button>
            </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="/stickers_griegos.jpg" />
            <Card.Body>
                <Card.Title>Stickers griegos</Card.Title>
                <Card.Text>
                    Stickers de coleccion para decorar tarjetas, agendas y mucho más.
                </Card.Text>
                <div className="countInpu">
                    <Button variant="outline-secondary">
                        <span class="material-icons">remove_circle_outline</span>
                    </Button>
                    <InputGroup className="mb-3">
                        <InputGroup.Text className="countText" id="inputGroup-sizing-default">1</InputGroup.Text>
                    </InputGroup>
                    <Button variant="outline-secondary">
                        <span class="material-icons">add_circle_outline</span>
                    </Button>
                </div>
                <Button variant="primary">Agregar al carrito</Button>
            </Card.Body>
            </Card>
            </div>
        </div>
    )
}

export default ItemListContainer