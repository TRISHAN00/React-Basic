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
        this.setState({
            [e.target.name] : e.target.value
        })
        
    }

    handleOnSubmit = (e) => {
        e.preventDefault()
        console.log(this.state);
    }

    render() {
        const {firstName} = this.state
        return (
            <div className='container'>
                <h2>Submit Your Data...</h2>
                <form onSubmit={this.handleOnSubmit}>
                    <h3>First Name: {firstName}</h3>
                    <input className='form-control' name='firstName' onChange={this.handleOnChange} type="text" />
                    <h3>Last Name</h3>
                    <input className='form-control' name='lastName' onChange={this.handleOnChange} type="text" />
                    <h3>Password</h3>
                    <input className='form-control' name='password' onChange={this.handleOnChange} type="password" />
                    <h3>Country</h3>
                    <select className='form-control' name='country' onChange={this.handleOnChange} >
                        <option>Select Country</option>
                        <option value="Bangladesh">Bangladesh</option>
                        <option value="India">India</option>
                        <option value="Pakistan">Pakistan</option>
                        <option value="London">London</option>
                        <option value="China">China</option>
                    </select>
                    <br/>
                    <br/>
                    <input className='form-control' type="submit" />
                </form>
            </div>
        );
    }
}

export default Form;