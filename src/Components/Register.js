import React from "react";
import "./Register.css";

function Register() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <div className="reg-container">
      <h2>Registration Form</h2>
      <div className="register">
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label>Email </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              required
            ></input>
          </div>
          <div>
            <label>Contact </label>
            <input
              id="contact"
              type="tel"
              placeholder="Enter your contact number"
              required
            ></input>
          </div>
          <div>
            <label>City </label>
            <input
              id="city"
              type="text"
              placeholder="Enter your city"
              required
            ></input>
          </div>
          <div>
            <label>PassKey </label>
            <input
              type="password"
              placeholder="Set your passkey"
              required
            ></input>
          </div>
          <div>
            <button type="submit">Submit</button>
            <button type="reset">Reset</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
