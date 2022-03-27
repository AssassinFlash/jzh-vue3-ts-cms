// chat 路由和 chat component 的映射关系
const chat = () => import('@/views/main/story/chat/chat.vue')
export default {
  path: '/main/story/chat',
  name: 'chat',
  component: chat,
  children: []
}
