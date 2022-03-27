// category 路由和 category component 的映射关系
const category = () => import('@/views/main/product/category/category.vue')
export default {
  path: '/main/product/category',
  name: 'category',
  component: category,
  children: []
}
