import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="navigation">
            <div className="nav-link">
                <Link exact to="/">
                    Home
                </Link>
            </div>
            <div className="nav-link">
                <Link exact to="/counter">
                    Counter
                </Link>
            </div>
            <div className="nav-link">
                <Link exact to="/toggle">
                    Toggle
                </Link>
            </div>
            <div className="nav-link">
                <Link exact to="/fontsizer">
                    Font Sizer
                </Link>
            </div>
            <div className="nav-link">
                <Link exact to="/align">
                    Align
                </Link>
            </div>
            <div className="nav-link">
                <Link exact to="/showhide">
                    Show Hide
                </Link>
            </div>
            <div className="nav-link">
                <Link exact to="/clock">
                    Clock
                </Link>
            </div>
            <div className="nav-link">
                <Link exact to="/changecolor">
                    Change Color
                </Link>
            </div>
        </div>
    );
}
