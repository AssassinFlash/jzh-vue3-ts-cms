import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import store from './store'

// 导入 element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 导入全局重置样式
import 'normalize.css'
import './assets/css/index.less'

// import registerApp from './global'
import { setupStore } from './store'

const app = createApp(App)
app.use(router)
app.use(store)
app.use(ElementPlus)
// registerApp(app)
setupStore()
app.mount('#app')
