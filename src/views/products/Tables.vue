<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col lg="12">
        <c-table  caption="Listado de productos"></c-table>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { shuffleArray } from '@/shared/utils'
import cTable from './Table.vue'
import API from '../../API/api'

export default {
  name: 'tables',
  components: {cTable}
}
</script>
<style>
  .card-body {
    overflow: scroll;
  }
</style>
