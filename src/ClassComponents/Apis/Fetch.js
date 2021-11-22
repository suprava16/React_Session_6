import React, { Component } from 'react'

export default class Fetch extends Component {
  constructor(){
    super();
    this.state={
      user:[]
    }
  }
  componentDidMount(){
    fetch("https://reqres.in/api/users?page=2")
    .then((response)=>(response.json()))
    .then((result)=>{
      console.log(result)
      this.setState({
        user:result.data
      })
    })
  }
  render() {
    return (
      <div>
        {this.state.user.map((u,i)=>{
          return(
            <div>
            <h1 style={{backgroundColor:"blue"}} >firstname:{u.first_name}</h1>
            <img src={u.avatar} alt="image"/>
            </div>
          )
        })}
      </div>
    )
  }
}
