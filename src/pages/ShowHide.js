// button to show and hide text.

import React, { Component } from "react";

export default class ShowHide extends Component {
    constructor() {
        super();

        this.state = {
            hidden: false,
        };
    }

    handleClick = () => {
        this.setState({
            hidden: !this.state.hidden,
        });
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
                            Secret Feature
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
                            onClick={() => this.handleClick()}
                        >
                            Secret Feature
                        </button>
                    </div>
                )}
            </div>
        );
    }
}
