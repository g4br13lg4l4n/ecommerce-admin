<template>
  <div class="animated fadeIn card">
    <!-- User Interface controls -->
    <div class="card-body">
      <b-row>
        <b-col md="6" class="my-1">
          <b-form-group label-cols-sm="3" label="Filtrar" class="mb-0">
            <b-input-group>
              <b-form-input v-model="filter" placeholder="Buscar" />
              <b-input-group-append>
                <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
              </b-input-group-append>
            </b-input-group>
          </b-form-group>
        </b-col>

        <b-col md="6" class="my-1">
          <b-form-group label-cols-sm="3" label="Filtrar por" class="mb-0">
            <b-input-group>
              <b-form-select v-model="sortBy" :options="sortOptions">
                <option slot="first" :value="null">-- none --</option>
              </b-form-select>
              <b-form-select :disabled="!sortBy" v-model="sortDesc" slot="append">
                <option :value="false">Asc</option> <option :value="true">Desc</option>
              </b-form-select>
            </b-input-group>
          </b-form-group>
        </b-col>

        <b-col md="6" class="my-1">
          <b-form-group label-cols-sm="3" label="Por página" class="mb-0">
            <b-form-select :options="pageOptions" v-model="perPage" />
          </b-form-group>
        </b-col>
      </b-row>

      <!-- Main table element -->
      <b-table
        stacked="md"
        :items="items"
        :fields="fields"
        :current-page="currentPage"
        :per-page="perPage"
        :filter="filter"
        :sort-by.sync="sortBy"
        :sort-desc.sync="sortDesc"
        :sort-direction="sortDirection"
        @filtered="onFiltered"
      >
        <template slot="name" slot-scope="row">
          {{ row.value.first }} {{ row.value.last }}
        </template>

        <template slot="isActive" slot-scope="row">
          {{ row.value ? 'Yes :)' : 'No :(' }}
        </template>

        <template slot="actions" slot-scope="row">
          <b-button size="sm" @click="info(row.item, row.index, $event.target)" class="mr-1">
            Actualizar
          </b-button>
        </template>
      </b-table>

      <b-row>
        <b-col md="6" class="my-1">
          <b-pagination
            :total-rows="totalRows"
            :per-page="perPage"
            v-model="currentPage"
            class="my-0"
          />
        </b-col>
      </b-row>

      <!-- Info modal -->
      <b-modal id="modalInfo" size="lg" @hide="resetModal" :title="modalInfo.title" ok-only>
        <b-table
          stacked="md"
          :items="modalInfo.child"
          :fields="modalInfo.fields"
        />
      </b-modal>
    </div>
  </div>
</template>

<script>
import API from '../../API/api'
  const items = []
  export default {
    data() {
      return {
        items: [],
        fields: [
          { key: 'identificador', label: 'ID', sortable: true, sortDirection: 'desc' },
          { key: 'nombre', label: 'Nombre', sortable: true, sortDirection: 'desc' },
          { key: 'descripcion', label: 'Descripción', sortable: true, class: 'text-center' },
          { key: 'fechaCreacion',  label: 'Fecha', sortable: true},
          { key: 'actions', label: 'Actions' }
        ],
        currentPage: 1,
        perPage: 20,
        totalRows: items.length,
        pageOptions: [20, 30, 40],
        sortBy: null,
        sortDesc: false,
        sortDirection: 'asc',
        filter: null,
        modalInfo: { title: '', content: '', child: [],  fields: [
          { key: 'id', label: 'ID' },
          { key: 'name', label: 'Nombre' },
          { key: 'description', label: 'Descripción',  },
          { key: 'created_at',  label: 'Fecha', sortable: true},
        ]}
      }
    },
    computed: {
      sortOptions() {
        // Create an options list from our fields
        return this.fields
          .filter(f => f.sortable)
          .map(f => {
            return { text: f.label, value: f.key }
          })
      }
    },
    methods: {
      info(item, index, button) {

        if(item.hijos.length > 0){
          this.modalInfo.child = item.hijos
        }else {
           this.modalInfo.child = []
        }

        this.modalInfo.title = 'Sub categorías de ' + item.nombre
        this.modalInfo.content = 'Subcategorias'
        this.$root.$emit('bv::show::modal', 'modalInfo', button)
      },
      resetModal() {
        this.modalInfo.title = ''
        this.modalInfo.content = ''
      },
      onFiltered(filteredItems) {
        this.totalRows = filteredItems.length
        this.currentPage = 1
      }
    },
    beforeMount() {
      API.getCategory('categories')
        .then(resp => {
          this.items = resp.data
          this.totalRows = this.items.length
        })
        .catch(err => {
          console.log(err)
        })
    },
  }
</script>
