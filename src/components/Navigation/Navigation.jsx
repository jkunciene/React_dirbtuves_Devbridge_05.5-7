import React from "react";
import "./Navigation.scss";
import Button from "../Button";

const Navigation = () => {
    return(
        <nav className="nav">
            <ul className="nav-list">
                <li className="nav-item">
                    <Button label="All movies"/>
                </li>
                <li className="nav-item">
                   <Button label="My movies"/>
                </li>
            </ul>
        </nav>
    );
};
export default Navigation;