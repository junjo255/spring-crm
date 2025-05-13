import React from 'react';
import DashboardCard from "../../../components/dashboard/dashboardCard/DashboardCard.jsx";
import {HiTrendingUp} from "react-icons/hi";
import s from './AdminDashboard.module.scss';
import card from '../../../components/dashboard/dashboardCard/DashboardCard.module.scss';
import ProgressChart from "../../../components/dashboard/progressChart/ProgressChart.jsx";

const AdminDashboard = () => {
    return (
        <div className={s['dashboard-container']}>
            <div className={s['dashboard-row']}>
                {/* Total Sale Section */}
                <DashboardCard size="md">
                    <div className={card["card__title"]}>Total Sales</div>
                    <div className={card["card__"]}>$1,992.34</div>
                    <div className={card["card__description"]}>Your sales have surged by $723.12 from last month!</div>
                    <div className={card["sales-boxes"]}>
                        <div className={card["box"]}>
                            <div className={card["title"]}>In-Stores Sales</div>
                            <div className={card["amount"]}>$5,045.00</div>
                            <div className={card["change positive"]}>+19%</div>
                        </div>
                        <div className={card["box"]}>
                            <div className={card["title"]}>Online Sales</div>
                            <div className={card["amount"]}>$1,001.00</div>
                            <div className={card["change negative"]}>-07%</div>
                        </div>
                        <div className={card["box"]}>
                            <div className={card["title"]}>Total Sales</div>
                            <div className={card["amount"]}>$6,460.00</div>
                            <div className={card["change positive"]}>+09%</div>
                        </div>
                    </div>
                </DashboardCard>

                {/* Total Orders Section */}
                <DashboardCard size="sm">
                    <div className={s['card__title']}>Total Orders</div>
                    <p>Your order has surged by <strong>25</strong> from last month!</p>
                    <span className={s['positive']}><HiTrendingUp/> +23%</span>
                    <div className={s['chart-placeholder']}></div>
                </DashboardCard>
            </div>

            <div className={s['dashboard-row']}>
                {/* Total Sale Section */}
                <DashboardCard size="sm">
                    <ProgressChart/>
                </DashboardCard>

                {/* Total Orders Section */}
                <DashboardCard size="md">
                    <div className={s['card__title']}>Total Orders</div>
                    <p>Your order has surged by <strong>25</strong> from last month!</p>
                    <span className={s['positive']}><HiTrendingUp/>+23%</span>
                    <div className={s['chart-placeholder']}></div>
                </DashboardCard>
            </div>
        </div>
    );
};

export default AdminDashboard;
