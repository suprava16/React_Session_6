import React from "react";

export default class ChangeEvent extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: ""
    }
  }

  handleName = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handleEmail = (e) => {
    this.setState({
      email: e.target.value
    })
  }
  handlePassword = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="enter username" onChange={this.handleName} />
        <input type="email" placeholder="enter username" onChange={this.handleEmail} />
        <input type="password" placeholder="enter password" onChange={this.handlePassword} />
      
      <h1>name:{this.state.name}</h1>
      <h1>email:{this.state.email}</h1>
      <h1>password:{this.state.password}</h1>

      </div>
    )
  }
}