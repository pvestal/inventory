import Vuex from 'vuex'
import Vue from 'vue'
import shop from '@/api/shop'

Vue.use(Vuex)

export default new Vuex.Store({
  
  state: { // = data
    products: [],
    //{id, quantity}}
    cart: [],
    checkoutStatus: null
  },

  getters: { // = computed properties
    availableProducts (state, getters) {
      return state.products.filter(product => product.inventory > 0)
    },
    cartProducts(state) {
      return state.cart.map(cartItem => {
        const product = state.products.find(product => product.id === cartItem.id)
        return {
          title: product.title,
          price: product.price,
          quantity: cartItem.quantity
        }
      })
    },
    cartTotal(state, getters) {
      // let total = 0
      // getters.cartProducts.forEach(product => {
      //   total += product.price * product.quantity
      // })
      // return total
      return getters.cartProducts.reduce((total, product) => total + product.price * product.quantity, 0 )
    },
    productIsInStock() {
      return (product) => {
        return product.inventory > 0
      }
    }
  },

  actions: {
    fetchProducts ({commit}) {
      // make the call
      // run setProducts mutation
      return new Promise((resolve, reject) => {
        shop.getProducts(products => {
            //commit the mutation
            commit('setProducts', products)
            resolve()
        })
        
      })

    },
    addProductToCart({state, getters, commit}, product) {
      if(getters.productIsInStock(product)) {
        const cartItem = state.cart.find(item => item.id === product.id)
          if(!cartItem) {
            commit('pushProductToCart', {id: product.id, quantity: 1})
          } else {
            commit('incrementItemQuantity', cartItem)
            }
        commit('decrementProductInventory', product)
      }
    },
    checkOut({state, commit}) {
      shop.buyProducts(
        state.cart,
        () => {
          commit('emptyCart')
          commit('setCheckoutStatus', 'success')
        },
        () => {
          commit('setCheckoutStatus', 'failure')
        }
        
        )
    }
  },

  mutations: {
    setProducts (state, payload) {
      // update products
      state.products = payload
    },
    pushProductToCart(state, product) {
      state.cart.push({
        id: product.id,
        quantity: product.quantity,
      })
    },
    incrementItemQuantity(state, cartItem) {
      cartItem.quantity++
    },
    decrementProductInventory(state, product) {
      product.inventory--
    },
    setCheckoutStatus(state, status) {
      state.checkoutStatus = status
    },
    emptyCart(state) {
      state.cart = []
    }
  }
})
