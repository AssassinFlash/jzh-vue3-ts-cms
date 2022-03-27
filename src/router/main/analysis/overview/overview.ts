// overview 路由和 overview component 的映射关系
const overview = () => import('@/views/main/analysis/overview/overview.vue')
export default {
  path: '/main/analysis/overview',
  name: 'overview',
  component: overview,
  children: []
}
