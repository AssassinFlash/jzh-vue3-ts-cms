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
      userCount: 0
    }
  },
  mutations: {
    changeUserList(state: ISystemState, userList: any[]) {
      state.userList = userList
    },
    changeUserCount(state: ISystemState, userCount: number) {
      state.userCount = userCount
    }
  },
  actions: {
    async getPageListAction({ commit }, payload: any) {
      const { pageUrl, queryInfo } = payload
      const pageResult = await getPageListData(pageUrl, queryInfo)
      const { list, totalCount } = pageResult.data
      commit('changeUserList', list)
      commit('changeUserCount', totalCount)
    }
  }
}

export default system
