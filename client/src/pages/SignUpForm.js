import React, { useState } from "react";
import API from "../utils/API";


class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  // const[userInput, setUserInput] = useState({ });

  handleInputChange(e) {
    this.setState({ value: e.target.value })
    // const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  };

  handleFormSubmit(e) {
    e.preventDefault();
    if (userInput.firstName && userInput.lastName && userInput.username && userInput.password) {
      console.log("userInputsubmit", userInput);
      API.register(userInput)
        .then(res => {
          console.log('res', res)
          alert('You are now registered! Please login')
          window.location.assign('/login')
        })
        .catch(e => {
          console.log("error!", e);
        });
    }
  };

  // console.log("user input", userInput)

  render() {
    return (

      <div>
        <h1>Register</h1>
        <form>
          <div class="input-group input-group-sm mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroup-sizing-sm">First Name</span>
            </div>
            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" name="firstName" value={userInput.firstName} onChange={handleInputChange} />
          </div>
          <div class="input-group input-group-sm mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroup-sizing-sm">Last Name</span>
            </div>
            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" name="lastName" value={userInput.lastName} onChange={handleInputChange} />
          </div>
          <div class="input-group input-group-sm mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroup-sizing-sm">Email</span>
            </div>
            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" name="username" value={userInput.username} onChange={handleInputChange} />
          </div>

          <div class="input-group input-group-sm mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroup-sizing-sm">Password</span>
            </div>
            <input type="password" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" name="password" value={userInput.password} onChange={handleInputChange} />
          </div>
          <button id="registerBtn" onClick={() => this.handleFormSubmit()}>Register</button>
        </form>
      </div >
    );

  }
};

export default Register;
