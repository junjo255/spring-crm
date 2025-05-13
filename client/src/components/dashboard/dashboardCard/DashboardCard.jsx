import React, { useState } from "react";
import s from './DashboardCard.module.scss';
import PropTypes from "prop-types";

const DashboardCard = ({ size, className = "", children }) => {
    const [content, setContent] = useState("Empty");

    return (
        <div
            className={`${s['card']} ${s[`size-${size}`]} ${className}`}
            contentEditable
            suppressContentEditableWarning
            onInput={(e) => setContent(e.currentTarget.textContent)}
        >
            {children || content}
        </div>
    );
};

DashboardCard.propTypes = {
    size: PropTypes.oneOf(["small", "medium", "large"]).isRequired,
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};

export default DashboardCard;