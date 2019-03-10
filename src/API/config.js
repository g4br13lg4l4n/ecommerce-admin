import isLocal from '../pugin/isLocal'

const url = isLocal ? 'http://127.0.0.1:8000/' : 'https://system.grupodopsa.com/'
const configService = {
  apiUrl: url
}
export default configService
