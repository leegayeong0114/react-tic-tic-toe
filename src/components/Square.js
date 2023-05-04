import { Component } from 'react'
import './Square.css'

export default class Square extends Component {

  constructor(props) {
    super(props)
    // state 생성
    this.state = {
      value: null,
    }
  }

  render() {
    return (
      <button 
        className="square" 
        onClick={() => this.setState({ value: this.props.value})}
      >
        { this.state.value }
      </button>
    )
  }
}

