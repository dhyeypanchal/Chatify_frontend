import axios from 'axios';

const instance = axios.create({
    baseURL: "https://chatify-backend-qzwx.onrender.com"
});

export default instance;