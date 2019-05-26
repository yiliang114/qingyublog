import { getXHR } from '../common'
import axios from 'axios'
import { username, reponame, auth, accessToken } from '@/config'

export function getLabels() {
  return getXHR(`/repos/${reponame}/labels`)
}

export function getGitHubUser() {
  return getXHR(`/users/${username}`)
}

export function getUserInfo() {
  return Promise.all([getGitHubUser, getLabels])
}

export function getIssues(data) {
  let label = ''
  if (data.label && data.label.trim().length > 0) {
    label = `+label:"${data.label}"`
  }
  return getXHR(`/search/issues?q=${data.keyword}+state:open+repo:${reponame}${label}&sort=created&order=desc&page=${data.currentPage}&per_page=${data.pageSize}`, {
    headers: {
      'Accept': 'application/vnd.github.v3.html'
    }
  })
}

export function getIssue(number) {
  return getXHR(`/repos/${reponame}/issues/${number}`, {
    headers: {
      'Accept': 'application/vnd.github.v3.html'
    }
  })
}

export function getComments(url) {
  return axios.get(url, {
    headers: {
      'Accept': 'application/vnd.github.v3.html'
    }
  })
}

export function getReadme() {
  return axios.get(`https://raw.githubusercontent.com/${reponame}/master/readme.md`, {
    headers: {
      'Accept': 'application/vnd.github.v3.html'
    }
  })
}

// github 用户点击链接登录重定向页面之后，会在返回体中携带 access_token
export function getAccessToken(code) {
  const { clientID, clientSecret, proxy } = auth
  return aixos.post(proxy, {
    code,
    client_id: clientID,
    client_secret: clientSecret
  }, {
      headers: {
        'Accept': 'application/json'
      }
    })
}

// 获取 access_token 之后，需要
export function addComment(url, comment) {
  return axios.post(url, {
    body: comment
  }, {
      headers: {
        Authorization: `token ${accessToken}`
      }
    })
}

