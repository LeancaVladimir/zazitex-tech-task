import { createMemoryHistory, createRouter } from 'vue-router';

import Home from '@/pages/home/Home.vue';
import Checkout from '@/pages/checkout/Checkout.vue';
import Error404 from '@/pages/error/Error404.vue';

const routes = [
  { path: '/', name: 'HomePage', component: Home },
  { path: '/checkout', name: 'CheckoutPage', component: Checkout },
  { path: '/:pathMatch(.*)*', name: '404', component: Error404 },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
