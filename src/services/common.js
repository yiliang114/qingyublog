import axios from 'axios'
import { isGetUserInfo as isGetUserInfoHandle } from '../utils'
import {
  Loading
} from 'element-ui'


let ax = axios.create({
  baseURL: `https://api.github.com/`,
  withCredentials: false
})

let loadingInstance

ax.interceptors.request.use((config) => {
  let isGetUserInfo = isGetUserInfoHandle(vm, config)
  if (!isGetUserInfo) {
    loadingInstance = Loading.service({
      text: '拼命加载中...'
    })
  }
  return config
}, (error) => {
  return Promise.reject(error)
})

ax.interceptors.response.use(function (response) {
  let isGetUserInfo = isGetUserInfoHandle(response.config)
  const { status, statusText, data } = response
  if (isGetUserInfo && status === 200 && statusText === 'OK' && data) {
    return data
  } else {
    setTimeout(() => {
      loadingInstance.close()
    }, 500)
    return response
  }

}, function (error) {
  let isGetUserInfo = isGetUserInfoHandle(error.config)
  if (!isGetUserInfo) {
    loadingInstance.close()

    if (error.response) {
      if (error.response.status === 401) {
        console.error('登录信息已过期，请重新登录!')
      } else if (error.response.status === 403) {
        console.error('您操作的太频繁，请稍后再试!')
      } else if (error.response.statusText) {
        console.error(error.response.status + ' ' + error.response.statusText)
      }
    }
  }

  return Promise.reject(error)
});

function getXHR(url, params) {
  return ax.get(url, { params })
}

function postXHR(url, data) {
  return ax.post(url, { ...data })
}

export {
  getXHR,
  postXHR
}

