export const username = 'yiliang114'
export const reponame = username + '/blog'

export const auth = {
  // https://github.com/settings/applications/new 
  proxy: 'https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token',
  clientID: '6d376f0e877bb9703bfe',
  clientSecret: '457ed969dc43b4410e139ea2fbf584a54c34ffe6'
}

export const accessToken = localStorage.getItem('LS_KEY_ACCESS_TOKEN')

export const siteInfo = {
  copyright: '2018 - 2019',
  recordNumber: '浙ICP备16046652号-2',
  showQQGroup: true,
  thirdPartySite: [
    {
      img: '/static/img/github.png',
      url: 'https://github.com/yiliang114'
    },
    {
      img: '/static/img/weibo.png',
      url: 'http://weibo.com/u/3386520174'
    },
    {
      img: '/static/img/git.png',
      url: 'https://github.com/yiliang114/qingyublog'
    }
  ]
}