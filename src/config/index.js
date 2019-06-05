export const username = 'yiliang114'
export const reponame = username + '/blog'
export const isDebug = process.env.NODE_ENV !== 'production'

export const auth = {
  // https://github.com/settings/applications/new 
  proxy: 'https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token',
  clientID: '6d376f0e877bb9703bfe',
  clientSecret: '457ed969dc43b4410e139ea2fbf584a54c34ffe6'
}

export const accessToken = localStorage.getItem('LS_KEY_ACCESS_TOKEN')

const prefix = isDebug ? '' : '/qingyu'
export const siteInfo = {
  copyright: '2018 - 2019',
  recordNumber: '浙ICP备16046652号-2',
  showQQGroup: true,
  thirdPartySite: [
    {
      img: prefix + '/img/github.png',
      url: 'https://github.com/yiliang114'
    },
    {
      img: prefix + '/img/weibo.png',
      url: 'http://weibo.com/u/3386520174'
    },
    {
      img: prefix + '/img/git.png',
      url: 'https://github.com/yiliang114/qingyublog'
    }
  ]
}

// home config
export const homeConfig = {
  blogName: '青羽',
  slogan: '你有你的计划，世界自有计划',
  homeNav: [
    {
      name: 'Blog',
      url: '/archives'
    },
    {
      name: 'Project',
      url: '/project/',
      target_blank: true
    },
    {
      name: 'Github',
      url: 'https://github.com/yiliang114',
      target_blank: true
    }
  ]
}