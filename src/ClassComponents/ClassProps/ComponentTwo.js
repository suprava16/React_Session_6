import React from "react";
export default class ComponentTwo extends React.Component{
  render(){
    console.log(this.props)
    return(
      <div>
        <h1>Component Two</h1>
        <h1>email:{this.props.email}</h1>
        <h1>address:{this.props.address}</h1>
        
      </div>
    )
  }
}