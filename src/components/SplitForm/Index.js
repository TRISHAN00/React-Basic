import React, { Component } from "react";

class SplitForm extends Component {
  render() {
    return (
      <div className="container">
        <h2>Split Form</h2>
        <form>
          <input className="form-control" type="text" name="name" />
          <input className="form-control" type="email" name="email" />
          <input className="form-control" type="password" name="password" />
          <button type="button">Submit</button>
        </form>
      </div>
    );
  }
}

export default SplitForm;
