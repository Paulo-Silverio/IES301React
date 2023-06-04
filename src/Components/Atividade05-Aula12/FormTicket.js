import { useState } from "react";

function FormTicket() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const fullName = firstName + " " + lastName;

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }
  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }
  return (
    <>
      <div className="atividades">
        <h1 className="atv"> FormTicket </h1>
        <label>
          First Name: <input value={firstName} onChange={handleFirstNameChange} />
        </label>
        <label>
          Last Name: <input value={lastName} onChange={handleLastNameChange} />
        </label>
        <p>
          Your ticket will be issued to <b>{fullName}</b>
        </p>
      </div>
    </>
  );
}

export default FormTicket;