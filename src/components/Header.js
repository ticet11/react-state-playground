import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <div className="navigation">
            <div className="nav-link">
                <NavLink exact to="/">
                    Home
                </NavLink>
            </div>
            <div className="nav-link">
                <NavLink exact to="/counter">
                    Counter
                </NavLink>
            </div>
            <div className="nav-link">
                <NavLink exact to="/toggle">
                    Toggle
                </NavLink>
            </div>
            <div className="nav-link">
                <NavLink exact to="/guysizer">
                    Guy Sizer
                </NavLink>
            </div>
            <div className="nav-link">
                <NavLink exact to="/align">
                    Align
                </NavLink>
            </div>
            <div className="nav-link">
                <NavLink exact to="/showhide">
                    Show Hide
                </NavLink>
            </div>
            <div className="nav-link">
                <NavLink exact to="/clock">
                    Clock
                </NavLink>
            </div>
            <div className="nav-link">
                <NavLink exact to="/changecolor">
                    Change Color
                </NavLink>
            </div>
        </div>
    );
}
