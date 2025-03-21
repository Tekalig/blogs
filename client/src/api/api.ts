import axios from 'axios';

export const axiosComment = axios.create({
    baseURL: 'http://posts.com/',
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
    });

export const axiosPost = axios.create({
    baseURL: 'http://posts.com/',
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
    });

export const axiosQuery = axios.create({
    baseURL: 'http://posts.com/',
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
    });