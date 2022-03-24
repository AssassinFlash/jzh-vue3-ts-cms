// axios 的自定义类型

import type { AxiosRequestConfig, AxiosResponse } from 'axios'

// 如果不传，默认就是 AxiosResponse 类型
export interface HYInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (error: any) => any
}

export interface HYRequestConfig extends AxiosRequestConfig {
  interceptors?: HYInterceptors
}
