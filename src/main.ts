import '@/assets/css/base.css';
import { createApp } from 'vue';
import { router } from './plugins/router';
import { pinia } from './plugins/pinia';
import { query } from '@/plugins/query';
import { registerLicense } from "@syncfusion/ej2-base";

import App from './App.vue';

registerLicense("Ngo9BigBOggjHTQxAR8/V1NBaF5cXmZCf1FpRmJGdld5fUVHYVZUTXxaS00DNHVRdkdnWXpfc3VdR2lcUEJzX0o=");
const app = createApp(App);

app.use(router);
app.use(pinia);
app.use(query);
app.mount('#app');
