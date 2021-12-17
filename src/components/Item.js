import { Card, Button} from 'react-bootstrap'

const Item = ({item}) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={item.img} />
            <Card.Body>
                <Card.Title>{item.nombre}</Card.Title>
                <Card.Text>
                    {item.detalle}
                </Card.Text>
                <h6>Precio unitario ${item.precio}</h6>
                <Button variant="primary">Ver detalle</Button>
            </Card.Body>
        </Card>
    )
}

export default Item