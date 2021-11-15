import React, { Component } from 'react'
import "./Style.css"
export default class ConditionalRendering extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      text: ""
    }
  }
  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }
  render() {

    return (
      <div>
        {/* {this.state.show===true?<h1>True statement</h1>:<h1>False statement</h1>}
        <input type="text" onChange={this.handleChange}></input>
        <button disabled={this.state.text===""?true:false}>ADD</button>

        {this.state.show===true &&
        <h1>simple if statement</h1>} */}
         
        <h1 style={{ backgroundColor: "red", color: "white", fontSize: "30px" }}>Inline Css</h1>
        
        <p >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      <h2 className="heading">Heading two</h2>
      </div>
    )
  }
}
