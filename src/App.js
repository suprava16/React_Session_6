import React from "react"
import Welcome from "./Welcome"
import PropsCom from "./ClassComponents/ClassProps/PropsCom"
import ComponentTwo from "./ClassComponents/ClassProps/ComponentTwo"
import StateVariable from "./ClassComponents/ClassState/StateVariable"
import SetStateMethod from "./ClassComponents/ClassState/SetStateMethod"
import ChangeEvent from "./ClassComponents/ClassState/ChangeEvent"
import AddData from "./ClassComponents/ClassState/AddData"
import ArrayElements from "./ClassComponents/Array/ArrayElements"
export class App extends React.Component{
  render(){
    return(
      <div>
      {/* <Welcome/> */}
       {/* <PropsCom name="suprava" roll={100} age={20}/> */}
      {/* <ComponentTwo email="suprava@gmail.com" address="bbsr"/>  */}
      
      {/* <StateVariable/> */}
      {/* <SetStateMethod/> */}
      {/* <ChangeEvent/> */}
      {/* <AddData/> */}
      <ArrayElements/>
      </div>
    )
  }
}