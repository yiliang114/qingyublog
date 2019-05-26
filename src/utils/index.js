import { reponame, username } from '@/config'

export const isGetUserInfo = (config) => {
  return config && (config.url === `https://api.github.com/repos/${reponame}/labels` || config.url === `https://api.github.com/users/${username}`)
}

export const queryParse = (search = window.location.search) => {
  if (!search) {
    return {}
  } else {
    const queryString = search[0] === '?' ? search.substring(1) : search
    const query = {}
    queryString
      .split('&')
      .forEach(queryStr => {
        const [key, value] = queryStr.split('=')
        if (key) {
          query[decodeURIComponent(key)] = decodeURIComponent(value)
        }
      })
    return query
  }
}

export const queryStringify = query => {
  const queryString = Object.keys(query)
    .map(key => `${key}=${encodeURIComponent(query[key] || '')}`)
    .join('&')
  return queryString
}
