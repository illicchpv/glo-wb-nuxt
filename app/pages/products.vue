<template>

  <section class="long-goods d-block">
    <div class="container">
      <div class="row align-items-center mb-4">
        <div class="col-12">
          <h2 class="section-title">Category</h2>
        </div>

      </div>
      <div class="row long-goods-list">

        <div class="col-lg-3 col-sm-6" v-for="card in data">
          <div class="goods-card">
            <span class="label" v-if="card.label">{{ titleFormat(card.label) }}</span>
            <!-- <img src="/images/image-119.jpg" alt="image: Hoodie" class="goods-image"> -->
            <img :src="card.img" :alt="`Image: ${card.name}`" class="goods-image" width="190" height="236">

            <h3 class="goods-title">{{ card.name }}</h3>
            <p class="goods-description">{{ card.description }}</p>
            <button class="button goods-card-btn add-to-cart" @click="addToCart(card)">
              <span class="button-price">${{ card.price }}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- {{ route.query.field }} / {{ route.query.name }} -->
</template>

<script setup lang="ts">
import type { CartItem } from '~/models/cart-item.model';
import type { Product } from '~/models/product.model';

definePageMeta({
  layout: 'custom'
})

const route = useRoute()
const field = computed(() => route.query.field || '')
const name = computed(() => route.query.name || '')

// const { data } = await useFetch('/api/filtered-products');
// const { data } = await useAsyncData('filtered-products',
//   () => {
//     // $fetch(`/api/filtered-products?field=${route.query.field}&name=${route.query.name}`));
//     return $fetch
// })

const { data } = await useAsyncData('filtered-products', () => {
  return $fetch(`/api/filtered-products?field=${field.value}&name=${name.value}`)
}, {
  watch: [field, name]
})

// --------------
const cartItems = useCart()

const addToCart = (product: Product) => {
  // console.log('addToCart product: ', product);
  let cartItem: CartItem | undefined = cartItems.value.find(el => el.id === product.id)
  if (cartItem) {
    cartItem.count++
  } else {
    cartItem = {
      id: product.id,
      name: product.name,
      price: +product.price,
      count: 1
    }
    cartItems.value.push(cartItem)
  }
  console.log('cartItems: ', cartItems.value);
}


</script>