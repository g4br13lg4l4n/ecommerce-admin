import axios from 'axios'
import configService from './config'
import security from '../security/security'

const connectLogin = axios.create({
  baseURL: configService.apiUrl,
})

const connect = axios.create({
  baseURL: configService.apiUrl,
  headers: security.getStorageToken()
})

const API = {

  loginAdmin: (_data) => {
    return new Promise((resolve, reject) => {
      const data = {
        grant_type: 'password',
        client_id: 5,
        client_secret: 'PCjDBktajMi35LASsS70whYHUeoRWyzMgYPx5EPF',
        username: _data['username'],
        password: _data['password'],
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

  getProducts: (page) => {
    return new Promise((resolve, reject) => {
      connect.get(page)
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
