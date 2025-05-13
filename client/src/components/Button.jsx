import React from "react";
import PropTypes from "prop-types";
import "../styles/components/button.scss";

const Button = ({ label, variant = "primary", size }) => {
    return (
        <button className={`button button--${variant} button--${size}`}>
            {label}
        </button>
    );
};

Button.propTypes = {
    label: PropTypes.string.isRequired,
    variant: PropTypes.oneOf(["primary", "secondary"]),
    size: PropTypes.oneOf(["small", "large"]),
};

export default Button;
