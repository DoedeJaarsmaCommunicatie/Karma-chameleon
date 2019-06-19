import axios from 'axios';

axios.defaults.auth = {
    username: 'ck_70e0212ac4a6644001a62080b0f9eaab97f8c859',
    password: 'cs_13f1946c1ff73539fe6184c5a0c6b3091725cf39',
};

axios.defaults.baseURL = '/wp-json/wc/v3/';

export default axios;
