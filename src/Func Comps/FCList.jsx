import React from 'react'
import FCItem from './FCItem'

export default function FCList(props) {

    let newItems = props.items.map((item) => {
       return <FCItem AddToCart={props.AddToCart} key={item.itemId} itemId={item.itemId} title={item.title} price={item.price} description={item.description} image={item.image} />
    })
  return (
    <div>
        {newItems}
    </div>
  )
}
