import React from 'react';
import styles from '../styles/Item.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
  }

  reduceQuantity() {
    this.setState(state => ({ quantity: this.state.quantity - 1 }));
  }

  render() {
    const unit = this.state.unit ? `(${this.state.unit})` : '';
    return (
      <div>
        <h2 className={styles.header}>{this.state.name}</h2>
        <p className={styles.text}>Quantity {unit}: {this.state.quantity}</p>
        <a href="#" onClick={this.reduceQuantity}><FontAwesomeIcon size="2x" className={styles.remove} icon="minus-square" /></a>
        <a href="#" onClick={this.increaseQuantity}><FontAwesomeIcon size="2x" className={styles.add} icon="plus-square" /></a>
      </div>
    );
  }
}