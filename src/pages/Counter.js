//TODO: State value -> increase and decrease state value

import React, { Component } from "react";

export default class Counter extends Component {
    constructor() {
        super();

        this.state = {
            stateNum: 0,
        };
    }

    handleButtonClick = (number) => {
        this.setState({
            stateNum: this.state.stateNum + number,
        });
    };

    render() {
        return (
            <div style={{ padding: '10px' }}>
                <h1>Counter</h1>
                <div className="counter-container" style={{ width: '100px', padding: '5px', display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center' }}>
                    <h2>{this.state.stateNum}</h2>
                    <div className="button-container">
                        <button
                            onClick={() => this.handleButtonClick(1)}
                        >
                            Up
                        </button>
                        <button
                            onClick={() => this.handleButtonClick(-1)}
                        >
                            Down
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
