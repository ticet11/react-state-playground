//TODO: Increase/decrease font size

import React, { Component } from "react";

import guySize from "../images/guySize.png";

export default class GuySizer extends Component {
    constructor() {
        super();

        this.state = {
            guySize: 200,
            value: "",
        };
    }

    handleButtonClick = (number) => {
        this.setState({
            guySize: this.state.guySize + number,
        });
    };

    render() {
        return (
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <h1>Guy Sizer</h1>
                <div
                    className="buttonDiv"
                    style={{ marginBottom: "15px" }}
                >
                    <button
                        onClick={() => {
                            this.handleButtonClick(-5);
                        }}
                    >
                        -
                    </button>
                    <button
                        onClick={() => {
                            this.handleButtonClick(5);
                        }}
                    >
                        +
                    </button>
                </div>
                <img
                    style={{ width: `${this.state.guySize}px` }}
                    src={guySize}
                    alt=""
                />
                <h2>guy Size is {this.state.guySize}px.</h2>
            </div>
        );
    }
}
