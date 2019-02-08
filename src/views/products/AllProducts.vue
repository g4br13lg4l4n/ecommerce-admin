<template>
  <Tables/>
</template>

<script>
import API from '../../API/api.js'
import Tables from './Tables'
export default {
  name: 'AllProducts',
  components: {
    Tables
  },
  mounted() {
    API.getProducts()
      .then(resp => {
        console.log(resp)
      })

  }
}
</script>