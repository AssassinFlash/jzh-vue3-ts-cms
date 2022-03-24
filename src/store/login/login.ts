// login 模块
import { Module } from 'vuex'
import router from '@/router'
import { IRootState } from '../types'
import { ILoginState } from './types'
import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenusByRoleId
} from '@/service/login/login'
import { IAccount } from '@/service/login/type'
import localCache from '@/utils/cache'

const login: Module<ILoginState, IRootState> = {
  namespaced: true,
  state: () => {
    return {
      token: '',
      userInfo: {},
      userMenus: []
    }
  },
  mutations: {
    changeToken(state: ILoginState, token: string) {
      state.token = token
    },
    changeUserInfo(state: ILoginState, userInfo: any) {
      state.userInfo = userInfo
    },
    changeUserMenus(state: ILoginState, userMenus: any) {
      state.userMenus = userMenus
    }
  },
  getters: {},
  actions: {
    // 登录逻辑
    async accountLoginAction({ commit }, account: IAccount) {
      // 1. 实现登录逻辑
      const loginResult = await accountLoginRequest(account)
      const { id, token } = loginResult.data
      commit('changeToken', token)
      localCache.setCache('token', token)

      // 2. 请求用户信息
      const userInfoResult = await requestUserInfoById(id)
      const userInfo = userInfoResult.data
      commit('changeUserInfo', userInfo)
      localCache.setCache('userInfo', userInfo)

      // 3. 请求用户菜单
      const userMenusResult = await requestUserMenusByRoleId(userInfo.role.id)
      const userMenus = userMenusResult.data
      commit('changeUserMenus', userMenus)
      localCache.setCache('userMenus', userMenus)

      // 4. 登录成功，跳转到首页
      router.push('/main')
    },

    // 解决刷新时 vuex 数据不见的问题：从本地缓存中取出数据赋值
    loadLocalLogin({ commit }) {
      const token = localCache.getCache('token')
      const userInfo = localCache.getCache('userInfo')
      const userMenus = localCache.getCache('userMenus')

      if (token) commit('changeToken', token)
      if (userInfo) commit('changeUserInfo', userInfo)
      if (userMenus) commit('changeUserMenus', userMenus)
    }
  }
}

export default login
