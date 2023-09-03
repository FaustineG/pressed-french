import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

const localScore = localStorage.getItem('high-score')
if (!localScore) {
  localStorage.setItem('high-score', '0')
}
