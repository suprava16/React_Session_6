import React from "react";

function FunctionProps(props) {
  console.log(props)
  const { name, email } = props
  return (
    <div>
      <h1>Props example</h1>
      {/* <h1>name:{props.name}</h1>
      <h1>email:{props.email}</h1> */}

      <h1>name:{name}</h1>
      <h1>email:{email}</h1>
    </div>
  )
}
export default FunctionProps