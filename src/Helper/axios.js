const axios = require('axios');


const URL = 'http://localhost:5001'



let token = localStorage.getItem("token")
let tokenClient
if (token) {
    tokenClient = axios.create({
        baseURL: URL,
        headers: {
            authorization: `Bearer ${token}`
        }
    })
}

const client = axios.create({
    baseURL: URL,
    /* headers: {
        authorization: `Bearer ${token}`
    } */
})

export default tokenClient;
export { client }