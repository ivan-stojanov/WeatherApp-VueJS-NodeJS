import { createApp } from 'vue';
import App from './App.vue';
import store from './store/index.js';
import { Quasar } from 'quasar';
import quasarUserOptions from './quasar-user-options';
import HighchartsVue from 'highcharts-vue';

const app = createApp(App);

app.use(HighchartsVue);
app.use(Quasar, quasarUserOptions);
app.use(store);

app.mount('#app');
