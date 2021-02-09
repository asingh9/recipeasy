import React from 'react'
import items from './data/items.json';
import styles from '../styles/Pantry.module.css';
import Item from './Item';

function Header(props) {
  return (
    <header className={styles.header}>
    <h2>{props.title}</h2>
    </header>
  )
}

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
      <div className={styles.Pantry}>
        <Header title="My Pantry" />
        <ul className={styles.items}>{itemList}</ul>
      </div>
    )
  }
}