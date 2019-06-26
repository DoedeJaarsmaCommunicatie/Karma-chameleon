import axios from 'axios';

const shopios = axios.create();

// shopios.defaults.auth = {
//     username: 'ck_70e0212ac4a6644001a62080b0f9eaab97f8c859',
//     password: 'cs_13f1946c1ff73539fe6184c5a0c6b3091725cf39',
// };

shopios.defaults.auth = {
    username: 'ck_0d7f1d64207f2d18eb71c7d31114cee62e997d6e',
    password: 'cs_f067574a3611d07b34cde8b22914d45d797d9208'
};

shopios.defaults.baseURL = '/wp-json/wc/v3/';

export default shopios;
export { shopios }
