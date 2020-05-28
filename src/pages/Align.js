// change alignment of text

import React, { Component } from "react";

export default class Align extends Component {
    constructor() {
        super();

        this.state = {
            alignment: "",
        };
    }

    handleClick = (buttonClicked) => {
        this.setState({
            alignment: buttonClicked,
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
                <h2
                    style={{
                        width: "80vw",
                        border: "5px solid green",
                    }}
                >
                    Align me like one of your French girls.
                </h2>
                <div className="button-container">
                    <button onClick={() => this.handleClick("left")}>
                        Left
                    </button>{" "}
                    <button onClick={() => this.handleClick("center")}>
                        Center
                    </button>{" "}
                    <button onClick={() => this.handleClick("right")}>
                        Right
                    </button>
                </div>
            </div>
        );
    }
}
