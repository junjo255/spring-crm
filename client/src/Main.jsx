import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

import App from "./App";
import store from "./redux/store";
import "./styles/global.scss";

// Make sure you have these in your .env:
// REACT_APP_AUTH0_DOMAIN=YOUR_DOMAIN
// REACT_APP_AUTH0_CLIENT_ID=YOUR_CLIENT_ID
// REACT_APP_AUTH0_AUDIENCE=YOUR_API_AUDIENCE (optional)
const domain = import.meta.env.REACT_APP_AUTH0_DOMAIN;
const clientId = import.meta.env.REACT_APP_AUTH0_CLIENT_ID;
const audience = import.meta.env.REACT_APP_AUTH0_AUDIENCE;

createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <BrowserRouter>
            <Auth0Provider
                domain={domain}
                clientId={clientId}
                authorizationParams={{
                    redirect_uri: window.location.origin + "/callback",
                    audience,
                    scope: "openid profile email",
                }}
                useRefreshTokens={true}
                cacheLocation="localstorage"
            >
                <App />
            </Auth0Provider>
        </BrowserRouter>
    </Provider>
);
