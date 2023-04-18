import React, { useState } from "react";
import { signUp } from "../backend/signUp";

function SignUpForm() {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await signUp(email, fullName);
      setErrorMessage("");
      // redirect to success page or show success message
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div>
        <label>Full Name:</label>
        <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
      </div>
      <button type="submit">Sign Up</button>
      {errorMessage && <div>{errorMessage}</div>}
    </form>
  );
}

export default SignUpForm;