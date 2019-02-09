import isLocal from '../pugin/isLocal'

const url = isLocal ? 'http://127.0.0.1:8001/api/' : 'http://dev.system.grupodopsa.com/api/'
const configService = {
  apiUrl: url
}
export default configService
