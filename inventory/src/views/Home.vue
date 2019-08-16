<template>
    <div>
        <ProductsList />
        <hr>
        <ShoppingCart />
    </div>
</template>

<script>
  import ProductsList from '@/components/ProductsList'
  import ShoppingCart from '@/components/ShoppingCart'

  export default {
    components: {
      ProductsList,
      ShoppingCart
    }
  }
</script>
