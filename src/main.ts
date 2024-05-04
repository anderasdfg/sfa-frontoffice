import '~/assets/css/base.css';
import { createApp } from 'vue';
import { router } from './plugins/router';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import 'vuetify/dist/vuetify.css';
import 'vuetify/dist/vuetify.min.css';

const vuetify = createVuetify({
  components,
  directives,
});

import App from './App.vue';

const app = createApp(App);

app.use(vuetify);
app.use(router);
app.mount('#app');
