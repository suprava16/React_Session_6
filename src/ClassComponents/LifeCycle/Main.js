import React, { Component } from 'react'
import Child from "./Child"
export default class Main extends Component {
  constructor(){
    super();
    this.state={
      show:true
    }
  }
  handleClick=()=>{
    this.setState({
      show:!this.state.show
    })
  }
  render() {
    return (
      <div>
      {this.state.show===true && <Child/>}
       <button onClick={this.handleClick}>HIDE</button>
      </div>
    )
  }
}
