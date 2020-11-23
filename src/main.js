import Vue from 'vue'
import router from './router'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import firebase from 'firebase/app'
Vue.config.productionTip = false

//config for firebase
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3OEQkPuqdE-by6R7ShfjiQ0ETl8JPDH0",
  authDomain: "test-login-vuejs.firebaseapp.com",
  databaseURL: "https://test-login-vuejs.firebaseio.com",
  projectId: "test-login-vuejs",
  storageBucket: "test-login-vuejs.appspot.com",
  messagingSenderId: "768610845756",
  appId: "1:768610845756:web:8caa12940356ab84ad2f39",
  measurementId: "G-2WV1RJND25"
};
firebase.initializeApp(firebaseConfig)
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(router)

new Vue({
  render: h => h(App),
  router,
  components: { App }
}).$mount('#app')
