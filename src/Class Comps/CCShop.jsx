import React, { Component } from 'react'
import FCList from '../Func Comps/FCList'
import FCCartList from '../Func Comps/FCCartList';

export default class CCShop extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        { itemId: 1, title: "HAT", price: "100", description: "Just Nice Hat", image: "hat.png" },
        { itemId: 2, title: "Tshirt", price: "50", description: "Just Nice Tshirt", image: "tshirt.png" },
        { itemId: 3, title: "Pants", price: "200", description: "Just Nice Pants", image: "pants.png" },
      ],
      cart: [],
      total: 0
    }
  }

  AddToCart = (item) => {
    let newItems = this.state.items;
    let newCart = this.state.cart;

    for (let i = 0; i < newItems.length; i++) {
      if (newItems[i].itemId === Number(item)) {
        newCart.push(newItems[i]);
        newItems.splice(i, 1);
      }
    }
    this.setState({ items: newItems, cart: newCart }, () => { this.CalcCart(); });

  };

  DelFromCart = (item) => {
    let newItems = this.state.items;
    let newCart = this.state.cart;
    for (let i = 0; i < newCart.length; i++) {
      if (newCart[i].itemId === Number(item)) {
        newItems.push(newCart[i]);
        newCart.splice(i, 1);
      }
    }
    this.setState({ items: newItems, cart: newCart }, () => { this.CalcCart(); });

  };

  CalcCart = () => {
    let newTotal = 0;
    let newCart = this.state.cart;
    for (let i = 0; i < newCart.length; i++) {
      newTotal += Number(newCart[i].price);
    }
    this.setState({ total: newTotal }, () => { console.log(this.state.total) });
  };
  
  render() {
    return (
      <div>
        <h3>Shop</h3>
        <FCList AddToCart={this.AddToCart} items={this.state.items} />
        <h3>Cart: {this.state.total}₪</h3>
        <FCCartList DelFromCart={this.DelFromCart} items={this.state.cart} />
      </div>
    )
  }
}
