import React, { Component } from 'react'
import './Board.css'
import Square from './Square'

export default class Board extends Component {

  // square 호출 함수
  rederSquare(i) {
    return <Square value={i} />
  }

  render() {
    
    return (
      <div>
        <div className="status">Next Play: x</div>
        <div className="board-row">
          {this.rederSquare(0)}
          {this.rederSquare(1)}
          {this.rederSquare(2)}
        </div>
        <div className="board-row">
          {this.rederSquare(3)}
          {this.rederSquare(4)}
          {this.rederSquare(5)}
        </div>
        <div className="board-row">
          {this.rederSquare(6)}
          {this.rederSquare(7)}
          {this.rederSquare(8)}
        </div>
      </div>
    )
  }
}

