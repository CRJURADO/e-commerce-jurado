import { useState } from 'react'
import "../styles.css"
import { Button, span, InputGroup } from 'react-bootstrap'

const ItemCount = ({stock, initial, onAdd}) => {

    let [contador, setContador] = useState(initial)

    const sumar = () => {

        if(contador < stock) {
        setContador(contador + 1)
        }
    }

    const restar = () => {
        if(contador > 1) {
            setContador(contador - 1)
        }
    }

    const clickOnAdd = (contador) => {
        onAdd(contador)
    }


    return (
        <div>
            <div className="countInpu">
                <Button onClick={restar} variant="outline-secondary">
                    <span className="material-icons">remove_circle_outline</span>
                </Button>
                <InputGroup className="mb-3">
                    <InputGroup.Text className="countText" id="inputGroup-sizing-default">{contador}</InputGroup.Text>
                </InputGroup>
                <Button onClick={sumar} variant="outline-secondary">
                    <span className="material-icons">add_circle_outline</span>
                </Button>
            </div>
            <Button onClick={()=>clickOnAdd(contador)} variant="primary">Agregar al carrito</Button>
        </div>
    )
}

export default ItemCount