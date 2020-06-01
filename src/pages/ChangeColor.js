// import color string, change font color

import React, { Component } from "react";

export default class ChangeColor extends Component {
    constructor() {
        super();

        this.state = {
            color: "",
            value: "",
        };
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value,
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            color: this.state.value,
        });
    };

    render() {
        return (
            <div style={{ padding: "15px" }}>
                <h1>Change Color</h1>
                <form
                    onSubmit={this.handleSubmit}
                    style={{ width: "206px", paddingBottom: "5px" }}
                >
                    <input
                        name="color"
                        placeholder="#000000"
                        value={this.state.value}
                        onChange={this.handleChange}
                        type="text"
                        style={{ width: "127px", marginRight: "8px" }}
                    />
                    <button type="submit">Change</button>
                </form>
                <div
                    style={{
                        backgroundColor: this.state.color,
                        width: "200px",
                        height: "200px",
                        border: "3px solid black",
                    }}
                ></div>
            </div>
        );
    }
}
