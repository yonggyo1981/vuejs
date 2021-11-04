import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//import mixin from "./mixin.js";

const app = createApp(App)
//app.mixin(mixin);

app.directive("msg", {
    mounted() {
        alert("메세지!");
    }
});

app.use(router)
app.mount('#app')
