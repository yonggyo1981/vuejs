import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import mix from './mixin.js'

const app = createApp(App);
app.use(router);
app.mixin(mix);
app.mount("#app");
//createApp(App).use(router).mixin(mix).mount('#app')
