import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {loginUser} from "../../redux/features/auth/authThunk.js";
import logo from "../../assets/logo.svg";
import {Navigate} from "react-router-dom";
import styles from './Login.module.scss';
import LoginViaGoogle from "./oauth/google.jsx";

const Login = () => {
    const dispatch = useDispatch();
    const { user, isAuthenticated, error } = useSelector((state) => state.auth);

    const [initialState, setInitialState] = useState({
        email: '',
        password: '',
        isAdmin: false
    })

    const changeCreds = (event) => setInitialState({...initialState, [event.target.name]: event.target.value})

    const doLogin = (e) => {
        e.preventDefault();

        // dispatch(loginUser({username: initialState.email, password: initialState.password}))
        dispatch(loginUser({username: initialState.email, password: 'pass'})).unwrap();
    }

    if (isAuthenticated) {
        return <Navigate to={'/dashboard'} />
    }

    return (
        <div className={styles['login-page']}>
            <div className={styles['login-page']}>
                <div className={styles['login-container']}>
                    <div className={styles['logo-container']}>
                        <img
                            alt="SpringAirNS"
                            src={logo}
                            className={styles['logo']}
                        />
                        <h2 className={styles['title']}>
                            Sign in to your account
                        </h2>
                    </div>

                    <div className={styles['form-container']}>
                        <form action="#" method="POST" onSubmit={(event) => doLogin(event)}>
                            <div className={styles['input-group']}>
                                <label htmlFor="email" className={styles['label']}>
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={initialState.email}
                                        onChange={(event) => changeCreds(event)}
                                        required
                                        autoComplete="email"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className={styles['input-group']}>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password"
                                           className="block text-sm font-medium leading-6 text-gray-900">
                                        Password
                                    </label>
                                    <div className="text-sm">
                                        <a href="#"
                                           className="font-semibold main-blue-color hover:secondary-blue">
                                            Forgot password?
                                        </a>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        value={initialState.password}
                                        onChange={(event) => changeCreds(event)}
                                        required
                                        autoComplete="current-password"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-main-blue-color px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-secondary-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Sign in
                                </button>
                            </div>
                        </form>

                        <p className="mt-10 text-center text-sm text-gray-500">
                            Not your company?{' '}
                            <a href="#" className="font-semibold leading-6 main-blue-color hover:secondary-blue">
                                SSO
                            </a>
                        </p>
                        {/*/!* Sign in with Google *!/*/}
                        <LoginViaGoogle/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Login;
