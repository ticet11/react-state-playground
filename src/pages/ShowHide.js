// button to show and hide text.

import React, { useState } from "react";

import spaceGuy from "../images/spaceGuy.png";

export default function ShowHide() {
    const [hidden, setHidden] = useState(false);
    const [tried, setTried] = useState(false);

    const firstClick = () => {
        setTried(!tried);
        handleClick();
    };

    const handleClick = () => {
        setHidden(!hidden);
    };

    return (
        <div>
            <h1>Show Hide</h1>
            {hidden ? (
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <h2>What have you done?!</h2>
                    <button
                        style={{ width: "125px", margin: "5px" }}
                        onClick={() => handleClick()}
                    >
                        Return Guy
                    </button>
                </div>
            ) : tried ? (
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <h2>
                        Thank goodness. Don't do that again, please.
                    </h2>
                    <img
                        style={{ width: "125px" }}
                        src={spaceGuy}
                        alt="Guy Fieri welcoming you to flavor town"
                    />
                    <button
                        style={{ width: "125px", margin: "5px" }}
                        onClick={() => handleClick()}
                    >
                        Exile Guy
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
                        style={{ width: "125px" }}
                        src={spaceGuy}
                        alt="Guy Fieri welcoming you to flavor town"
                    />
                    <button
                        style={{ width: "125px", margin: "5px" }}
                        onClick={() => firstClick()}
                    >
                        Secret Feature
                    </button>
                </div>
            )}
        </div>
    );
}
