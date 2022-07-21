import React, { Component } from 'react';

class ShoppingListForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            qty:''
        }
        this.hangleChange = this.hangleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        
    }

    handleSubmit(evt) {
        evt.preventDefault()
        this.props.addItem(this.state)
        this.setState({name:'', qty:''})
    }

    hangleChange(evt) {
        this.setState({[evt.target.name]: evt.target.value})
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor='name' >Name: </label>
                <input
                    id='name'
                    name='name'
                    value={this.state.name}
                    onChange={this.hangleChange}
                />
                <label htmlFor='qty' >Quantity: </label>
                <input
                    id='qty'
                    name='qty'
                    value={this.state.qty}
                    onChange={this.hangleChange}
                />
                <button>add Item</button>
            </form>
        );
    }
}

export default ShoppingListForm;