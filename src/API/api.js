import axios from 'axios'
import configService from './config'
import security from '../security/security'

console.log(JSON.parse(security.getStorageToken()))

const connectLogin = axios.create({
  baseURL: configService.apiUrl,
})

const connect = axios.create({
  baseURL: configService.apiUrl,
  headers: JSON.parse(security.getStorageToken())
})

const API = {

  loginAdmin: (_data) => {
    return new Promise((resolve, reject) => {
      const data = {
        grant_type: 'password',
        client_id: 2,
        client_secret: 'mgjpUHN0y31U3ONlvuAYKZzZhIJkum5cYWEnNbLk',
        username: _data['username'],
        password: _data['password'],
        provider: 'users'
      }
      connectLogin.post('oauth/token', data)
        .then(resp => {
          resolve(resp)
        })
        .catch(err => {
          reject(err)
        })
    })
  },



  saveProducts: (data) => {
    return new Promise((resolve, reject) => {
      connect.post('products', data)
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
      connect.get('products')
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
