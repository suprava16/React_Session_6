import React from "react"

class Welcome extends React.Component {
  render() {
    return (
      // <div>
      //   <h1>Hello from Welcome component</h1>
      //   <h2>second heading</h2>
      // </div>
      // <>
      // <h1>Hello from Welcome component</h1>
      // <h2>second heading</h2>
      // </>
      <React.Fragment>
        <h1>Hello from Welcome component</h1>
     <h2>second heading</h2>
      </React.Fragment>
    )
  }
}
export default Welcome
