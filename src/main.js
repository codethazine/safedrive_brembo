import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Amplify from "aws-amplify";
import AmplifyVue from '@aws-amplify/ui-vue';
import awsconfig from './aws-exports';
import "vue-material-design-icons/styles.css"
import VueGoogleMaps from '@fawmi/vue-google-maps'


Amplify.configure(awsconfig);

createApp(App).use(store).use(router).use(AmplifyVue).use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyDZW-E-sugZ5z-hYSYPWLy4ThJs-HaSnXU',
    },
}).mount('#app')
