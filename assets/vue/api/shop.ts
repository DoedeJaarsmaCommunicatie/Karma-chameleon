import axios from 'axios';

const shopios = axios.create();
let ck = document.querySelector('meta[name="ck_token"]');
let cs = document.querySelector('meta[name="cs_token"]');

if (!ck) {
    throw 'CK not set correctly contact site admin.'
}

if (!cs) {
    throw 'CS not set correctly contact site admin.'
}

shopios.defaults.auth = {
    // @ts-ignore
    username: `ck_${ck.content}`,
    // @ts-ignore
    password: `cs_${cs.content}`,
};

shopios.defaults.baseURL = '/wp-json/wc/v3/';

export default shopios;
export { shopios }
