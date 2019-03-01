<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col lg="12">
        <c-table :table-data="items" :fields="fields" caption="Listado de productos"></c-table>
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
  components: {cTable},
  data: () => {
    return {
      items: [],
      fields: [
        {key: 'identificador', label: 'ID', sortable: true},
        {key: 'nombre', label: 'Nombre', sortable: true},
        {key: 'nombre_corto', label: 'Nombre corto', sortable: true},
        {key: 'descripcion', label: 'Descripción', sortable: true},
        {key: 'disponibles', label: 'Cantidad (Stock)', sortable: true},
        {key: 'estado', label: 'Estatus', sortable: true},
        {key: 'estado_admin', label: 'Estado en tienda', sortable: true},
        {key: 'precio_compra', label: 'Precio|Compra', sortable: true},
        {key: 'precio_venta', label: 'Precio|Compra', sortable: true},
        {key: 'precio_oferta', label: 'Precio|Compra', sortable: true},
        {key: 'fechaCreacion', label: 'Fecha de creación', sortable: true},
        {key: 'imagen', label: 'Imagen', sortable: true},
        {key: 'status', sortable: true}
      ],
    }
  },
  beforeMount() {
    API.getProducts()
      .then(resp => {
        this.items = resp.data
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>
