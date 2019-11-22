// import Vue from 'vue'
// import router from '../router/router'

// import tkn from './token'
// import paths from './paths'

import axios from 'axios'
// class Api {
//   constructor() {
//     const API_VERSION = process.env.VUE_APP_API_VERSION
//     let host = location.hostname + (location.port ? `:${location.port}` : '')
//     let protocol = location.protocol + '//'

//     if (
//       process.env.NODE_ENV === 'development' ||
//       process.env.VUE_APP_CHECK_SW
//     ) {
//       host = 'programs.dev.incase.work'
//       protocol = 'https:'
//     }

//     const baseURL = `${protocol}//${host}/api/${API_VERSION}/`

//     this.http = axios.create({
//       baseURL,
//     })

//     this.paths = paths

//     this._methods = {
//       get: this._get,
//       post: this._post,
//       put: this._put,
//       patch: this._patch,
//       delete: this._delete,
//     }

//     this.temp = null

//     this._addAxiosInterceptors()
//   }

//   /** Method for creating http request
//    *
//    * @param {object} opts options object
//    * @param {string} opts.name path name from the paths folder
//    * @param {string} opts.method request method ('get', 'post', 'put', 'delete')
//    * @param {string} opts.entity entity name in rest api ('user')
//    * @param {object} opts.headers header object
//    * @param {object} opts.data data object
//    * @param {object} opts.params params object
//    * @param {object} opts.pathParams url path params object
//    */
//   async request(opts = {}) {
//     try {
//       const { name, entity } = opts
//       opts.method = opts.method.toLowerCase()

//       opts.url =
//         entity +
//         '/' +
//         (/\/$/.test(this.paths[entity][name])
//           ? this.paths[entity][name]
//           : this.paths[entity][name] + '/')

//       if (opts.pathParams) {
//         Object.keys(opts.pathParams).forEach(key => {
//           opts.url = opts.url.replace(key, opts.pathParams[key])
//         })
//       }

//       opts.headers = { ...(await this._getAuthHeader()), ...opts.headers }

//       if (!opts.contentType) this.removeHeaders()
//       const res = await this._methods[opts.method].call(this, opts)
//       if (!opts.contentType) this.restoreHeaders()

//       if (name === 'login' && entity === 'user') tkn.save(res.data)
//       return res
//     } catch (error) {
//       throw error
//     }
//   }

//   async _getAuthHeader() {
//     try {
//       const h = {}
//       if (tkn.isToken && !tkn.check()) await this._updateToken()
//       if (tkn.isToken) h.Authorization = `Bearer ${tkn.authToken}`
//       return h
//     } catch (error) {
//       console.error('[_getAuthHeader]', error)
//     }
//   }

//   removeHeaders() {
//     this.temp = Object.assign({}, this.http.defaults.headers.post)
//     this.http.defaults.headers.common = {}
//     this.http.defaults.headers.post = {}
//   }

//   restoreHeaders() {
//     this.http.defaults.headers.post = this.temp
//   }

//   _get({ url, params, headers, responseType }) {
//     return this.http({
//       method: 'get',
//       url,
//       headers,
//       params,
//       responseType,
//     })
//   }

//   _post({ url, data, params, headers }) {
//     return this.http({
//       method: 'post',
//       url,
//       headers,
//       params,
//       data,
//     })
//   }

//   _put({ url, data, params, headers }) {
//     return this.http({
//       method: 'put',
//       url,
//       headers,
//       params,
//       data,
//     })
//   }

//   _patch({ url, data, params, headers }) {
//     return this.http({
//       method: 'patch',
//       url,
//       headers,
//       params,
//       data,
//     })
//   }

//   _delete({ url, data, params, headers }) {
//     return this.http({
//       method: 'delete',
//       url,
//       headers,
//       params,
//       data,
//     })
//   }

//   async _updateToken() {
//     await tkn.update(refreshToken => {
//       return this.http({
//         url: '/user/token/refresh/',
//         method: 'post',
//         headers: {
//           Authorization: `Bearer ${refreshToken}`,
//         },
//       })
//         .then(({ data }) => data)
//         .catch(err => console.error('[updateToken]', err))
//     })
//   }

//   _addAxiosInterceptors() {
//     // this.http.interceptors.request.use(r => {
//     //   return r
//     // })
//     this.http.interceptors.response.use(
//       r => r,
//       err => {
//         if (err && err.response && err.response.status === 401) router.push('/')
//         return Promise.reject(err)
//       },
//     )
//   }
// }

// const api = new Api()

// Vue.prototype.$api = api.request.bind(api)

// export default api.request.bind(api)

const HTTP = axios.create({
  baseURL:
    'http://ws.audioscrobbler.com/2.0/?method=library.getartists&api_key=da90a69f6ce53e6905f8a993a8ce9679&user=joanofarctan&format=json',
})

export default HTTP
