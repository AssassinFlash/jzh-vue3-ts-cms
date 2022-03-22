// axios 的封装
import axios from 'axios'
import type { AxiosInstance, AxiosResponse } from 'axios'
import type { HYInterceptors, HYRequestConfig } from './type'
import { ElLoading } from 'element-plus'
import { LoadingInstance } from 'element-plus/es/components/loading/src/loading'

export default class HYRequest {
  instance: AxiosInstance
  interceptors?: HYInterceptors
  loading?: LoadingInstance

  constructor(config: HYRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors

    // 使用 config 传来的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    // 全局拦截器
    this.instance.interceptors.request.use(
      (config: HYRequestConfig) => {
        this.loading = ElLoading.service({
          lock: true,
          background: 'rgba(0,0,0,0.5)',
          text: '正在加载中...'
        })

        return config
      },
      (error: any) => {
        console.log(error)
      }
    )
    this.instance.interceptors.response.use(
      (res: AxiosResponse) => {
        this.loading?.close()
        return res.data
      },
      (error: any) => {
        this.loading?.close()
        console.log(error)
      }
    )
  }

  // 返回 Promise 类型需要指定返回的数据类型，由于数据类型未知，设置为泛型T
  // 表示返回的数据类型为T
  request<T>(config: HYRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          resolve(res)
        })
        .catch((error: any) => {
          reject(error)
        })
    })
  }

  get<T>(config: HYRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }

  post<T>(config: HYRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }

  delete<T>(config: HYRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }

  patch<T>(config: HYRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}
