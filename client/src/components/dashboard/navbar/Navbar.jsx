import {useDispatch} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import React, {createContext, useContext, useEffect, useRef, useState} from "react";
import {logoutUser} from "../../../redux/features/auth/authThunk.js";
import s from './Navbar.module.scss';
import logo from "../../../assets/logo.svg";
import PropTypes from "prop-types";
import {RiArrowDownSLine, RiArrowUpSLine} from "react-icons/ri";
import SearchBar from "../searchbar/Searchbar.jsx";
import Notification from "../notification/Notification.jsx";
import Dropdown from "../dropdown/Dropdown.jsx";

const dropdownItems = [
    {"to": "/dashboard/member", "text": "Member"},
    {"to": "/dashboard/order", "text": "Order"},
    {"to": "/dashboard/commission", "text": "Commission"}
]

const Navbar = ({children}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const doLogout = () => {
        dispatch(logoutUser());
        navigate('/login');
    }

    const [expanded, setExpanded] = useState(true)
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const avatarRef = useRef(null);
    const [dropdownPosition, setDropdownPosition] = useState({top: 0, left: 0});

    const handleDropdownToggle = () => {
        setDropdownOpen((prevState) => !prevState);
    };

    useEffect(() => {
        if (dropdownOpen && dropdownRef.current && avatarRef.current) {
            const avatarRect = avatarRef.current.getBoundingClientRect();
            const dropdownWidth = dropdownRef.current.offsetWidth;
            const dropdownHeight = dropdownRef.current.offsetHeight;

            let top = avatarRect.bottom + 10; // 10px spacing below avatar
            let left = avatarRect.right - dropdownWidth; // Align to the right of avatar

            // Ensure dropdown doesn't overflow screen width
            if (left < 0) left = 10; // Prevent left overflow
            if (left + dropdownWidth > window.innerWidth) left = window.innerWidth - dropdownWidth - 10;

            setDropdownPosition({top, left});
        }
    }, [dropdownOpen]);

    const alphabetColors = {
        A: '#03CFC4',
        B: '#F17990',
        C: '#F26B65',
        D: '#EA449C',
        E: '#5E83DB',
        F: '#03CFC4',
        G: '#EA449C',
        H: '#5E83DB',
        I: '#F26B65',
        J: '#03CFC4',
        K: '#2BADE9',
        L: '#EA449C',
        M: '#5E83DB',
        N: '#F26B65',
        O: '#2BADE9',
        P: '#03CFC4',
        Q: '#EA449C',
        R: '#5E83DB',
        S: '#2BADE9',
        T: '#F26B65',
        U: '#EA449C',
        V: '#5E83DB',
        W: '#2BADE9',
        X: '#03CFC4',
        Y: '#2BADE9',
        Z: '#F26B65',
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 530);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (

        <nav className={s['navbar']}>
            <div className={`${s['logo-wrapper']} ${isMobile ? s['mobile-view'] : ''}`}>
                <Link
                    to={'/dashboard'}
                >
                    <img src={logo} className={`${s['logo']} ${isMobile ? s['mobile-view'] : ''}`}/>
                </Link>
            </div>

            {
                isMobile ?
                    <div className="mobile-menu">
                        <button className="menu-toggle">☰</button>
                    </div> :
                    <div className={s['center-navbar']}>
                        <NavbarContext.Provider value={{expanded}}>
                            <div className={s['item-wrapper']}>
                                <ul className={s['centered-items']}>
                                    {children}
                                </ul>
                            </div>
                        </NavbarContext.Provider>
                    </div>
            }

            <div className={s['right-navbar']}>
                <div className={s['icon-wrapper']}>
                    <SearchBar/>
                </div>
                <div className={s['icon-wrapper']}>
                    <Notification/>
                </div>
                <div
                    className={`avatar ${s['avatar-wrapper']}`}
                    onClick={handleDropdownToggle}
                    // style={{backgroundColor: `${alphabetColors[props.userInfo.firstName[0].toUpperCase()]}`}}
                    style={{backgroundColor: `${alphabetColors['J']}`}}
                >
                    J
                </div>
                {dropdownOpen && (
                    <div
                        ref={dropdownRef}
                        className={s['dropdown-container']}
                        style={{
                            top: `${dropdownPosition.top}px`,
                            left: `${dropdownPosition.left}px`,
                        }}
                    >
                        <Dropdown dropdownItems={dropdownItems}/>
                    </div>
                )}
            </div>

        </nav>
    )
}

Navbar.propTypes = {
    children: PropTypes.node.isRequired
};

export default Navbar;


const NavbarContext = createContext();

const NavbarItem = ({
                        icon, text, active, alert, to, dropdownItems
                    }) => {
    const {expanded} = useContext(NavbarContext);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleDropdownToggle = () => {
        setDropdownOpen((prevState) => !prevState);
    };

    return (
        <li>
            <Link
                to={to}
                onClick={dropdownItems ? handleDropdownToggle : undefined}
            >
                <span>
                    {text}
                </span>
            </Link>

            {
                dropdownItems && (
                    <button onClick={handleDropdownToggle} className={s['dropdown-button']}>
                        {
                            dropdownOpen ?
                                <RiArrowUpSLine className={s['dropdown-icon']}/> :
                                <RiArrowDownSLine className={s['dropdown-icon']}/>
                        }
                    </button>
                )
            }

            {
                alert && (
                    <div className={`${s['alert']} ${expanded ? '' : s['alert-expanded']}`}></div>)
            }
        </li>
    );
};

NavbarItem.propTypes = {
    icon: PropTypes.element.isRequired,
    text: PropTypes.string.isRequired,
    active: PropTypes.bool,
    alert: PropTypes.bool,
    to: PropTypes.string.isRequired,
    dropdownItems: PropTypes.arrayOf(
        PropTypes.shape({
            to: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            icon: PropTypes.element,
        })
    ),
};

export {NavbarItem};




