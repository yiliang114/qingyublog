import axios from 'axios'

let ax = axios.create({
  baseURL: `https://api.github.com/`,
  withCredentials: false
})

ax.interceptors.request.use(function (config) {
  return config
}, function (error) {
  return Promise.reject(error);
});

ax.interceptors.response.use(function (response) {
  const { status, statusText, data } = response
  if (status === 200 && statusText === 'OK' && data) {
    return data
  }
}, function (error) {
  console.error('response error', error)
  return Promise.reject(error);
});

function getXHR(url, params) {
  return ax.get(url, { params })
}

function postXHR(url, data) {
  return ax.post(url, { ...data })
}

export {
  getXHR,
  postXHR
}

