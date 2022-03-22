import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import store from './store'

// 导入 element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import registerApp from './global'

import hyRequest from './service'
hyRequest
  .get({
    url: '/home/multidata'
  })
  .then((res) => {
    console.log(res)
  })

const app = createApp(App)
app.use(router)
app.use(store)
app.use(ElementPlus)
registerApp(app)
app.mount('#app')
