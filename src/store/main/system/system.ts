// 系统管理 system 的 store 模块
import { Module } from 'vuex'
import type { IRootState } from '@/store/types'
import type { ISystemState } from './types'
import { getPageListData } from '@/service/main/system/system'

const system: Module<ISystemState, IRootState> = {
  namespaced: true,
  state: () => {
    return {
      userList: [],
      userCount: 0,
      roleList: [],
      roleCount: 0
    }
  },
  mutations: {
    changeUserList(state: ISystemState, userList: any[]) {
      state.userList = userList
    },
    changeUserCount(state: ISystemState, userCount: number) {
      state.userCount = userCount
    },
    changeRoleList(state: ISystemState, roleList: any[]) {
      state.roleList = roleList
    },
    changeRoleCount(state: ISystemState, roleCount: number) {
      state.roleCount = roleCount
    }
  },
  getters: {
    // 返回一个函数
    pageListData(state: ISystemState) {
      return (pageName: string) => {
        switch (pageName) {
          case 'user':
            return state.userList
          case 'role':
            return state.roleList
        }
      }
    }
  },
  actions: {
    async getPageListAction({ commit }, payload: any) {
      // 1. 获取 pageUrl
      const { pageName, queryInfo } = payload
      let pageUrl = ''
      switch (pageName) {
        case 'user':
          pageUrl = '/users/list'
          break
        case 'role':
          pageUrl = '/role/list'
          break
      }

      // 2. 发送请求
      const pageResult = await getPageListData(pageUrl, queryInfo)
      const { list, totalCount } = pageResult.data

      // 3. 将数据存储到 state
      switch (pageName) {
        case 'user':
          commit('changeUserList', list)
          commit('changeUserCount', totalCount)
          break
        case 'role':
          commit('changeRoleList', list)
          commit('changeRoleCount', totalCount)
      }
    }
  }
}

export default system
