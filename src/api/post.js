import request from "./core/request.js";

export const registerPost = (data) => {
    const url = `/posts`
    const config = {
        headers: {
            'Content-Type': 'application/json'
        },
    }
    return request.post(url, data, config)
}