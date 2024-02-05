import React, { useState } from "react";
import Form from "./Form";

function App() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");

  function handleFirstNameChange (e) {
    setFirstName(e.target.value);
    console.log(e.target.value);
  }
  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
    console.log(e.target.value);
  }

  return (
    <>
      <Form firstName={firstName} lastName={lastName} handleFirstNameChange={handleFirstNameChange} handleLastNameChange={handleLastNameChange} />
    </>
  );
}

export default App;
