import React, { Component } from 'react';
import './Index.module.css';

class Form extends Component {
    state = {
        firstName : '',
        lastName: '',
        password: '',
        country: ''
    }
    render() {
        
        return (
            <div className='container'>
                <h2>Submit Your Data...</h2>
                <form>
                    <h3>First Name</h3>
                    <input type="text" />
                    <h3>Last Name</h3>
                    <input type="text" />
                    <h3>Password</h3>
                    <input type="password" />
                    <h3>Country</h3>
                    <select>
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