import axios from 'axios'

axios.defaults.headers.common['Content-Type'] = 'application/json';

// export axios promise to be consumed

// TODO: Enable this later!
// TODO: also, enable "router.use(authenticateToken);" on the server side!
// const headers = {
//     'Authorization': `Bearer ${token}`,
//     'Content-Type': 'application/json'
// };
//
// module.exports = {
//     getData: (uri, headers = {}) => axios.get(uri, { headers }),
//     postData: (uri, data, headers = {}) => axios.post(uri, data, { headers }),
//     putData: (uri, data, headers = {}) => axios.put(uri, data, { headers })
// };
export const SESSION_TOKEN = 'session_token';

export const getToken = () => localStorage.getItem(SESSION_TOKEN);

export const headers = {
    authorization: `Bearer ${getToken()}`
};

export const getData = (uri, headers) => axios(uri, {headers});

export const postData = (uri, data, headers) => axios.post(uri, data, {headers});

export const putData = (uri, data, headers) => axios.put(uri, data, {headers});
