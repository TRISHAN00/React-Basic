import React, { Component } from "react";

class UncontrolledForm extends Component {
  handleOnSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    console.log(data);
    e.target.reset();
  };

  render() {
    return (
      <div className="container">
        <h2>Basic Form</h2>
        <form onSubmit={this.handleOnSubmit}>
          <input
            className="form-control"
            type="text"
            name="name"
            placeholder="name"
          />
          <input
            className="form-control"
            type="text"
            name="email"
            placeholder="email"
          />
          <input
            className="form-control"
            type="text"
            name="password"
            placeholder="password"
          />
          <br />
          <input
            className="form-control btn btn-success"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    );
  }
}

export default UncontrolledForm;
