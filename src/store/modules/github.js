import { setFuncName, generateMutations, generateGetters } from '../helper/generate'
import services from '@/services'

const DEFAULT_PAGESIZE = 5, DEFAULT_CURRENTPAGE = 1
const {
  getLabels: getLabelsService,
  getGitHubUser: getGitHubUserService,

  getIssues: getIssuesService,
  getIssue: getIssueService,

  getUserInfo: getUserInfoService,

  getReadme: getReadmeService
} = services

const state = {
  gitHubUser: null,
  labels: [],
  readmeMarkdown: null,
  issuesParams: {
    label: '',
    keyword: '',
    currentPage: DEFAULT_CURRENTPAGE,
    pageSize: DEFAULT_PAGESIZE
  },
  issues: [],
  issuesCount: 0,
  issueDetail: null,

  // 设置选中的标签
  activeLabel: null
}
const actions = {
  getUserInfo({ commit }) {
    Promise.all([getGitHubUserService(), getLabelsService()]).then(resp => {
      commit(setFuncName('gitHubUser'), resp && resp[0])
      commit(setFuncName('labels'), resp && resp[1])
    })
  },

  getReadme({ commit }) {
    getReadmeService().then(resp => {
      commit(setFuncName('readmeMarkdown'), resp.data)
    })
  },

  getIssues({ commit, state }, { keyword = '', label = '', currentPage, pageSize } = {}) {
    getIssuesService({
      keyword: keyword || state.issuesParams.keyword,
      label: label || state.issuesParams.label,
      currentPage: currentPage || state.issuesParams.currentPage,
      pageSize: pageSize || state.issuesParams.pageSize
    }).then(resp => {
      const { items, total_count } = resp
      commit(setFuncName('issues'), items)
      commit(setFuncName('issuesCount'), total_count)
    })
  },

  setIssuseParams({ commit, state, dispatch }, param) {
    commit('setIssuseParams', param)
    dispatch('getIssues')
  },

  setActiveLabel({ commit, state, dispatch }, label) {
    commit('setIssuseParams', { label: label && label.name })
    commit('setActiveLabel', label)
    dispatch('getIssues')
  }
}
const mutations = {
  ...generateMutations(state),
  setIssuseParams(state, { keyword = '', label = '', currentPage = DEFAULT_CURRENTPAGE, pageSize = DEFAULT_PAGESIZE } = {}) {
    state.issuesParams = {
      ...state.issuesParams,
      keyword,
      label,
      currentPage,
      pageSize
    }
  },
  setActiveLabel(state, label) {
    if ((state.activeLabel && label && label.name === state.activeLabel.name) || (!state.activeLabel && !label)) {
      return
    }
    state.activeLabel = label
  }
}

const getters = {
  ...generateGetters(state)
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}