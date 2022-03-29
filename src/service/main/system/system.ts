// 系统管理 system 的请求函数
import hyRequest from '@/service'
import type { IDataType } from '@/service/types'

export const getPageListData = (url: string, queryInfo: any) => {
  return hyRequest.post<IDataType>({
    url,
    data: queryInfo
  })
}
