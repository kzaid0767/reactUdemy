import React, { Component } from 'react';
import './Todo.css'

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            beingEdited: this.props.value
        }
        this.handleRemove = this.handleRemove.bind(this)
        this.toggleForm = this.toggleForm.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleCompletion = this.handleCompletion.bind(this)
    }

    handleRemove() {
        this.props.deleteItem(this.props.id)
    }

    toggleForm(){
        this.setState({isEditing: !this.state.isEditing})
    }

    handleCompletion(){
        this.props.toggleCompletion(this.props.id)
    }

    handleEdit(evt){
        evt.preventDefault()
        this.props.editItem(this.props.id, this.state.beingEdited)
        this.toggleForm()
    }

    handleChange(evt) {
        this.setState({[evt.target.name]: evt.target.value})
    }

    render() {
        let result
        if(this.state.isEditing){
            result = (
                <div className='Todo'>
                    <form className='Todo-edit-form' onSubmit={this.handleEdit}>
                        <input type='text' value={this.state.beingEdited} name='beingEdited' onChange={this.handleChange}/>
                        <button>Save</button>
                    </form>
                </div>
            )
        } else {
            result = (
                <div className='Todo'>
                    <li className={this.props.completed ? 'Todo-task completed':'Todo-task'}
                    onClick={this.handleCompletion}>{this.props.value}</li>
                    <div className='Todo-buttons'>
                        <button onClick={this.toggleForm}><i className='fas fa-pen' /></button>
                        <button onClick={this.handleRemove}><i className='fas fa-trash'/></button>
                    </div>
                </div>
            )
        }
        return result;
    }
}

export default Todo;