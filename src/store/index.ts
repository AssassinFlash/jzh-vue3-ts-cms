import { createStore } from 'vuex'
import { IRootState } from './types'
import login from './login/login'

const store = createStore<IRootState>({
  modules: {
    login
  },
  state: () => {
    return {
      name: 'coderwhy'
    }
  }
})

export const setupStore = () => {
  store.dispatch('login/loadLocalLogin')
}

export default store
