import Vue from 'vue'
import {
  Loading,
  Message
} from 'element-ui'
import moment from 'moment'
import marked from 'marked'
import highlight from 'highlight.js'
import 'highlight.js/styles/github.css'
import 'github-markdown-css/github-markdown.css'

import App from './App'
import store from './store'
import router from './router'
import '@/assets/css/main.css'

Vue.use(Loading)
Vue.component(Message.name, Message)
Vue.prototype.$message = Message

moment.locale('zh-cn')
Vue.prototype.$moment = moment
Vue.prototype.$highlight = highlight

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  highlight: function (code) {
    return Vue.prototype.$highlight.highlightAuto(code).value
  }
})
Vue.prototype.$marked = marked

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")
