const axios = require('axios');

let token
const URL = 'https://hoteltastic-server.vercel.app/'
let localData = localStorage.getItem("user")
if (localData) { token = JSON.parse(localData) }

const client = axios.create({
    baseURL: URL,
    headers: {
        authorization: `Bearer ${token?.token}`
    }
})

export default client;