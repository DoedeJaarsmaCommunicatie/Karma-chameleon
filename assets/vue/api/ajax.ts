import axios from 'axios';

const ajaxios = axios.create({
    timeout: 5000
});

ajaxios.defaults.baseURL = '/wp-admin/admin-ajax.php';
export default ajaxios;
