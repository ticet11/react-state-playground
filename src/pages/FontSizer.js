//TODO: Increase/decrease font size

import React, { Component } from "react";

export default class FontSizer extends Component {
    constructor() {
        super();

        this.state = {
            fontSize: 18,
        };
    }

    handleUpClick = () => {
        this.setState({
            fontSize: this.state.fontSize + 2
        })
    }

    handleDownClick = () => {
        this.setState({
            fontSize: this.state.fontSize - 2
        })
    }
    

    render() {
        return (
            <div>
                <h1>Font Sizer</h1>
                <button onClick={() => this.handleDownClick()}>-</button>
                <button onClick={() => this.handleUpClick()}>+</button>
                <h2 style={{ fontSize: this.state.fontSize }}>
                    Font Size is {this.state.fontSize}px.
                </h2>
            </div>
        );
    }
}

