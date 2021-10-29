import React from "react"
import NewComponent from "./NewComponent"
export default class PropsCom extends React.Component{
  render(){
    console.log(this.props)
    const{name,roll,age}=this.props
    return(
      <div>
        <h1>Passing Props</h1>
        {/* <h1>Name:{this.props.name}</h1>
        <h1>Roll:{this.props.roll}</h1>
        <h1>Age:{this.props.age}</h1> */}
        <h1>Name:{name}</h1>
        <h1>Roll:{roll}</h1>
        <h1>Age:{age}</h1>
        <NewComponent value={this.props}/>
      </div>
    )
  }
}