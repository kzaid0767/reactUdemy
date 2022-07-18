import React, { Component } from 'react'
import './Coin.css'
class Coin extends Component {

    render() {
        let imgSrc = this.props.face
        return (
            
            <div className='Coin'>
                <img src={imgSrc}/>
            </div>
        );
    }
}

export default Coin;