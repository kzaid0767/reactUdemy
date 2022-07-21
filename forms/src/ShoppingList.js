import React, { Component } from 'react';
import {v4 as uuid} from 'uuid'
import ShoppingListForm from './ShoppingListForm';

class ShoppingList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                { name: 'Milk', qty: '2 gallons', id: uuid() },
                { name: 'Bread', qty: '2 loaves', id: uuid() }
            ]
        }
        this.addItem = this.addItem.bind(this)
    }

    addItem(item) {  /* item is an object */
    let newItem = {...item, id: uuid()}
        this.setState(oldState => ({
            items:[...oldState.items, newItem]
        }))
    }

    renderItems() {
        return (
            <ul>
                {this.state.items.map(item => (
                    <li key={item.id}>
                        {item.name}: {item.qty}
                    </li>
                ))}
            </ul>
        )
    }

    render() {
        return (
            <div>
                <h1>Shopping List</h1>
                {this.renderItems()}
                <ShoppingListForm addItem={this.addItem}/>
            </div>
        );
    }
}

export default ShoppingList;