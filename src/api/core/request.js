import axios from "axios";

const request = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 30000,
})

request.interceptors.response.use(
    response => {
        return response
    },
    error => {
        console.error(error)
        return Promise.reject(error);
    }
)

export default request