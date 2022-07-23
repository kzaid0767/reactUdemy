import React, { Component } from 'react';
import { v4 as uuid } from 'uuid'
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import './TodoList.css'


class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [

            ]
        }
        this.addItem = this.addItem.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
        this.editItem = this.editItem.bind(this)
        this.toggleCompletion = this.toggleCompletion.bind(this)
    }

    addItem(item) {
        let newItem = { ...item, id: uuid(), completed:false }
        this.setState(oldState => ({
            list: [...oldState.list, newItem]
        }))
    }

    toggleCompletion(id) {
        let updatedTodo = this.state.list.map(todo => {
            if(todo.id === id) {
                return {...todo, completed: !todo.completed}
            }
            return todo
        })
        this.setState({list: updatedTodo})
    
    }

    editItem(id, updatedItem) {
        let updatedTodo = this.state.list.map(todo => {
            if(todo.id === id) {
                return {...todo, item:updatedItem}
            }
            return todo
        })
        this.setState({list: updatedTodo})
    }

    deleteItem(id) {
        let newArr = this.state.list.filter(el => el.id !== id)
        this.setState({ list: newArr })
    }
    render() {
        let todoPieces = this.state.list.map(el => <Todo value={el.item}
            key={el.id}
            id={el.id}
            editItem={this.editItem}
            deleteItem={this.deleteItem}
            toggleCompletion = {this.toggleCompletion}
            completed={el.completed}
        />)
        return (
            <div className='TodoList'>
                <h1>Things Todo<span>A React.JS App</span></h1>
                <ul> {todoPieces}</ul>
                <NewTodoForm addItem={this.addItem} />
            </div>
        );
    }
}

export default TodoList;