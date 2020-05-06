import React from "react";
import "./Navigation.scss";
import Logo from "../Logo";

const Navigation = () => {
    return(
        <nav className="nav">
            <ul className="nav-list">
                <li className="nav-item">
                    <button>All movies</button>
                </li>
                <li className="nav-item">
                    <button>My movies</button>
                </li>
            </ul>
        </nav>
    );
};
export default Navigation;