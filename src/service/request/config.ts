// axios 的基本配置
let BASE_URL = ''
const TIME_OUT = 5000

if (process.env.NODE_ENV === 'development') {
  BASE_URL = '/api'
} else {
  BASE_URL = 'http://coderwhy.org/prod'
}

export { BASE_URL, TIME_OUT }
