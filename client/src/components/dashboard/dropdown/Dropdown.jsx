import PropTypes from "prop-types";
import React from "react";
import s from './Dropdown.module.scss';

const Dropdown = ({ dropdownItems }) => {
    return (
        <div id="options" className={s['dropdown-menu']}>
            <div className={s['dropdown-content']}>
                <div className="p-4">
                    {dropdownItems.map((item, index) => (
                        <div key={index} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                            <div className={s["icon-container"]}>
                                {item.icon && React.cloneElement(item.icon, { className: "size-6 group-hover:text-indigo-600" })}
                            </div>
                            <div>
                                <a href={item.to}>
                                    {item.text}
                                    <span className="absolute inset-0" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

Dropdown.propTypes = {
    dropdownItems: PropTypes.arrayOf(
        PropTypes.shape({
            to: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            icon: PropTypes.element,
        })
    ).isRequired,
};

export default Dropdown;
