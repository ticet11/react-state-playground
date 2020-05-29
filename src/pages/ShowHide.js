// button to show and hide text.

import React, { Component } from "react";

export default class ShowHide extends Component {
    constructor() {
        super();

        this.state = {
            hidden: false,
            tried: false,
        };
    }

    firstClick = () => {
        this.setState((prevState) => ({
            tried: !prevState.tried,
        }));
        this.handleClick();
    };

    handleClick = () => {
        this.setState((prevState) => ({
            hidden: !prevState.hidden,
        }));
    };

    render() {
        return (
            <div>
                <h1>Show Hide</h1>
                {this.state.hidden ? (
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <h2>What have you done?!</h2>
                        <button
                            style={{ width: "100px", margin: "5px" }}
                            onClick={() => this.handleClick()}
                        >
                            Return Guy
                        </button>
                    </div>
                ) : this.state.tried ? (
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <h2>
                            Thank goodness. Don't do that again,
                            please.
                        </h2>
                        <img
                            style={{ width: "100px" }}
                            src="https://t4.rbxcdn.com/d62e9c8c8495d3e3a6213a0788c4ae40"
                            alt="Guy Fieri welcoming you to flavor town"
                        />
                        <button
                            style={{ width: "100px", margin: "5px" }}
                            onClick={() => this.handleClick()}
                        >
                            Exile Guy
                        </button>
                    </div>
                ) : (
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <h2>Don't click that button!</h2>
                        <img
                            style={{ width: "100px" }}
                            src="https://t4.rbxcdn.com/d62e9c8c8495d3e3a6213a0788c4ae40"
                            alt="Guy Fieri welcoming you to flavor town"
                        />
                        <button
                            style={{ width: "100px", margin: "5px" }}
                            onClick={() => this.firstClick()}
                        >
                            Secret Feature
                        </button>
                    </div>
                )}
            </div>
        );
    }
}
