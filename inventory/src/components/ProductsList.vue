<template>
    <div>
        <h1>Product List</h1>
        <img v-if="loading" src="https://i.imgur.com/JfPpwOA.gif">
        <ul v-else>
            <li v-for="product in products" :key="product.id">
                {{product.title}} - {{product.price | currency}} - {{product.inventory}}
                <v-btn :disabled="!productIsInStock(product)" @click.prevent="addProductToCart(product)">Add</v-btn>
            </li>
        </ul>
    </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/database'
import format from 'date-fns/format'
import {mapState, mapGetters} from 'vuex'


    export default {
        data: () => ({
          name: 'ProductsList',
          loading: false,
        //   products: []
        }),
        computed: {
            ...mapState({
                products: state => state.products
            }),

            // products() {
            //     return this.$store.state.products
            // },
            ...mapGetters({
                productIsInStock: 'productIsInStock'
            })
            // productIsInStock() {
            //     return this.$store.getters.productIsInStock
            // }
        },
        created() {
            this.loading = true
            this.$store.dispatch('fetchProducts')
            .then(() => this.loading = false)
          // grab products list from firebase rtdb
        //   firebase.database().ref('products').on('child_added', snapshot => {
        //     this.products.push({
        //       ...snapshot.val(),
        //       id: snapshot.key
        //     })
        //   })
        },
        methods: {
          storeProduct () {
            firebase.database().ref('products')
            .push({
              created: format(Date.now(), 'DD/MM/YY HH:mm:ss'),
              content: this.content})
            this.content = ''
          },
          addProductToCart(product) {
              this.$store.dispatch('addProductToCart', product)
          }
        }
    }
</script>

<style scoped>
ul {
  list-style-type: none;
}
</style>