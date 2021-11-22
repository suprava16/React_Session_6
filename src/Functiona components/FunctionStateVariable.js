import React, { useState } from "react";

function FunctionStateVariable() {
  const [name, setName] = useState("rima")
  const [email, setEmail] = useState("rima@gmail.com")
  const [roll, setRoll] = useState(100)

  const handleClick = () => {
    setName("supriya")
    setEmail("supriya@gmail.com")
    setRoll(400)
  }
  return (
    <div>
      <h1>Functional state variables</h1>
      <h1>name:{name}</h1>
      <h1>email:{email}</h1>
      <h1>roll:{roll}</h1>
      <button onClick={handleClick}>Update</button>
    </div>
  )
}
export default FunctionStateVariable