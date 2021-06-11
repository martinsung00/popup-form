import React, { useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import Popup from "./Popup";
import "./App.css";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <div className="App">
      <header className="App-header">
        <button className="open-button" onClick={toggleModal}>
          <AiFillEdit size={150} className="icon" alt="icon" />
          <p>Sign Up</p>
        </button>
      </header>

      {isOpen && (
        <Popup
          content={
            <>
              <b style={{ fontSize: "x-large" }}>Sign Up</b>
              <p style={{ color: "darkslategray" }}>
                Please fill in this form to create an account!
              </p>
              <hr />
              <br />
              <input className="first-name" defaultValue="First Name"></input>
              <input className="last-name" defaultValue="Last Name"></input>
              <br />
              <br />
              <input className="additional" defaultValue="Email"></input>
              <br />
              <br />
              <input className="additional" defaultValue="Password"></input>
              <br />
              <br />
              <input
                className="additional"
                defaultValue="Confirm password"
              ></input>
              <br />
              <br />
              <label class="container">
                I accept the Terms of Use & Privacy Policy.
                <input
                  type="checkbox"
                  style={{ marginLeft: "0.5em", float: "left" }}
                />
              </label>
              <br />
              <br />
              <button className="form-submit">Sign Up!</button>
            </>
          }
          toggleModal={toggleModal}
        />
      )}
    </div>
  );
};

export default App;
