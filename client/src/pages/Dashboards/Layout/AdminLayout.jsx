import React from "react";
import {Outlet, useLocation} from "react-router-dom";
import styles from "./Layout.module.scss";
import Navbar, {NavbarItem} from "../../../components/dashboard/navbar/Navbar.jsx";

const AdminLayout = () => {

    const location = useLocation();
    const currentPath = location.pathname;

    // https://www.robinwieruch.de/react-router-nested-routes/
    return (
        <div className={styles['layout-container']}>

            {/* Navbar */}
            <Navbar>
                <NavbarItem
                    to="/dashboard"
                    text="Dashboard"
                    active={currentPath === '/'}
                    // dropdownItems={[
                    //     { to: "/dashboard/member", text: "Member", icon: <IoLayersOutline className="h-4 w-4"/> },
                    //     { to: "/dashboard/order", text: "Order", icon: <IoFlagSharp className="h-4 w-4"/> },
                    //     { to: "/dashboard/commission", text: "Commission", icon: <FaMoneyCheckAlt className="h-4 w-4"/> }
                    // ]}
                />
                <NavbarItem
                    to="earnings"
                    text="Earnings"
                    active={currentPath === '/earnings'}
                />
                <NavbarItem
                    to="order"
                    text="Order"
                    active={currentPath === '/order '}
                />
                <NavbarItem
                    to="calendar"
                    text="Calendar"
                    active={currentPath === '/calendar'}
                />
                <NavbarItem
                    to="tasks"
                    text="Tasks"
                    active={currentPath === '/tasks'}
                />
                <NavbarItem
                    to="reporting"
                    text="Reporting"
                    active={currentPath === '/reporting'}
                />
            </Navbar>


            {/*Content */}
            <main className={styles['main-content']}>
                <Outlet/>
            </main>
        </div>
    )
}

export default AdminLayout;