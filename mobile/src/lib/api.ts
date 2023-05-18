import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://172.19.163.86:3333',
})
