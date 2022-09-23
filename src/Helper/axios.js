const axios = require('axios');

let token
const URL = 'https://hoteltastic-server.vercel.app'
token = localStorage.getItem("token")
console.log(token);
const client = axios.create({
    baseURL: URL,
    headers: {
        authorization: `Bearer ${token}`
    }
})

export default client;