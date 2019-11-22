import store from '@/store'

const TIME_SHIFT = 20 // seconds

class Token {
  constructor() {
    const t = localStorage.getItem('token')
    if (t) store.commit('changeAuthorized', true)
  }

  async update(cb) {
    const data = await cb(this.refreshToken)
    this.save(data)
    return
  }

  check() {
    const current = new Date().getTime()
    const tokenDate = this._getTokenExpDate()
    if (!tokenDate) return false
    return current < tokenDate - 1000 * TIME_SHIFT
  }

  save(t) {
    localStorage.setItem(
      'token',
      btoa(
        JSON.stringify({
          auth: t.auth_token,
          refresh: t.refresh_token,
        }),
      ),
    )
    store.commit('changeAuthorized', true)
  }

  _parseToken(token) {
    try {
      if (!token) return null
      const json = atob(token.split('.')[1])
      return JSON.parse(json)
    } catch (error) {
      console.error('[API][parseToken]', error)
    }
  }

  _getTokenExpDate() {
    const data = this._parseToken(this.authToken)
    if (!data) return null
    return data.exp * 1000
  }

  get isToken() {
    return !!this.tokenRaw.auth
  }

  get tokenRaw() {
    const t = localStorage.getItem('token')
    if (t) {
      return JSON.parse(atob(t))
    }
    return {
      auth: '',
      refresh: '',
    }
  }

  get authToken() {
    return this.tokenRaw.auth || null
  }

  get refreshToken() {
    return this.tokenRaw.refresh || null
  }
}
const inst = new Token()
if (process.env.NODE_ENV === 'development') {
  window._token = inst
}

export default inst
