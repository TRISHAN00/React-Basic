import React, { Component } from 'react';
import './Index.module.css';

class Form extends Component {
    state = {
        firstName : '',
        lastName: '',
        password: '',
        country: ''
    }

    handleOnChange = (e) => {
        [e.target.name] = [e.target.value]
    }

    render() {
        const {firstName} = this.state
        return (
            <div className='container'>
                <h2>Submit Your Data...</h2>
                <form>
                    <h3>First Name: {firstName}</h3>
                    <input onChange={this.handleOnChange} type="text" />
                    <h3>Last Name</h3>
                    <input onChange={this.handleOnChange} type="text" />
                    <h3>Password</h3>
                    <input onChange={this.handleOnChange} type="password" />
                    <h3>Country</h3>
                    <select onChange={this.handleOnChange} >
                        <option>Select Country</option>
                        <option value="Bangladesh">Bangladesh</option>
                        <option value="India">India</option>
                        <option value="Pakistan">Pakistan</option>
                        <option value="London">London</option>
                        <option value="China">China</option>
                    </select>
                    <br/>
                    <br/>
                    <input type="submit" />
                </form>
            </div>
        );
    }
}

export default Form;