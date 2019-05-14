<template>
  <div id="app">
    <ProductsList/>
    <hr>
    <ShoppingCart/>
  </div>
</template>

<script>
import ProductsList from './components/ProductsList'
import ShoppingCart from './components/ShoppingCart'
export default {
  name: 'app',
  components: {
    ProductsList,
    ShoppingCart
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
