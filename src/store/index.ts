import { createStore, useStore as useVuexStore, Store } from 'vuex'
import { IRootState, IStoreType } from './types'
import login from './login/login'
import system from './main/system/system'

const store = createStore<IRootState>({
  modules: {
    login,
    system
  },
  state: () => {
    return {
      name: 'coderwhy'
    }
  }
})

// 每次刷新页面时都重新载入 vuex 数据
export const setupStore = () => {
  store.dispatch('login/loadLocalLogin')
}

// 自定义 useStore 函数
export const useStore: () => Store<IStoreType> = () => {
  return useVuexStore()
}

export default store
