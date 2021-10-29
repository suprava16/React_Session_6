import React from "react"
import ComponentB from "./ComponentB";
export default class StateVariable extends React.Component{
  constructor(){
    super();
    this.state={
      name:"suprava",
      age:26,
      email:"suprava@gmail.com"
    }

  }

render(){
  console.log(this.state)
  const{name,age,email}=this.state
  return(
    <div>
        {/* <h1>name:{this.state.name}</h1>
        <h1>age:{this.state.age}</h1>
        <h1>email:{this.state.email}</h1> */}

        <h1>name:{name}</h1>
        <h1>age:{age}</h1>
        <h1>email:{email}</h1>
        <ComponentB data={this.state}/>
    </div>
  )
}
} 