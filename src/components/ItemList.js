import Item from "./Item"
import "../styles.css"

const ItemList = ({prodLista}) => {
    return (
        <div className="prodCards">
            {prodLista.map((item,index)=>{
                return <Item key={index} item={item}/>
            })}
        </div>
    )
}

export default ItemList