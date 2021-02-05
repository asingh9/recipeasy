import React from 'react'
import items from './data/items.json';
import './Pantry.css';
import Item from './Item';

export default class Pantry extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: props.items }
  }

  getItems() {
    const itemList = items.items;
    return itemList.map(item => <li key={item.id}><Item item={item}/></li>);
  }

  render() {
    const itemList = this.getItems();
    return (
      <div className="Pantry">
        <h2>My Pantry</h2>
        <ul className="Item-list">{itemList}</ul>
      </div>
    )
  }
}