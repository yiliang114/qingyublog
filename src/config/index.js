export const username = 'yiliang114'
export const reponame = username + '/blog'

export const auth = {
  // https://github.com/settings/applications/new 
  proxy: 'https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token',
  clientID: '6d376f0e877bb9703bfe',
  clientSecret: '457ed969dc43b4410e139ea2fbf584a54c34ffe6'
}

export const accessToken = localStorage.getItem('LS_KEY_ACCESS_TOKEN')