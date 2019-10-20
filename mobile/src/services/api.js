import axios from 'axios'

const api = axios.create({
  baseURL: 'http://192.168.105.209:3333'
})

export default api