import React, { Component } from 'react';
import Coin from './Coin';
import Heads from './heads.jpg'
import Tails from './tails.jpg'

class CoinFlip extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numFlips: 0,
            numHeads: 0,
            pick: null
        }
        this.flip = this.flip.bind(this)
    }
    static defaultProps = {
        title: "Let's Flip A Coin!",
        heads: Heads,
        tails: Tails
    }
    
    flip() {
        let randNum = Math.floor(Math.random()*2)
        if (randNum===0) {
            this.setState(
                {
                    pick: 'heads',
                    numFlips: this.state.numFlips+1,
                    numHeads: this.state.numHeads+1
                }
            )
        }else {
            this.setState(
                {
                    pick: 'tails',
                    numFlips: this.state.numFlips+1,
                }
            )
        }
    }
    render() {
        let pickedFace;
        if (this.state.pick){
            pickedFace = this.state.pick === 'heads' ? this.props.heads: this.props.tails
        }
        let total= this.state.numFlips
        let heads= this.state.numHeads
        let tails = total-heads
        return (
            <div className='CoinContainer'>
                <h1>{this.props.title}</h1>
                <Coin face={pickedFace} />
                <button onClick={this.flip}>Flip Me</button>
                <p>{`Total number of flips: ${total}. Heads: ${heads}. Tails: ${tails}`}</p>
            </div>
        );
    }
}

export default CoinFlip;