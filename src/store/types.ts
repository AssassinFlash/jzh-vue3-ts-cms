import { ILoginState } from './login/types'
import { ISystemState } from './main/system/types'

// 根 state 的类型
export interface IRootState {
  name: string
}

// 告知 store 的 state 需要有哪些类型
export interface IRootWithModule {
  login: ILoginState
  system: ISystemState
}

export type IStoreType = IRootState & IRootWithModule
