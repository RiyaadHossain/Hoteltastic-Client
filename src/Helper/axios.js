const axios = require('axios');


const URL = 'http://localhost:5001'



let token = localStorage.getItem("token")

console.log(token)

const client = axios.create({
    baseURL: URL,
    headers: {
        authorization: `Bearer ${token}`
    }
})

export default client;