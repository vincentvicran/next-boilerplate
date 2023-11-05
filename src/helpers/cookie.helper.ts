import Cookies from 'universal-cookie'

const cookies = new Cookies()

const setCookie = (key: string, value: string) => {
  cookies.set(key, value, { path: '/', maxAge: 82800 })
}

const getCookie = (key: string) => {
  return cookies.get(key)
}

const removeCookie = (key: string) => {
  cookies.remove(key, { path: '/' })
}

export { setCookie, getCookie, removeCookie }
