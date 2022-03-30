import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import store from './store'

// 导入 element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

// 导入全局重置样式
import 'normalize.css'
import './assets/css/index.less'

// 导入 element-plus 图标
import installIcons from './icons'

import { setupStore } from './store'

// 全局注册filters
import globalRegister from './global'

const app = createApp(App)
app.use(store)
setupStore()
app.use(ElementPlus, {
  locale: zhCn
})
app.use(globalRegister)
app.use(router) // -> install(){} -> 获取当前path -> router.routes -> notFound
installIcons(app)
app.mount('#app')
