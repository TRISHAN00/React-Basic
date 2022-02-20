import React, { Component } from 'react';

class Timer extends Component {
    state = {
        count : 0,
    }

    intervalId = null;
    

    incrementCount = () => {
        this.setState({count : this.state.count + 1})
    }

    decrementCount = () => {
        if(this.state.count > 0) {
            this.setState({count: this.state.count - 1})
        }
    }

    startTimer = () => {
        if(this.state.count > 0 && !this.intervalId) {
            this.intervalId = setInterval(() => {
                this.setState({count : this.state.count - 1})
                if(this.state.count === 0) {
                    alert('Timer Finished')
                    clearInterval(this.intervalId)
                    this.intervalId = null
                }
            }, 1000);
        }
    }

    stopTimer = () => {
        if(this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }

    resetTimer = () => {
        if(this.state.count > 0) {
            this.setState({count : 0})
            clearInterval(this.intervalId)
            this.intervalId = null
        }
    }

    render() {
        return (
            <div className='Time-container'>
                <h2>Simple Counter</h2>
                <div className='top-count'>
                    <button className='Btn' onClick={this.decrementCount}> - </button>
                    <h1>{this.state.count}</h1>
                    <button className='Btn' onClick={this.incrementCount}> + </button>
                </div>
                <div className='control-buttons'>
                    <button onClick={this.startTimer} className='Btn'>Start</button>
                    <button onClick={this.stopTimer} className='Btn'>Stop</button>
                    <button onClick={this.resetTimer} className='Btn'>Reset</button>
                </div>
            </div>
        );
    }
}

export default Timer;