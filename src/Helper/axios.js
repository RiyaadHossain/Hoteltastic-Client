const axios = require('axios');


const URL = 'https://hoteltastic-server.vercel.app'



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
console.log(token);
const client = axios.create({
    baseURL: URL,
    /* headers: {
        authorization: `Bearer ${token}`
    } */
})

export default tokenClient;
export { client }