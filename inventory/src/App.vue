<template>
  <div id="app">
    <v-app>
      <v-content>
        <v-container>
            <ProductsList/>
            <hr>
            <AddScan/>
            <hr>
            <ShoppingCart/>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import ProductsList from './components/ProductsList'
import ShoppingCart from './components/ShoppingCart'
import AddScan from './components/AddScan'
export default {
  name: 'app',
  components: {
    ProductsList,
    ShoppingCart,
    AddScan
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
