import React from "react"
import Welcome from "./Welcome"
import PropsCom from "./ClassComponents/PropsCom"
export class App extends React.Component{
  render(){
    return(
      <div>
      {/* <Welcome/> */}
      <PropsCom name="suprava" roll={100} age={20}/>
      </div>
    )
  }
}