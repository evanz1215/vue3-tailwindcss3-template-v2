import router from '@/router';
import '@/style/index.css';
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './App.vue';


const app = createApp(App)

app.use(router);
app.use(createPinia())
app.mount('#app')
