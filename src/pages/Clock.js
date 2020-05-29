// render a clock

import React, { Component } from "react";
import moment from "moment";

export default class Clock extends Component {
    constructor() {
        super();

        this.state = {
            time: moment().format("LTS"),
        };
    }

    componentDidMount() {
        this.interval = setInterval(
            (() =>
                this.setState({ time: moment().format("LTS") })),
            1000
        );
    };

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div>
                <h1>Clock</h1>
                <h2>{this.state.time}</h2>
            </div>
        );
    }
}
