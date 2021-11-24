import React from "react"
import Welcome from "./Welcome"
import PropsCom from "./ClassComponents/ClassProps/PropsCom"
import ComponentTwo from "./ClassComponents/ClassProps/ComponentTwo"
import StateVariable from "./ClassComponents/ClassState/StateVariable"
import SetStateMethod from "./ClassComponents/ClassState/SetStateMethod"
// import ChangeEvent from "./ClassComponents/ClassState/ChangeEvent"
import AddData from "./ClassComponents/ClassState/AddData"
import ArrayElements from "./ClassComponents/Array/ArrayElements"
import ArrayOfObject from "./ClassComponents/Array/ArrayOfObject"
import ConditionalRendering from "./ClassComponents/ConditionalRendering/ConditionalRendering"
import Main from "./ClassComponents/LifeCycle/Main"
import Fetch from "./ClassComponents/Apis/Fetch"
import Post_api from "./ClassComponents/Apis/Post_api"
import Greet from "./Functiona components/Greet"
import FunctionProps from "./Functiona components/FunctionProps"
import FunctionStateVariable from "./Functiona components/FunctionStateVariable"
import ChangeEvent from "./Functiona components/ChangeEvent"
import Design from "./MaterialUi/Design"
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
      {/* <ArrayElements/> */}
      {/* <ArrayOfObject/> */}
      {/* <ConditionalRendering/> */}
      {/* <Main/> */}
      {/* <Fetch/> */}
      {/* <Post_api/> */}
      {/* <Greet/> */}
      {/* <FunctionProps name="suprava" email="suprava@gmail.com"/> */}
      {/* <FunctionStateVariable/> */}
      {/* <ChangeEvent/> */}
      <Design/>
      </div>
    )
  }
}