//TODO: State value -> increase and decrease state value

import React, { Component } from 'react'

export default class Counter extends Component {
    constructor() {
        super();

        this.state = {
            stateNum: 0
        }
    }

    handleUpClick = () => {
        this.setState({
            stateNum: this.state.stateNum + 1
        })
    }

    handleDownClick = () => {
        this.setState({
            stateNum: this.state.stateNum - 1
        })
    }

    render() {
        return (
            <div>
                <h1>Counter</h1>
                <h2>{this.state.stateNum}</h2>
                <button onClick={() => this.handleUpClick()} >Up</button>
                <button onClick={() => this.handleDownClick()} >Down</button>
            </div>
        )
    }
}
