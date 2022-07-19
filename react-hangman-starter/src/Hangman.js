import React, { Component } from "react";
import {randomWord} from './words'
import "./Hangman.css";
import img0 from "./0.jpg";
import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import img4 from "./4.jpg";
import img5 from "./5.jpg";
import img6 from "./6.jpg";

class Hangman extends Component {
  /** by default, allow 6 guesses and use provided gallows images. */
  static defaultProps = {
    maxWrong: 6,
    images: [img0, img1, img2, img3, img4, img5, img6],
    imgAlt: ['gallow staged','head drawn','body added','first arm added', 'second arm added', 'first leg added', 'second leg added']
  };

  constructor(props) {
    super(props);
    this.state = { nWrong: 0, guessed: new Set(), answer: randomWord() };
    this.handleGuess = this.handleGuess.bind(this);
    this.rightWord = this.rightWord.bind(this)
    this.restart = this.restart.bind(this)
  }

  restart(){
    this.setState({
      nWrong:0,
      guessed: new Set(),
      answer: randomWord()
    })
  }

  rightWord() {
    return this.state.answer
      .split("")
      .map(ltr => ltr)
  }

  /** guessedWord: show current-state of word:
    if guessed letters are {a,p,e}, show "app_e" for "apple"
  */
  guessedWord() {
    return this.state.answer
      .split("")
      .map(ltr => (this.state.guessed.has(ltr) ? ltr : "_"));
  }

  /** handleGuest: handle a guessed letter:
    - add to guessed letters
    - if not in answer, increase number-wrong guesses
  */
  handleGuess(evt) {
    let ltr = evt.target.value;
    this.setState(st => ({
      guessed: st.guessed.add(ltr),
      nWrong: st.nWrong + (st.answer.includes(ltr) ? 0 : 1)
    }));
  }

  /** generateButtons: return array of letter buttons to render */
  generateButtons() {
    return "abcdefghijklmnopqrstuvwxyz".split("").map(ltr => (
      <button
        value={ltr}
        onClick={this.handleGuess}
        disabled={this.state.guessed.has(ltr)}
        key={ltr}
      >
        {ltr}
      </button>
    ));
  }

  /** render: render game */
  render() {
    const isWon = this.guessedWord().join('') === this.state.answer
    return (
      <div>
        <h1 >Hangman</h1>
        {isWon && <h3>You Won!!</h3>}
        <button onClick={this.restart} id="Hangman-restart">Restart</button>
        <div className='Hangman parent'>
          <div className="child">
          <img src={this.props.images[this.state.nWrong]} alt={this.props.imgAlt[this.state.nWrong]} />
        </div>
        <div className="child">
        <h2>Wrong Guesses: {this.state.nWrong}</h2>
        {this.state.nWrong===this.props.maxWrong? <p className="Hangman-word">Answer:{this.rightWord()}</p>: <p className='Hangman-word'>{this.guessedWord()}</p>}
        <span hidden={isWon}>{this.state.nWrong===this.props.maxWrong? <h2 className='Hangman-btns'>Game Over</h2>:<p className='Hangman-btns'>{this.generateButtons()}</p> }</span>
        
        </div>
        </div>
        {this.state.answer}
        
      </div>
      
    );
  }
}

export default Hangman;
