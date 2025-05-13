import React from 'react';
import {GoogleLogin} from 'react-google-login';
import {gapi} from 'gapi-script';
import s from "../Login.module.scss";
import { useDispatch } from 'react-redux';
import { loginWithGoogle } from '../../../redux/features/auth/authThunk.js'

const LoginViaGoogle = () => {
    const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
    const baseRedirectUri = import.meta.env.NODE_ENV === 'production' ? import.meta.env.VITE_GOOGLE_REDIRECT_URI : "http://localhost:3000/api/sessions/oauth/google";
    const dispatch = useDispatch();

    const onSuccess = (response) => dispatch(loginWithGoogle(response))

    const handleGoogleLogin = () => {
        gapi.load('client:auth2', () => {
            gapi.client.init({
                clientId: clientId,
                scope: ""
            })
        })
    }

    return (
        <GoogleLogin
            className={`${s.rounded_btn} ${s.google_login_btn}`}
            clientId={clientId}
            buttonText="Continue with Google"
            onSuccess={onSuccess}
            onFailure={() => console.error('Login failed')}
            cookiePolicy={'single_host_origin'}
            isSignedIn={false}
            redirectUri={baseRedirectUri}
            accessType={'offline'}
            onClick={handleGoogleLogin}
        />
    );
};

export default LoginViaGoogle;