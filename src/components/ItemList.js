import { useState, useEffect } from 'react'
import Item from "./Item"
import "../styles.css"

const ItemList = ({prodLista, catId}) => {

    return (
        <div className="prodCards">
            {prodLista.map((item,index)=>{
                console.log(item)
                return <Item key={index} item={item}/>
            })}
        </div>
    )
}

export default ItemList