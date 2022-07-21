import React, { Component } from 'react';

class NewBoxForm extends Component {
    constructor(props) {
        super(props);
        this.state = { width:'', height:'', color:'' }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleChange(evt) {
        this.setState({[evt.target.name]: evt.target.value})
    }

    handleSubmit(evt) {
        evt.preventDefault()
        this.props.addBox(this.state)
        this.setState({width:'', height:'', color:'' })
    }

    render() { 
        return ( 
            <form onSubmit={this.handleSubmit}>
                <label htmlFor='width' >Width: </label>
                <input
                    id='width'
                    name='width'
                    value={this.state.width}
                    onChange={this.handleChange}
                />
                <label htmlFor='height' >Height: </label>
                <input
                    id='height'
                    name='height'
                    value={this.state.height}
                    onChange={this.handleChange}
                />
                <label htmlFor='color' >Color: </label>
                <input
                    id='color'
                    name='color'
                    value={this.state.color}
                    onChange={this.handleChange}
                />
                <button>Add Box</button>
            </form>
         );
    }
}
 
export default NewBoxForm;