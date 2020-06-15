//TODO: Increase/decrease font size

import React, { useState } from "react";

import guySizePic from "../images/guySize.png";

export default function GuySizer() {
    const [guySize, setGuySize] = useState(200);
    return (
        <div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <h1>Guy Sizer</h1>
                <div
                    className="buttonDiv"
                    style={{ marginBottom: "15px" }}
                >
                    <button onClick={() => setGuySize(guySize - 10)}>
                        -
                    </button>
                    <button onClick={() => setGuySize(guySize + 10)}>
                        +
                    </button>
                </div>
                <img
                    style={{ width: `${guySize}px` }}
                    src={guySizePic}
                    alt=""
                />
                <h2>guy Size is {guySize}px.</h2>
            </div>
        </div>
    );
}
