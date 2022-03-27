// 从所有的路由 - 组件映射中，根据 userMenus 找到符合条件的映射，加入到routes数组中
// 随后添加到routes.main.children数组中，这就是动态添加路由
import { RouteRecordRaw } from 'vue-router'

export const mapMenusToRoutes = (userMenus: any[]) => {
  const routes: RouteRecordRaw[] = []

  // 1. 先加载所有的路由 - 组件映射
  const allRoutes: RouteRecordRaw[] = []
  const routeFiles = require.context('../router/main', true, /.ts/)
  routeFiles.keys().forEach((key) => {
    const filePath = require('../router/main' + key.split('.')[1])
    allRoutes.push(filePath.default)
  })

  // 2. 根据 userMenus，找到符合的路由组件映射，加入到routes
  // userMenus: type === 1 -> children，type === 2 -> url -> routes
  const _recurseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRoutes.find((route) => route.path === menu.url)
        if (route) routes.push(route)
      } else {
        _recurseGetRoute(menu.children)
      }
    }
  }
  _recurseGetRoute(userMenus)

  return routes
}
