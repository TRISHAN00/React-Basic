import React, { Component } from 'react';

class UncontrolledForm extends Component {
    render() {
        return (
            <div className='container'>
                <h2>Basic Form</h2>
                <form className='form-group'>
                    <input className='form-control' type="text" name='name' placeholder='name' />
                    <input className='form-control' type="text" name='email' placeholder='email' />
                    <input className='form-control' type="text" name='password' placeholder='password' />
                    <input className='form-control' type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default UncontrolledForm;