import React from 'react';

import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = () => {
    const isAuthenticated = localStorage.getItem("authenticated");

    return (
        isAuthenticated ? <Outlet /> : <Navigate to='/login'/>
    )
};

export default PrivateRoute;
