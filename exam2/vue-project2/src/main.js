import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import mixin from "./mixin.js";

const app = createApp(App)
app.mixin(mixin);
app.use(router)
app.mount('#app')
