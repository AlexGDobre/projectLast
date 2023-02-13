import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import {initializeApp} from 'firebase/app'
const firebaseConfig = {
  apiKey: "AIzaSyBXNUR5OwojWlOJyw9oLocg-ENvBQFMLWE",
  authDomain: "my-new-experience-3d9af.firebaseapp.com",
  projectId: "my-new-experience-3d9af",
  storageBucket: "my-new-experience-3d9af.appspot.com",
  messagingSenderId: "565388984239",
  appId: "1:565388984239:web:7cde557ed6107ef76e395a"
};
const fireApp = initializeApp(firebaseConfig)

import './assets/main.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
