import React, { Component } from 'react'
import axios from 'axios';
import Card from './Card';
import './Deck.css'
const ApiUrlBase = "https://deckofcardsapi.com/api/deck"


class Deck extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            deck: null,
            drawn: [] }
        this.getCard = this.getCard.bind(this)
    }

    async getCard() {
        //make request
        let id = this.state.deck.deck_id
        try {
            let cardUrl = `${ApiUrlBase}/${id}/draw/`
            let cardRes = await axios.get(cardUrl)
            if(!cardRes.data.success) {
                throw new Error ('No more cards in deck')
            }
            let card =  cardRes.data.cards[0]
            this.setState(oldState => ({
                drawn: [
                    ...oldState.drawn, {
                        id: card.code,
                        image: card.image,
                        name: `${card.value} of ${card.suit}`
                    }
                ]
        })) 

        } catch (error) {
            alert(error)
        }
        

    }
    async componentDidMount() {
        let deck  = await axios.get(`${ApiUrlBase}/new/shuffle`)
        this.setState({deck:deck.data})
    }
    
    render() {
        const cards = this.state.drawn.map(c=>(
          <Card key={c.id} name={c.name} image={c.image} />  
        )) 
        return ( 
            <div className='Deck'>
                <h1 className='Deck-title'>🔷Card Dealer🔷</h1>
                <h2 className='Deck-title subtitle'>🔷Card Retreived From An APi Using React🔷</h2>
                <button className='Deck-btn' onClick={this.getCard}>Click To Get Card!</button>
                <div className='Deck-cardarea'>{cards}</div>
            </div>
         );
    }
}
 
export default Deck;