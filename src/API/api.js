import axios from 'axios'
import configService from './config'

const connect = axios.create({
  baseURL: configService.apiUrl
})

const API = {

  saveProducts: (data) => {
    return new Promise((resolve, reject) => {
      connect.post('article', data)
        .then(resp => {
          resolve(resp)
        })
        .catch(err => {
          reject(err)
      })
    })
  },

  getProducts: () => {
    return new Promise((resolve, reject) => {
      connect.get('article')
        .then(resp => {
          resolve(resp.data) 
        })
        .catch(err => {
          reject(err)
        })
    })
  }
}

export default API
