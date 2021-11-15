import React, { Component } from 'react'

export default class Child extends Component {
constructor(){
  super();
  this.state={
    input_text:""
  }
}
  componentDidMount(){
    console.log("hello from componentdidmount method");
  }
  componentDidUpdate(){
    console.log("hello from componentdidupdate method")
  }
componentWillUnmount(){
  console.log("hello from component will unmount method")
}
  handleChange=(event)=>{
    this.setState({
      input_text:event.target.value
    })
  }
  render() {
    console.log("render function");
    return (
      <div>
        <h1>Child Component</h1>
        <input type="text" onChange={this.handleChange}/>
      </div>
    )
  }
}
