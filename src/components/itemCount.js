import { useState } from 'react'
import "../styles.css"
import { Card, Button, span, input, InputGroup, FormControl } from 'react-bootstrap'

const ItemCount = ({stock, initial, onAdd}) => {

    let [contador, setContador] = useState(initial)

    let [estado,setEstado] = useState(false)

    let [lista, setLista] = useState([])

    const sumar = () => {

        if(contador < stock) {
        setContador(contador + 1)
        setLista()
        }
    }

    const restar = () => {
        if(contador > 1) {
            setContador(contador - 1)
        }
    }


    return (
        <div>
            <div className="countInpu">
                <Button onClick={restar} variant="outline-secondary">
                    <span class="material-icons">remove_circle_outline</span>
                </Button>
                <InputGroup className="mb-3">
                    <InputGroup.Text className="countText" id="inputGroup-sizing-default">{contador}</InputGroup.Text>
                </InputGroup>
                <Button onClick={sumar} variant="outline-secondary">
                    <span class="material-icons">add_circle_outline</span>
                </Button>
            </div>
            <Button onClick={onAdd(contador)} variant="primary">Agregar al carrito</Button>
        </div>
    )
}

export default ItemCount