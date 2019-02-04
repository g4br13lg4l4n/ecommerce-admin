<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col md="12">
        <b-card>
          <div slot="header">
            <strong>Nuevo Producto</strong>
          </div>
          <b-form>
            <b-form-group
              description="*Nombre completo del producto con que aparecerá en su tienda en linea"
              label="Nombre"
              label-for="name">
              <b-form-input id="name" v-model="form.name" type="text" placeholder="Nombre del producto" autocomplete="none"></b-form-input>
            </b-form-group>
            <b-form-group
              label="Descripción "
              label-for="description">
              <b-form-input id="description" v-model="form.description" :textarea="true" :rows="9" placeholder="Descripción del producto"></b-form-input>
            </b-form-group>
            <b-form-group
              description="*Código identificador interno"
              label="Código"
              label-for="code">
              <b-form-input id="code" v-model="form.code"  type="text" placeholder="Código" autocomplete="none"></b-form-input>
            </b-form-group>
            <b-form-group
              label="Cantidad"
              description="*Cantidad de productos que tengo disponible"
              label-for="count">
              <b-form-input id="count" v-model="form.count" :textarea="true" :rows="9" placeholder="Cantidad (Stock)"></b-form-input>
            </b-form-group>
            <b-form-group label="Precio regular" label-for="price" description="Precio regular">
              <b-input-group>
                <b-input-group-prepend>
                  <b-input-group-text>$</b-input-group-text>
                </b-input-group-prepend>
                <b-form-input id="price" v-model="form.price" placeholder="Precio" type="text"></b-form-input>
              </b-input-group>
            </b-form-group>
            <b-form-group label="Precio de oferta" label-for="price_oferta" description="Precio de oferta">
              <b-input-group>
                <b-input-group-prepend>
                  <b-input-group-text>$</b-input-group-text>
                </b-input-group-prepend>
                <b-form-input id="price_oferta" v-model="form.price_oferta" placeholder="Precio de oferta" type="text"></b-form-input>
              </b-input-group>
            </b-form-group>

            <b-form-group
              label="Estatus de producto"
              label-for="status">
              <b-form-select id="status"
                :options="['Seleccionar','Visible', 'Borrador', 'Oculto']"
                value="Seleccionar estatus"
                v-model="form.status">
              </b-form-select>
            </b-form-group>
            <br/>
            <b-btn @click="save" variant="primary">Guardar</b-btn>
          </b-form>

        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>

import API from '../../API/api'
export default {
  name: 'forms',
  data () {
    return {
      form: {
        name: '',
        description: '',
        code: '',
        count: '',
        price: '',
        price_oferta: '',
        status: ''
      },
      selected: [], // Must be an array reference!
      show: true
    }
  },
  methods: {
    save () {
      API.saveProducts(this.form)
    }
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
