import { createApp } from 'vue';
import App from './App.vue';
import './scss/index.css';
import router from './components/router/router';
import checkoutStore from './store/checkout';

createApp(App).use(checkoutStore).use(router).mount('#app');
