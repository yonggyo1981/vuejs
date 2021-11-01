import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//import mixins from './lib/mixins.js';
import store from './store.js';

const app = createApp(App)
app.use(store);
//app.mixin(mixins); // 공통 mixin

/** 
app.directive('msg', {
   mounted(el, bindings) {
       alert(bindings.value);
   } 
});
*/

app.use(router)
app.mount('#app')
