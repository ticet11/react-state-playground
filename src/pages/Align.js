// change alignment of text

import React, { useState } from "react";

import guyAlign from "../images/guyAlign.jpg";

export default function Align() {
    const [align, setAlign] = useState({
        width: "80vw",
        border: "5px solid green",
        display: "flex",
        justifyContent: "",
    });
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <h1>Align</h1>
            <div style={align}>
                <img
                    src={guyAlign}
                    style={{ width: "20vw" }}
                    alt=""
                />
            </div>
            <h2>Align me like one of your French girls.</h2>
            <div className="button-container">
                <button
                    onClick={() =>
                        setAlign({
                            width: "80vw",
                            border: "5px solid green",
                            display: "flex",
                            justifyContent: "flex-start",
                        })
                    }
                >
                    Left
                </button>{" "}
                <button
                    onClick={() =>
                        setAlign({
                            width: "80vw",
                            border: "5px solid green",
                            display: "flex",
                            justifyContent: "center",
                        })
                    }
                >
                    Center
                </button>{" "}
                <button
                    onClick={() =>
                        setAlign({
                            width: "80vw",
                            border: "5px solid green",
                            display: "flex",
                            justifyContent: "flex-end",
                        })
                    }
                >
                    Right
                </button>
            </div>
        </div>
    );
}
