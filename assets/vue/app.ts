import Vue from 'vue';

// @ts-ignore
const files = require.context('./', true, /\.vue$/i);
files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

Vue.prototype.$eventBus = new Vue(); // Global event bus.

new Vue().$mount('#wine-app');
