import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {postData} from "../../../api/axios.js";



// https://github.com/Bria222/React-Redux-Toolkit-Login-Register/blob/development/frontend/src/screens/RegisterScreen.js
export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: '',

        prepareHeaders: (headers, { getState }) => {
            const token = getState().auth.token
            if (token) {
                headers.set('authorization', `Bearer ${token}`)

                return headers
            }
        },
    }),
    endpoints: (build) => ({
        getDetails: build.query({
            query: () => ({
                url: 'auth/users/4',
                method: 'GET',
            }),
        }),
    }),
})

export const { useGetDetailsQuery } = authApi