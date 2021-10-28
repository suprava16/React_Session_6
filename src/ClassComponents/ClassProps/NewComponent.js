import React from "react"

export default class NewComponent extends React.Component {
  render(){
    const{name,roll,age}=this.props.value
    return(
      <div>
        <h1>New Component</h1>
        <h1>name----{this.props.value.name}</h1>
        <h1>roll={this.props.value.roll}</h1>
        <h1>age:{age}</h1>
      </div>
    )
  }
}