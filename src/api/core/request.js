import axios, {HttpStatusCode} from "axios";

const request = axios.create({
    baseURL: 'http://localhost:8081',
    timeout: 30000,
})

request.interceptors.response.use(
    response => {
        const statuses = [HttpStatusCode.Ok, HttpStatusCode.Created, HttpStatusCode.NoContent]
        if (statuses.includes(response.status)) {
            console.log('Request Success')
        }
        return response
    },
    error => {
        console.error(error)
        return Promise.reject(error);
    }
)

export default request