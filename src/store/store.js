// TODO:
// Add ORM

import Vue from 'vue'
import Vuex from 'vuex'

import Catalog from './modules/catalog.js'
import ProductSold from './modules/productSold.js'
import ProductReview from './modules/productsReview.js'
import Products from './modules/products.js'
import PaymentMethods from './modules/payment.js'


Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        Catalog,
        Products,
        ProductSold,
        ProductReview,
        PaymentMethods
    }
})

export default store