import axios from 'axios';

export const axiosComment = axios.create({
    baseURL: 'http://localhost:3001/',
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
    });

export const axiosPost = axios.create({
    baseURL: 'http://localhost:3000/',
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
    });

export const axiosQuery = axios.create({
    baseURL: 'http://localhost:3002/',
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
    });