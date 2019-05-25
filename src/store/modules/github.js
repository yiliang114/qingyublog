import { setFuncName, generateMutations, generateGetters } from '../helper/generate'
import services from '@/services'

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
    keyword: '',
    label: '',
    currentPage: 1,
    pageSize: 10
  },
  issues: [],
  issueDetail: null
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

  getIssues({ commit, state }, { keyword, label, currentPage, pageSize } = {}) {
    getIssuesService({
      keyword: '',
      label: '',
      currentPage: currentPage,
      pageSize: 10
    }).then(resp => {
      commit(setFuncName('readmeMarkdown'), resp.data)
    })
  },
}
const mutations = {
  ...generateMutations(state),
  // setIssuseParams()
}

const getters = {
  ...generateGetters(state),
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}