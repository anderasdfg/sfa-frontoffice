import '@/assets/css/base.css';
import { createApp } from 'vue';
import { router } from './plugins/router';
import { pinia } from './plugins/pinia';
import { query } from '@/plugins/query';

import App from './App.vue';

const app = createApp(App);

app.use(router);
app.use(pinia);
app.use(query);
app.mount('#app');
