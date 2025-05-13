import React from "react";

import EmployeeLayout from "./EmployeeLayout.jsx";
import AdminLayout from "./AdminLayout.jsx";
import {USERINFO} from "../../../redux/features/auth/authThunk.js";
import {Route, Routes} from "react-router-dom";
import AdminDashboard from "../Admin/AdminDashboard.jsx";
import Profile from "../../Profile.jsx";
import Calendar from "../../DashboardSubpages/Calendar/Calendar.jsx";
import EmployeeDashboard from "../Employee/EmployeeDashboard.jsx";
import Member from "../../Member.jsx";
import Order from "../../Order.jsx";
import Commission from "../../Commission.jsx";
import Settings from "../../Settings.jsx";
import Help from "../../Help.jsx";
import MyNetwork from "../../MyNetwork.jsx";
import MyCommission from "../../MyCommission.jsx";
import CommunicationCenter from "../../CommunicationCenter.jsx";
import Ticket from "../../Ticket.jsx";
import Referral from "../../Referral.jsx";


const Layout = () => {
    // const user = useSelector(selectCurrentUser);
    const user = JSON.parse(localStorage.getItem(USERINFO));

    return (
        <>
            {
                user.role === 'admin' ? (
                    <Routes>
                        <Route path="/" element={<AdminLayout/>}>
                            <Route index element={<AdminDashboard/>}/>
                            <Route path="profile" element={<Profile/>}/>
                            <Route path="calendar" element={<Calendar/>}/>
                            <Route path="settings" element={<Settings/>}/>
                            <Route path="help" element={<Help/>}/>
                        </Route>
                    </Routes>
                ) : (
                    <Routes>
                        <Route path="/" element={<EmployeeLayout/>}>
                            <Route index element={<EmployeeDashboard/>}/>
                            <Route path="calendar" element={<Calendar/>}/>
                            <Route path="member" element={<Member/>}/>
                            <Route path="order" element={<Order/>}/>
                            <Route path="commission" element={<Commission/>}/>
                            <Route path="profile" element={<Profile/>}/>
                            <Route path="ticket" element={<Ticket/>}/>
                            <Route path="referral" element={<Referral/>}/>
                            <Route path="my-network" element={<MyNetwork/>}/>
                            <Route path="my-commission" element={<MyCommission/>}/>
                            <Route path="communication-center" element={<CommunicationCenter/>}/>
                            <Route path="settings" element={<Settings/>}/>
                            <Route path="help" element={<Help/>}/>
                        </Route>
                    </Routes>
                )
            }
        </>
    )
}

export default Layout;