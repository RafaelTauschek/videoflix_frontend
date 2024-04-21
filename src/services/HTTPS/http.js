import customClient from "./httpInterceptor";

export const get = (url) => {
    return customClient.get(url);
}

export const post = (url, data) => {
    return customClient.post(url).send(data);
}

export const put = (url, data) => {
    return customClient.put(url).send(data);
}

export const patch = (url, data) => {
    return customClient.patch(url).send(data);
}

export const del = (url) => {
    return customClient.delete(url);
}