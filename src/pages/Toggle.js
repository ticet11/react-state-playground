// TODO: Toggle between hello and goodbye

import React, { Component } from "react";

import gus from '../images/gus.jpg';
import guy from '../images/guy.jpg';


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
                <div>{this.state.toggleOn ? <img src={guy} alt=""/> : <img src={gus} alt=""/>}</div>
            </div>
        );
    }
}
