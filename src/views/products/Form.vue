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

            <b-row>
              <b-col md="6">
                <b-form-group
                  description="*Código identificador interno"
                  label="Código"
                  label-for="code">
                  <b-form-input id="code" v-model="form.internalCode"  type="text" placeholder="Código" autocomplete="none"></b-form-input>
                </b-form-group>
              </b-col>

              <b-col md="6">
                <b-form-group
                  label="Cantidad"
                  description="*Cantidad de productos que tengo disponible"
                  label-for="stock">
                  <b-form-input id="stock" v-model="form.stock" :textarea="true" :rows="9" placeholder="Cantidad (Stock)"></b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="6">


                <b-form-group label="Precio regular" label-for="salePrice" description="Precio regular">
                  <b-input-group>
                    <b-input-group-prepend>
                      <b-input-group-text>$</b-input-group-text>
                    </b-input-group-prepend>
                    <b-form-input id="salePrice" v-model="form.salePrice" placeholder="Precio" type="text"></b-form-input>
                  </b-input-group>
                </b-form-group>

              </b-col>
              <b-col md="6">

                <b-form-group label="Precio de compra" label-for="purchasePrice"
                  description="Es el costo por el cual adquirí el producto">
                  <b-input-group>
                    <b-input-group-prepend>
                      <b-input-group-text>$</b-input-group-text>
                    </b-input-group-prepend>
                    <b-form-input id="purchasePrice" v-model="form.purchasePrice" placeholder="Precio de oferta" type="text"></b-form-input>
                  </b-input-group>
                </b-form-group>
              </b-col>
            </b-row>

            <b-row>
              <b-col md="6">
                <b-form-group label="Precio de oferta" label-for="offerPrice" description="Precio de oferta">
                  <b-input-group>
                    <b-input-group-prepend>
                      <b-input-group-text>$</b-input-group-text>
                    </b-input-group-prepend>
                    <b-form-input id="offerPrice" v-model="form.offerPrice" placeholder="Precio de oferta" type="text"></b-form-input>
                  </b-input-group>
                </b-form-group>
              </b-col>

              <b-col md="6">

                <b-form-group
                  label="Estatus de producto"
                  label-for="status">
                  <b-form-select id="status_admin"
                    :options="['Visible', 'Borrador', 'Oculto']"
                    value="Seleccionar estatus"
                    v-model="form.status_admin">
                  </b-form-select>
                </b-form-group>
              </b-col>
            </b-row>

            <b-row>
              <b-col md="6">

                <b-form-group
                  label="Seleccionar imagen principal del producto"
                  label-for="image">
                  <b-form-file
                    type="file"
                    id="image"
                    v-on:change="image"
                    :state="Boolean(form.image)"
                    placeholder="Seleccionar una imagen"
                    drop-placeholder="Drop file here..."
                    accept=".jpg, .png"
                  />
                </b-form-group>
              </b-col>

              <b-col md="6">

                <b-form-group
                  label="Seleccionar imágenes de carousel"
                  label-for="images">
                  <b-form-file
                    type="file"
                    multiple
                    id="images"
                    v-on:change="_images"
                    :state="Boolean(form._images)"
                    placeholder="Seleccionar una imagen"
                    drop-placeholder="Drop file here..."
                    accept=".jpg, .png"
                  />
                </b-form-group>
              </b-col>
            </b-row>

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
        internalCode: '',
        stock: '',
        status: 'En existencia', // En existencia, Agotado, Por Agotar
        status_admin: '',
        purchasePrice: '',
        salePrice: '',
        offerPrice: '',
        image: '', // trabajar en esto
        _images: [],
        seller_id: 1
      },
      selected: [], // Must be an array reference!
      show: true
    }
  },
  methods: {
    save () {
      API.saveProducts(this.form)
        .then(resp => {
          this.form = {}
          console.log(resp)
        })
        .catch(err => {
          console.log(err)
        })
    },
    image(e) {
      let fileReader = new FileReader();
      const image = e.target.files
      if(image.length > 0){
        fileReader.readAsDataURL(image[0])
        fileReader.onload = ((e) => {
          this.form.image =e.target.result
        })
      }


    //  fileReader.readAsDataURL(imgCant)
    /*  fileReader.onload = ((e) => {
        this.form.image.push(imgCant)
      })*/

      /*
      for (let i = 0; i < imgCant; i++) {
        file = files.files[i]
        fileReader = new FileReader()
        fileReader.readAsDataURL(file)
        fileReader.onload = ((e) => {
          this.publicidad.images.push(e.target.result)
        })
      } */
    },
    _images(){

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
