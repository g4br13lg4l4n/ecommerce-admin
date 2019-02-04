import axios from 'axios'
import configService from './config'

const connect = axios.create({
  baseURL: configService.apiUrl
})

const API = {
  saveProducts: (data) => {
    connect.post('article', data)
    .then((resp) => {
      console.log(resp)
    })
  }
}

export default API
