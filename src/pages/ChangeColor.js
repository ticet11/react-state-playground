// import color string, change font color

import React, { useState } from "react";

export default function ChangeColor() {
    const [color, setColor] = useState('');
    const [value, setValue] = useState('')

    const handleChange = (event) => {
        setValue(event.target.value)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setColor(value)
    };

    
        return (
            <div style={{ padding: "15px" }}>
                <h1>Change Color</h1>
                <form
                    onSubmit={handleSubmit}
                    style={{ width: "206px", paddingBottom: "5px" }}
                >
                    <input
                        name="color"
                        placeholder="#000000"
                        value={value}
                        onChange={handleChange}
                        type="text"
                        style={{ width: "127px", marginRight: "8px" }}
                    />
                    <button type="submit">Change</button>
                </form>
                <div
                    style={{
                        backgroundColor: color,
                        width: "200px",
                        height: "200px",
                        border: "3px solid black",
                    }}
                ></div>
            </div>
        );

}
