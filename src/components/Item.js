import { Card, Button} from 'react-bootstrap'
import { Link} from "react-router-dom"

const Item = ({item}) => {



    return (
        <Card className="cards" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={item.img} />
            <Card.Body>
                <Card.Title>{item.nombre}</Card.Title>
                <Card.Text>
                    {item.detalle}
                </Card.Text>
                <h6>Precio unitario ${item.precio}</h6>
                <Button variant="primary" as={Link} key={item.id} to={"/detalle/" + item.id}>Ver detalle</Button>
            </Card.Body>
        </Card>
    )
}

export default Item