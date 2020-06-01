// TODO: Toggle between hello and goodbye

import React, { Component } from "react";

import gus from "../images/gus.jpg";
import guy from "../images/guy.jpg";

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
                <button onClick={() => this.handleClick()}>
                    Click to Toggle
                </button>
                {this.state.toggleOn ? (
                    <div>
                        <h2>Guy</h2>
                        <img src={guy} alt="" />
                    </div>
                ) : (
                    <div>
                        <h2>Gus</h2>
                        <img src={gus} alt="" />
                    </div>
                )}
                <a href="https://www.eater.com/2016/8/15/12486666/guy-fieri-without-blonde-hair">Source for Images</a>
            </div>
        );
    }
}
