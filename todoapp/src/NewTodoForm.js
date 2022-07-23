import React, { Component } from 'react';
import './NewTodoForm.css'

class NewTodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = { item: '' }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(evt) {
        evt.preventDefault()
        this.props.addItem(this.state)
        this.setState({item: ''})
        
    }
    
    handleChange(evt) {
        this.setState({[evt.target.name]: evt.target.value})
    }

    render() { 
        return ( 
            <form className='NewTodoForm' onSubmit={this.handleSubmit}>
                <label htmlFor='todo'>New Todo: </label>
                <input type='text' placeholder='A todo task'
                name='item'
                id='todo' 
                value={this.state.item} 
                onChange={this.handleChange}
                />
                <button>Add To List</button>
            </form>
         );
    }
}
 
export default NewTodoForm;