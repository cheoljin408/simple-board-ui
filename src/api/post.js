import request from "./core/request.js";

export const registerPost = (data) => {
    const uri = `/posts`
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    }
    return request.post(uri, data, config)
}

export const getPosts = (data) => {
    const uri = `/posts`
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
        params: data
    }
    return request.get(uri, config)
}

export const getPost = (data) => {
    const uri = `/posts/${data.postId}`
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    }
    return request.get(uri, config)
}