import React from "react"
import Welcome from "./Welcome"
import PropsCom from "./ClassComponents/ClassProps/PropsCom"
import ComponentTwo from "./ClassComponents/ClassProps/ComponentTwo"
import StateVariable from "./ClassComponents/ClassState/StateVariable"
export class App extends React.Component{
  render(){
    return(
      <div>
      {/* <Welcome/> */}
      {/* <PropsCom name="suprava" roll={100} age={20}/>
      <ComponentTwo email="suprava@gmail.com" address="bbsr"/> */}
      <StateVariable/>
      </div>
    )
  }
}