import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import Login from "./pages/Login/Login.jsx";
import Layout from "./pages/Dashboards/Layout/Layout.jsx";
import PrivateRoute from "./router/PrivateRoute.jsx";
import Main from "./pages/Main/Main.jsx";


const App = () => {
    return (
        <>
            <Routes>

                <Route path="/" exact element={<Main/>}/>
                <Route path="/login" exact element={<Login/>}/>

                <Route element={<PrivateRoute/>}>
                    <Route path="/" element={<Navigate to="/dashboard" replace/>}/>
                    <Route path="/dashboard/*" element={<Layout/>}/>
                </Route>
            </Routes>
        </>
    )
}

export default App;


