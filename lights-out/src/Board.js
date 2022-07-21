import React, { Component } from "react";
import Cell from "./Cell";
import './Board.css';


/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - hasWon: boolean, true when board is all off
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

class Board extends Component {

  static defaultProps = {
    nrows: 4,
    ncols: 4,
    chanceLightStartOn: Math.random().toFixed(2)
  }

  constructor(props) {
    super(props);

    // TODO: set initial state
    this.state = {
      hasWon: false,
      board : this.createBoard()
    }
    this.flipCellsAround = this.flipCellsAround.bind(this)
    this.reset = this.reset.bind(this)
  }

  reset() {
    this.setState({
      hasWon: false,
      board : this.createBoard()
    })
  }

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */

  createBoard() {
    /* const value = Math.random() > 0.5 ? true : false */
    let board = Array(this.props.nrows).fill(null)
      .map(() => Array(this.props.ncols).fill(
        Math.random() > 0.5 ? true : false
    ))
      
    /* TODO: create array-of-arrays of true/false values */
    return board
  }

  /** handle changing a cell: update board & determine if winner */

  flipCellsAround(coord) {
    
    let { ncols, nrows } = this.props;
    let board = this.state.board;
    let hasWon = this.state.hasWon
    let [y, x] = coord.split("-").map(Number);
    
   

    function flipCell(y, x) {
      // if this coord is actually on board, flip it
      if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
        board[y][x] = !board[y][x];
      }
      
    }

    // TODO: flip this cell and the cells around it
    flipCell(y,x)
    flipCell(y-1,x)
    flipCell(y+1,x)
    flipCell(y,x+1)
    flipCell(y,x-1)
    
    let checkArr = board.flat(2)
    hasWon = checkArr.every(value=>value===false)
    console.log(hasWon)
    // win when every cell is turned off
    // TODO: determine is the game has been won

    this.setState({ board, hasWon });
    
  }

  /** Render game board or winning message. */

  render() {
    let game = this.state.board
    
    return(
      <React.Fragment>
        <div hidden={!this.state.hasWon}>
          <h1>Congratulations You Won!!!</h1>
          <button onClick={this.reset}>Click To Play Again</button>
        </div>
        <div hidden={this.state.hasWon}>
          <table className="Board">
            {game.map((row,y)=>row
              .map((el,x)=><Cell isLit={el} coord={`${y}-${x}`} flipCellsAround={this.flipCellsAround} />))}
          </table>
        </div>
      </React.Fragment>
    )

  }
}


export default Board;
