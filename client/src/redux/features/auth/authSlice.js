import {createSlice} from '@reduxjs/toolkit'
import {registerUser, loginUser, loginWithGoogle} from './authThunk'

//https://github.com/dwiyatci/redux-toolkit-login-flow/blob/main/src/api/authAPI.js
// initialize userToken from local storage
const userToken = localStorage.getItem('userToken')
    ? localStorage.getItem('userToken')
    : null

const initialState = {
    userInfo: null,
    userToken,
    isAuthenticated: false,
    loading: false,
    error: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        userInfo: null,
        userToken: localStorage.getItem('userToken'),
        isAuthenticated: Boolean(localStorage.getItem('userToken')),
        loading: false,
        error: null,
    },
    reducers: { logout: state => {
            localStorage.clear()
            Object.assign(state, {
                userInfo: null,
                userToken: null,
                isAuthenticated: false,
            })
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.isAuthenticated = false;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.userInfo = action.payload.userInfo;
                state.isAuthenticated = true;
                // state.userToken = action.payload.token; // Assuming the API returns a token
                state.loading = false;
                state.error = null;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(registerUser.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(registerUser.fulfilled, (state, {payload}) => {
                state.loading = false
                state.isAuthenticated = true
                state.success = true
            })
            .addCase(registerUser.rejected, (state, {payload}) => {
                state.loading = false
                state.error = payload
            })
            .addCase(loginWithGoogle.pending, state => {
                state.loading = true
                state.error = null
            })
            .addCase(loginWithGoogle.fulfilled, (state, { payload }) => {
                state.loading = false
                state.userInfo = payload.user   // or however your backend returns user data
                state.userToken = payload.token
                state.isAuthenticated = true
            })
            .addCase(loginWithGoogle.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload || 'Google login failed'
            })
    },
});

// export const selectCurrentUser = (state) => state.auth.user;
// export const selectIsAuthenticated = (state) => {
//
//
//     console.log("STATE: ", state)
//     return state.auth.isAuthenticated;
// }

export const {
    loginFailure,
    logout
} = authSlice.actions;

export default authSlice.reducer;