import React, { Component } from 'react'

export default class ArrayElements extends Component {
  constructor(){
    super();
    this.state={
      user:["Supriya","Rima","Aman","Rahul","Rinky","Sony"]
    }
  }
  render() {
    return (
      <div>
        {this.state.user.map((item,i)=>{
          return(
            <div key={i}>
            <h1 >name:{i}-{item}</h1>
            </div>
          )
        })}
      </div>
    )
  }
}
