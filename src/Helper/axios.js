const axios = require('axios');

let token
const URL = 'http://localhost:5001'
let localData = localStorage.getItem("user")
if (localData) { token = JSON.parse(localData) }
const client = axios.create({
    baseURL: URL,
    headers: {
        authorization: `Bearer ${token && token.token}`
    }
})

export default client;