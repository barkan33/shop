import React from 'react'
import FCCartItem from './FCCartItem'

export default function FCCartList(props) {

    let newItems = props.items.map((item) =>
        <FCCartItem DelFromCart={props.DelFromCart} key={item.itemId} itemId={item.itemId} title={item.title} price={item.price} />
    )
    
    return (
        <div>
            {newItems}
        </div>
    )
}
