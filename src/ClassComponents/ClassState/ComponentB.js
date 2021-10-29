import React from "react"

export default class ComponentB extends React.Component{
  render(){
    console.log(this.props)
    return(
      <div>
<h1>name:{this.props.data.name}</h1>
<h1>email:{this.props.data.email}</h1>
      </div>
    )
  }
}