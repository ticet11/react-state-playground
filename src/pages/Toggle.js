// TODO: Toggle between hello and goodbye

import React, { Component } from "react";

export default class Toggle extends Component {
    constructor() {
        super();

        this.state = {
            toggleOn: true,
        };
    }

    handleClick = () => {
        this.setState({
            toggleOn: !this.state.toggleOn,
        });
    };

    render() {
        return (
            <div>
                <h1>Toggle</h1>
                <button onClick={() => this.handleClick()} >Click to Toggle</button>
                <h2>{this.state.toggleOn ? "Hello" : "Goodbye"}</h2>
            </div>
        );
    }
}
