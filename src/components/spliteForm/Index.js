import React, { Component } from "react";

class SplitForm extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

 
  // handleOnChange
  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(this.state);
  };

   // handleOnSubmit
   handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };


  render() {
    return (
      <div>
        <h1>Spit Form</h1>
        <form onSubmit={this.handleOnSubmit}>
          <label htmlFor="name">Name</label>
          <input
            onChange={this.handleOnChange}
            name="name"
            className="form-control"
            type="text"
            id="name"
          />
          <label htmlFor="name">Email</label>
          <input
            onChange={this.handleOnChange}
            name="email"
            className="form-control"
            type="email"
            id="email"
          />
          <label htmlFor="name">Password</label>
          <input
            onChange={this.handleOnChange}
            name="password"
            className="form-control"
            type="password"
            id="name"
          />
          <br />
          <input
            className="btn btn-success"
            type="button"
            id="name"
            value="Submit"
          />
        </form>
      </div>
    );
  }
}

export default SplitForm;
