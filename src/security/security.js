const security = {
  getToken: (params, $router) => {
      if(params.access_token && params.token_type == 'Bearer'){
        localStorage.header = JSON.stringify(params)
      }else {
        $router.push({ name: 'Page404' })
      }
  },

  getStorageToken: ()=> {
    if (localStorage.header) {
      return localStorage.header;
    }else {
      return ''
    }
  }
}

export default security
