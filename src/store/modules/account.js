import { makeAction } from '../helper/generate'

const SET_GITHUB_USER = 'SET_GITHUB_USER'
const SET_ACCESS_TOKEN = 'SET_ACCESS_TOKEN'
const SET_TOKEN_USER = 'SET_TOKEN_USER'
const LS_KEY_ACCESS_TOKEN = 'LS_KEY_ACCESS_TOKEN'

const state = {
  accessToken: localStorage.getItem(LS_KEY_ACCESS_TOKEN),  // 这个不要修改，这个不要修改，这个不要修改。当前登录用户的 GitHub AccessToken
  auth: {
    // GitHub用户被重定向回你的网站
    proxy: 'https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token', // 这个不要修改，这个不要修改，这个不要修改。
    clientID: '6d376f0e877bb9703bfe',   // 改成你在 https://github.com/settings/applications/new 新建的 OAuth application 的 Client ID
    clientSecret: '457ed969dc43b4410e139ea2fbf584a54c34ffe6'  // 改成你在 https://github.com/settings/applications/new 新建的 OAuth application 的 Client Secret
  },
  gitHubUser: null,  // 这个不要修改，这个不要修改，这个不要修改。
  gitHubUsername: 'yiliang114',  // 修改成你自己的 GitHub 账号
  copyright: '2018 - 2019',  // 修改成你自己的
  recordNumber: '浙ICP备16046652号-2',  // 修改成你自己的备案编号，如果没有备案的话就设置为 null
  // 跟显示的内容有关系
  repo: 'yiliang114/blog',  // 记录 Issue 的仓库的全名「用户名/仓库名」
  pageSize: 10,  // 博客列表每页显示多少条博客

}

const mutations = {
  [SET_GITHUB_USER](state, gitHubUser) {
    state.gitHubUser = gitHubUser
  },
  [SET_ACCESS_TOKEN](state, accessToken) {
    state.accessToken = accessToken
    localStorage.setItem(LS_KEY_ACCESS_TOKEN, accessToken)
  },
  [SET_TOKEN_USER](state, tokenUser) {
    state.tokenUser = tokenUser
  }
}

const actions = {
  setGitHubUser: makeAction(SET_GITHUB_USER),
  setAccessToken: makeAction(SET_ACCESS_TOKEN)
}

const getters = {
  gitHubUsername(state) {
    return state.gitHubUsername
  },
  copyright(state) {
    return `${state.copyright} ${state.gitHubUsername}`
  },
  recordNumber(state) {
    return state.recordNumber
  },
  repo(state) {
    return state.repo
  },
  gitHubUser(state) {
    return state.gitHubUser
  },
  showQQGroup(state) {
    return state.showQQGroup
  },
  thirdPartySite(state) {
    return state.thirdPartySite
  },
  pageSize(state) {
    return state.pageSize
  },
  auth(state) {
    return state.auth
  },
  accessToken(state) {
    return state.accessToken
  },
  loginLink(state) {
    const query = {
      client_id: state.auth.clientID,
      redirect_uri: location.href,
      scope: 'public_repo'
    }

    const queryString = Object.keys(query)
      .map(key => `${key}=${encodeURIComponent(query[key] || '')}`)
      .join('&')

    // github 登录身份校验重定向地址
    return `http://github.com/login/oauth/authorize?${queryString}`
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}
