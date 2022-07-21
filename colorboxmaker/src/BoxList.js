import React, { Component } from 'react';
import { v4 as uuid } from 'uuid'
import NewBoxForm from './NewBoxForm';
import Box from './Box';
import './BoxList.css'

class BoxList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [

            ]
        }
        this.addBox = this.addBox.bind(this)
        this.removeBox = this.removeBox.bind(this)
    }

    addBox(box) {
        let newBox = { ...box, id: uuid() }
        console.log(newBox)
        this.setState(oldState => ({
            items: [...oldState.items, newBox]
        }))
        console.log(this.state.items)
    }

    removeBox(evt) {
        console.log(evt.target.id)
        let newArr = this.state.items.filter(item => item.id !== evt.target.id)
        console.log(newArr)
        this.setState({ items: newArr })
    }

    renderBoxes() {
        return (
            <ul>
                {this.state.items.map(item => (
                    <div key={uuid()}>
                        <Box width={item.width} height={item.height} key={item.id} color={item.color} />
                        <button className='detele' id={item.id} onClick={this.removeBox}>x</button>
                    </div>
                ))}
            </ul>
        )
    }

    render() {
        return (
            <React.Fragment>
                <h1>A List of Color Boxes</h1>
                <NewBoxForm addBox={this.addBox} />
                {this.renderBoxes()}
            </React.Fragment>
        );
    }
}

export default BoxList;