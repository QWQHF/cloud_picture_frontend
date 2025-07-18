import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'
import './assets.ts'

import { createApp } from 'vue'
import { createPinia } from 'pinia'


const app = createApp(App)

import VueCropper from 'vue-cropper';
import 'vue-cropper/dist/index.css'

app.use(VueCropper)

app.use(Antd)
app.use(createPinia())
app.use(router)

app.mount('#app')
