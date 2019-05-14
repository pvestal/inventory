import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from '@/store/index'
import firebase from 'firebase/app'
import {currency} from '@/currency'

Vue.config.productionTip = false
Vue.filter('currency', currency)

new Vue({
  router,
  store,
  render: h => h(App),
    created() {
      firebase.initializeApp({
        apiKey: 'AIzaSyDlHEpxPJtBsnlYQCbA6Kj9Odfem8qw6hQ',
        authDomain: 'this-inventory.firebaseapp.com',
        databaseURL: 'https://this-inventory.firebaseio.com',
        projectId: 'this-inventory',
        storageBucket: 'this-inventory.appspot.com',
        messagingSenderId: '912126596591',
        appId: '1:912126596591:web:0a76deeb90831e08'
      })
    },
}).$mount('#app')
