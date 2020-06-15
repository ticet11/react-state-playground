//TODO: State value -> increase and decrease state value
// refactored to use hooks
import React, { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div style={{ padding: "10px" }}>
            <h1>Counter</h1>
            <div
                className="counter-container"
                style={{
                    width: "100px",
                    padding: "5px",
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    alignItems: "center",
                }}
            >
                <p>{count}</p>
                <div className="button-container">
                    <button onClick={() => setCount(count + 1)}>
                        Up
                    </button>
                    <button onClick={() => setCount(count - 1)}>
                        Down
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Counter;

