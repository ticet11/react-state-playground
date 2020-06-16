// render a clock

import React, { useState, useEffect } from "react";
import moment from "moment";

export default function Clock() {
    const [time, setTime] = useState(moment().format("LTS"));

    useEffect(() => {
        const interval = setInterval(
            () => setTime(moment().format("LTS")),
            1000
        );
        return () => clearInterval(interval);
    });

    return (
        <div>
            <h1>Clock</h1>
            <h2>{time}</h2>
        </div>
    );
}
