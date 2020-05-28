//TODO: Increase/decrease font size

import React, { Component } from "react";

export default class FontSizer extends Component {
    constructor() {
        super();

        this.state = {
            fontSize: 18,
            value: "",
        };
    }

    handleButtonClick = (number) => {
        this.setState({
            fontSize: this.state.fontSize + number,
        });
    };

    render() {
        return (
            <div>
                <h1>Font Sizer</h1>
                <button
                    onClick={() => {
                        this.handleButtonClick(-2);
                    }}
                >
                    -
                </button>
                <button
                    onClick={() => {
                        this.handleButtonClick(2);
                    }}
                >
                    +
                </button>
                <h2 style={{ fontSize: this.state.fontSize }}>
                    Font Size is {this.state.fontSize}px.
                </h2>
            </div>
        );
    }
}
