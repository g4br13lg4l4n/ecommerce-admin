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
        client_id: 1,
        client_secret: 'cinIC4gzXQRmqm2TMf9l75awtjL75TlhDj2Sy4xE',
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

  saveProducts: (page ,data) => {
    return new Promise((resolve, reject) => {
      connect.post(page, data)
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
  },

  getCategory: (page) => {
    return new Promise((resolve, reject)=> {
      connect.get(page)
      .then(resp => {
        resolve(resp.data)
      })
      .catch(err => {
        reject(err)
      })
    })
  },

  postCategory: (page, data) => {
    return new Promise((resolve, reject) => {
      connect.post(page, data)
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
