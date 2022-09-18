const axios = require('axios');

const URL = 'https://hoteltastic-server.vercel.app/'
// const { token } = JSON.parse(localStorage.getItem("user"))

const client = axios.create({
    baseURL: URL,
    headers: {
        // authorization: `Bearer ${token}`
    }
})

export default client;