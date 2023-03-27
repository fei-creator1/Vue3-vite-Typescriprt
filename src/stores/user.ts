import { removeCookie, setCookie, getCookie } from "@/utils"
import { defineStore } from "pinia"
import { Stores } from "types/stores"
import {
  loginApi,
  logoutApi
} from "@/api/modules/login";
import {
  searchInfoByIdenCode,
  refreshToken
} from "@/api/modules/home";

export const userStore = defineStore('user', {
  state: (): Stores.user => ({
    token: getCookie('token') || '',
    name: getCookie('name') || '',
    role: getCookie('role') || '',
    accessTokenExpiration: getCookie('accessTokenExpiration') || '',
    result:{},
    showLoginModal:false,
  }),
  actions: {
    //登录
    login(account: string, password: string) {
      return new Promise((resolve, reject) => {
        loginApi({
          account, password
        }).then(res => {
          const { data, status, message } = res
          if (data) {
            this.token = `Bearer ${data.accessToken}`
            this.name = data.name
            this.role = data.role
            this.accessTokenExpiration = data.accessTokenExpiration
            setCookie('token', this.token)
            setCookie('name', this.name)
            setCookie('role', this.role)
            setCookie('accessTokenExpiration', this.accessTokenExpiration)
            resolve(message)
          } else {
            reject(message)
          }
        })
      })
    },
    //退出登录
    logout () {
      return new Promise((resolve) => {
        this.token = ``
        this.name = ``
        this.role = ``
        this.refreshToken = ``
        removeCookie('token')
        removeCookie('name')
        removeCookie('role')
        removeCookie('accessTokenExpiration')       
        resolve(true)
      })      
    },
    // 获取标识信息  
    getInfoByCode(handle: string) {
      return new Promise((resolve) => {
        searchInfoByIdenCode({handle}).then((res) => {
          this.result=res.data
          resolve(res)
        })
      })
    },
    setLoginModal(show: boolean) {
			this.showLoginModal = show;
    },
    setRefreshToken(){
      return new Promise((resolve) => {
        refreshToken().then((res) => {
          const { data} = res
          this.token = `Bearer ${data.accessToken}`
          this.accessTokenExpiration = data.accessTokenExpiration
          setCookie('token', this.token)
          setCookie('accessTokenExpiration', this.accessTokenExpiration)
          resolve(res)
        })
      })
    }
  }
})