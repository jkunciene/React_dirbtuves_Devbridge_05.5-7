import React from "react";
import "./Button.scss";

const Button = ({
    //propsai
    label
                }) => {
    return(
        <button className="button">
            {label}
        </button>
    );
};
export default Button;