const axios = require('axios');

const URL = 'http://localhost:5000'
const token = localStorage.getItem("token")

const client = axios.create({
    baseURL: URL,
    headers: {
        authorization: `Bearer ${token}`
    }
})

export default client;