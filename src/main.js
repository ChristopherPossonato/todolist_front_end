import { createApp } from 'vue';
import App from './App.vue';
import { Quasar } from 'quasar';
import quasarUserOptions from './quasar-user-options';
import router from './router';
import { Notify } from 'quasar';

createApp(App)
  .use(Quasar, { plugins: [Notify], quasarUserOptions })
  .use(router)
  .mount('#app');
