// TODO: Toggle between hello and goodbye
// Refactored to use hooks
import React, { useState } from "react";

import gus from "../images/gus.jpg";
import guy from "../images/guy.jpg";

export default function Toggle() {
    const [toggleOn, setToggleOn] = useState(true);
    return (
        <div>
            <h1>Toggle</h1>
            <button onClick={() => setToggleOn(!toggleOn)}>
                Click to Toggle
            </button>
            {toggleOn ? (
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
            <a href="https://www.eater.com/2016/8/15/12486666/guy-fieri-without-blonde-hair">
                Source for Images
            </a>
        </div>
    );
}