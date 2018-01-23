import axios from 'axios';
// Example GET https://api.darksky.net/forecast/0123456789abcdef9876543210fedcba/42.3601,-71.0589

const weatherInstance = axios.create({
    baseURL: "https://api.darksky.net/forecast/d8b257f49f4ba156a2bed2a8e1cf3b78/",    
});

export default weatherInstance;