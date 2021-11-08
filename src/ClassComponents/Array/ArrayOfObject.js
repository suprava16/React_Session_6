import React, { Component } from 'react'

export default class ArrayOfObject extends Component {
  constructor(){
    super();
    this.state={
      data:[
        {
          name:"suprava padhi",
          email:"suprava@gmail.com"
        },
        {
          name:"Supriya",
          email:"supriya@gmail.com"
        },
        {
          name:"Rima",
          email:"rima@gmail.com"
        },
        {
          name:"Rinky",
          email:"rinky@gmail.com"
        },
        {
          name:"Aman ",
          email:"aman@gmail.com"
        }
      ]
    }
  }
handlePush=()=>{
  var temp=this.state.data
  temp.push({
    name:"Laxman",
    email:"laxman@gmail.com"
  })
  this.setState({
    data:temp
  })
}

handlePop=()=>{
  var temp=this.state.data
  temp.pop()
  this.setState({
    data:temp
  })
}

  render() {
    return (
      <div>
          {this.state.data.map((d,i)=>(
            <div key={i}>
            <span>{d.name}</span>{" "}
            <span>{d.email}</span>{" "}
            </div>
          ))}
          <button onClick={this.handlePush}>PUSH</button>
          <button onClick={this.handlePop}>POP</button>
      </div>
    )
  }
}
