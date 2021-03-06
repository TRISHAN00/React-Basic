import React, { Component } from "react";
import "./Index.module.css";

class Form extends Component {
  state = {
    firstName: "",
    lastName: "",
    password: "",
    country: "",
    birthday: "",
    gender: "",
    agree: false,
    skills: [],
  };

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleCheckbox = (e) => {
    this.setState({
      agree: e.target.checked,
    });
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    e.target.reset();
    this.setState({
      firstName: "",
      lastName: "",
      password: "",
      country: "",
      birthday: "",
      gender: "",
      agree: false,
      skills: [],
    });
  };

  handleSkillChange = (e) => {
    if (e.target.checked) {
      this.setState({
        skills: [...this.state.skills, e.target.value],
      });
    } else {
      const skills = this.state.skills.filter(
        (skill) => skill !== e.target.value
      );
      this.setState({
        skills,
      });
    }
  };

  render() {
    const { firstName, lastName, password, country } = this.state;
    return (
      <div className="container">
        <h2>Submit Your Data...</h2>
        <form onSubmit={this.handleOnSubmit}>
          <h3>First Name:</h3>
          <input
            className="form-control"
            name="firstName"
            onChange={this.handleOnChange}
            type="text"
            id="firstName"
            value={firstName}
          />
          <h3>Last Name</h3>
          <input
            className="form-control"
            name="lastName"
            onChange={this.handleOnChange}
            type="text"
            value={lastName}
          />
          <h3>Password</h3>
          <input
            className="form-control"
            name="password"
            onChange={this.handleOnChange}
            type="password"
            value={password}
          />
          <h3>Country</h3>
          <select
            className="form-control"
            name="country"
            onChange={this.handleOnChange}
            value={country}
          >
            <option>Select Country</option>
            <option value="Bangladesh">Bangladesh</option>
            <option value="India">India</option>
            <option value="Pakistan">Pakistan</option>
            <option value="London">London</option>
            <option value="China">China</option>
          </select>
          <h3>Birthday</h3>
          <input
            className="form-control"
            name="date"
            onChange={this.handleOnChange}
            type="date"
          />
          <h3>Gender</h3>
          <input
            onChange={this.handleOnChange}
            type="radio"
            name="gender"
            value="Male"
          />
          Male
          <br />
          <input
            onChange={this.handleOnChange}
            type="radio"
            name="gender"
            value="Female"
          />
          Female
          <br />
          <input
            onChange={this.handleOnChange}
            type="radio"
            name="gender"
            value="Other"
          />
          Other
          <h3>Skills</h3>
          <input
            checked={this.state.skills.includes("Java")}
            onChange={this.handleSkillChange}
            type="checkbox"
            value="Java"
            name="skills"
          />
          JAVA
          <input
            checked={this.state.skills.includes("JavaScript")}
            onChange={this.handleSkillChange}
            type="checkbox"
            value="JavaScript"
            name="skills"
          />
          JavaScript
          <input
            checked={this.state.skills.includes("PHP")}
            onChange={this.handleSkillChange}
            type="checkbox"
            value="PHP"
            name="skills"
          />
          PHP
          <br />
          <input
            onChange={this.handleCheckbox}
            type="checkbox"
            name="agree"
            checked={this.agree}
          />
          I agree to provide all the data my self.
          <br />
          <br />
          <input className="form-control btn btn-primary" type="submit" />
        </form>
        <h1>{this.state.skills}</h1>
      </div>
    );
  }
}

export default Form;
