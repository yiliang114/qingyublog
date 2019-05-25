import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import account from './modules/account'
import issue from './modules/issue'
import github from './modules/github'

// 各子模块 store 聚合，三个参数分别为， 目录名，是否选取子目录，匹配文件的正则表达式
const files = require.context('./modules', false, /\.js$/);

const storeModules = {};
files.keys().forEach((key) => {
  if (key === './index.js') return;
  storeModules[key.replace(/(\.\/|\.js)/g, '')] = files(key).default;
});

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    account,
    issue,
    github
  },
  strict: debug,
  plugins: false ? [createLogger()] : [],
})
