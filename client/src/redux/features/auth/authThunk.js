import axios from 'axios'
import {loginFailure, logout} from "./authSlice.js";
import {createAsyncThunk} from "@reduxjs/toolkit";
import { postData } from '../../../api/axios'

export const USERINFO = 'userInfo';

export const ROLE = {
    ADMIN: 'admin',
    EMPLOYEE: 'employee',
};


export const loginUser = createAsyncThunk(
    'auth/login',
    async (credentials, dispatch) => {
        try {
            const response = await fakeApiLogin(credentials);
            localStorage.setItem('authenticated', JSON.stringify(true));
            localStorage.setItem('userInfo', JSON.stringify(response.userInfo));
            return response;
        }  catch (error) {
            console.error(error)
            dispatch(loginFailure)
        }
    }
);

export const logoutUser = () => (dispatch) => {
    localStorage.removeItem('authenticated');
    localStorage.removeItem('userInfo');
    dispatch(logout());
};

const fakeApiLogin = async (credentials) => {

    // const config = {
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    // }
    //
    // const { data } = await axios.post(
    //     `${backendURL}auth/login`,
    //     { username, password },
    //     config
    // )
    //
    // // store user's token in local storage
    // localStorage.setItem('userToken', data.userToken)
    return new Promise((resolve, reject) => {
        // setTimeout(() => {
            if (credentials.username === 'admin@springairns.com' && credentials.password === 'pass') {
                resolve({ userInfo: { username: 'admin@springairns.com', name: 'Admin User', role: 'admin' } });
            } else if (credentials.username === 'employee@springairns.com' && credentials.password === 'pass') {
                resolve({ userInfo: { username: 'employee@springairns.com', name: 'Employee User', role: 'employee' } });
            } else {
                reject(new Error('Invalid credentials'));
            }
        // }, 1000);
    });
};


export const registerUser = createAsyncThunk(
    'user/register',
    async ({ firstName, email, password }, { rejectWithValue }) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            }

            await axios.post(
                // `${backendURL}/api/user/register`,
                `dummyURL/api/user/register`,
                { firstName, email, password },
                config
            )
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)

export const loginWithGoogle = createAsyncThunk(
    'auth/loginWithGoogle',
    async (googleResponse, { rejectWithValue }) => {
        try {
            // googleResponse.tokenId comes from react-google-login
            const payload = { token: googleResponse.tokenId }
            const res = await postData('/api/sessions/oauth/google', payload)
            const { token, role, userId } = res.data

            // persist them
            localStorage.setItem('userToken', token)
            localStorage.setItem('role', role)
            localStorage.setItem('userId', userId)

            return res.data
        } catch (err) {
            return rejectWithValue(err.response?.data || err.message)
        }
    }
)