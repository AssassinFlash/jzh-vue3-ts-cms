// 登录请求的逻辑
import hyRequest from '..'
import { IAccount, ILoginResult } from './type'
import { IDataType } from '@/service/types'

enum LoginAPI {
  AccountLogin = '/login',
  LoginUserInfo = '/users/', // 用法：/users/1
  UserMenus = '/role/' // 用法：role/1/menu
}

export const accountLoginRequest = (account: IAccount) => {
  return hyRequest.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}

export const requestUserInfoById = (id: number) => {
  return hyRequest.get<IDataType>({
    url: LoginAPI.LoginUserInfo + id
  })
}

export const requestUserMenusByRoleId = (id: number) => {
  return hyRequest.get<IDataType>({
    url: LoginAPI.UserMenus + id + '/menu'
  })
}
