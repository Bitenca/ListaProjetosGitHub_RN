import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.github.com',
    headers:{
        'User-Agent': 'non of your business'
    }
});