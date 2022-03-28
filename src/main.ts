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

// 导入 element-plus 图标
import installIcons from './icons'

// import registerApp from './global'
import { setupStore } from './store'

const app = createApp(App)
app.use(store)
setupStore()
app.use(ElementPlus)
// registerApp(app)
app.use(router) // -> install(){} -> 获取当前path -> router.routes -> notFound
installIcons(app)
app.mount('#app')
