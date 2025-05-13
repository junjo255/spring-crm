import React from "react";
import {RiDashboardLine} from "react-icons/ri";
import {IoCalendarClearOutline, IoFlagSharp, IoLayersOutline, IoSettingsSharp} from "react-icons/io5";
import {HiLifebuoy} from "react-icons/hi2";
import {Outlet, useLocation} from "react-router-dom";
import {FaMoneyCheckAlt} from "react-icons/fa";
import Navbar from "../../../components/dashboard/navbar/Navbar.jsx";
import styles from "./Layout.module.scss";

const EmployeeLayout = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <div className={styles['layout-container']}>
            {/* Navbar */}
            <Navbar/>

            {/*Content */}
            <main className={styles['main-content']}>
                {/*<Outlet/>*/}
            </main>
        </div>
    )
}

export default EmployeeLayout;