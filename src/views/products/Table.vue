<template>
  <b-card :header="caption">

    <b-form >
      <b-form-group>
        <b-form-input
          type="text"
          required
          v-model="seach"
          @keyup="searching"
          placeholder="Buscar producto" />
      </b-form-group>
    </b-form>


    <b-table :hover="hover" :total-rows="totalRows" :striped="striped" :bordered="bordered" :small="small" :fixed="fixed" :items="items" :fields="fields" :per-page="perPage">
    </b-table>
    <nav>
      <b-pagination :total-rows="totalRows" @input="paginate(currentPage)" v-model="currentPage" :current-page="currentPage" prev-text="Anterior" next-text="Sigiente"/>
    </nav>

  </b-card>
</template>

<script>

import API from '../../API/api'
export default {
  name: 'c-table',
  inheritAttrs: true,
  props: {
    caption: {
      type: String,
      default: 'Table'
    },
    hover: {
      type: Boolean,
      default: true
    },
    striped: {
      type: Boolean,
      default: true
    },
    bordered: {
      type: Boolean,
      default: true
    },
    small: {
      type: Boolean,
      default: false
    },
    fixed: {
      type: Boolean,
      default: true
    }
  },
  data: () => {
    return {
      seach: '',
      items: [],
      perPage: 40,
      totalRows: 0,
      currentPage: 1,
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
        {key: 'imagen', label: 'Imagen'},
        {key: 'estado_admin', sortable: true}
      ],
    }
  },
  methods: {
    searching() {
      if(this.seach.length > 4){
        API.getProducts('products/like?name='+this.seach)
          .then(resp => {
            this.items = resp.data
            this.perPage = resp.meta.pagination.per_page
            this.totalRows = resp.meta.pagination.total
            this.currentPage = resp.meta.pagination.current_page
          })
          .catch(err => {
            console.log(err)
          })
      }
      if(this.seach.length === 0){
        API.getProducts('products')
        .then(resp => {
          this.items = resp.data
          this.perPage = resp.meta.pagination.per_page
          this.totalRows = resp.meta.pagination.total
          this.currentPage = resp.meta.pagination.current_page
        })
        .catch(err => {
          console.log(err)
        })
      }
    },
    paginate(a){
      API.getProducts('products?page='+this.currentPage)
        .then(resp => {
          this.items = resp.data
        })
        .catch(err => {
          console.log(err)
        })
    },

    getBadge (estado) {
      return estado === 'disponible' ? 'success'
        : estado === 'Visible' ? 'secondary'
          : estado === 'no disponible' ? 'warning'
            : estado === 'Banned' ? 'danger' : 'primary'
    },
  },
  beforeMount() {
    API.getProducts('products')
      .then(resp => {
        this.items = resp.data
        this.perPage = resp.meta.pagination.per_page
        this.totalRows = resp.meta.pagination.total
        this.currentPage = resp.meta.pagination.current_page
      })
      .catch(err => {
        console.log(err)
      })
  },
}
</script>
