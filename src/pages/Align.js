// change alignment of text

import React, { Component } from "react";

import guyAlign from "../images/guyAlign.jpg";

export default class Align extends Component {
    constructor() {
        super();

        this.state = {
            style: {
                width: "80vw",
                border: "5px solid green",
                display: "flex",
                justifyContent: "",
            },
        };
    }

    handleClick = (buttonClicked) => {
        this.setState({
            style: {
                width: "80vw",
                border: "5px solid green",
                display: "flex",
                justifyContent: buttonClicked,
            },
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
                <h1>Align</h1>
                <div style={this.state.style}>
                    <img
                        src={guyAlign}
                        style={{ width: "20vw" }}
                        alt=""
                    />
                </div>
                <h2>Align me like one of your French girls.</h2>
                <div className="button-container">
                    <button
                        onClick={() => this.handleClick("flex-start")}
                    >
                        Left
                    </button>{" "}
                    <button
                        onClick={() => this.handleClick("center")}
                    >
                        Center
                    </button>{" "}
                    <button
                        onClick={() => this.handleClick("flex-end")}
                    >
                        Right
                    </button>
                </div>
            </div>
        );
    }
}
