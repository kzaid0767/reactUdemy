import React, { Component } from 'react'

class MultipleInputs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value })
    }

    handleSubmit(evt) {
        evt.preventDefault()
        alert(`The username is: ${this.state.username}`)
        this.setState({username: ''})
    }

    render() {
        return (
            <div>
                <h1>Form Practice Multiple Inputs</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='username'>Username</label>
                    <input type='username' id='username' name='username' placeholder='username' value={this.state.username} 
                        onChange={this.handleChange} />
                    <input type='email' name='email' placeholder='email' value={this.state.email} 
                        onChange={this.handleChange} />
                    <input type='password' name='password' placeholder='password' value={this.state.password} 
                        onChange={this.handleChange} />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default MultipleInputs;