import React from 'react';
import './Item.css';
import add from './add.svg';
import remove from './remove.svg';
export default class Item extends React.Component {
  constructor(props) {
    super(props);
    this.increaseQuantity = this.increaseQuantity.bind(this);
    this.reduceQuantity = this.reduceQuantity.bind(this);
    this.state = {
      id: props.item.id,
      name: props.item.name,
      quantity: props.item.quantity,
      unit: props.item.unit
    }
  }

  increaseQuantity() {
    this.setState(state => ({ quantity: state.quantity + 1 }));
    console.log('up');
  }

  reduceQuantity() {
    console.log('down');
    this.setState(state => ({ quantity: this.state.quantity - 1 }));
  }

  render() {
    const unit = this.state.unit ? `(${this.state.unit})` : '';
    return (
      <div>
        <h2>{this.state.name}</h2>
        <p>Quantity {unit}: {this.state.quantity}</p>
        <img className="quantity-button" src={remove} width="20" height="20" alt="add" onClick={this.reduceQuantity}/>
        <img className="quantity-button" src={add} width="20" height="20" alt="add" onClick={this.increaseQuantity}/>
      </div>
    );
  }
}