<template>

  <header class="container header px-4 px-md-0">
    <div class="row justify-content-between align-items-center">
      <div class="col-lg-2 col-6">
        <NuxtLink to="/" class="logo-link">
          <img width="128" src="/images/logo.svg" alt="logo: Willberries" class="logo-image">
        </NuxtLink>
      </div>
      <div class="col-lg-6 d-none d-lg-block">
        <nav>
          <ul class="navigation d-flex justify-content-around">
            <li class="navigation-item" v-for="link in links" :key="link.id">
              <NuxtLink :to="link.route" class="navigation-link">{{ link.text }}</NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
      <div class="col-lg-2 d-none d-lg-block">
        <div class="form-control search-block">
          <input type="search" class="form-control" placeholder="Search" aria-label="Recipient's username"
            autocomplete="none" v-model="searchQuery" aria-describedby="button-addon2">
          <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="searchProducts">
            <img src="/images/search.png" alt="search">
          </button>
        </div>
      </div>
      <div class="col-lg-2 col-6 d-flex justify-content-end">
        <!-- @click="changeLinks()  -->
        <button class="button button-cart" 
           :disabled="isCartEmpty"
          @click="openCart()"
        >
          <!-- <img class="button-icon" src="/images/cart.svg" alt="icon: cart"> -->
          <svg class="button-icon" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 4.5H17C17.037 4.50005 18 4.50127 18 5.5L17 11.5C16.911 11.991 16.5709 12.5 16.0642 12.5H6L6.09506 13.7985C6.16424 14.1291 6.45721 14.5 6.79145 14.5H15.6066C15.6443 14.5 15.6808 14.5054 15.7158 14.5155C16.441 14.6204 17 15.2462 17 16C17 16.8271 16.3271 17.5 15.5 17.5C14.6729 17.5 14 16.8271 14 16C14 15.8248 14.0302 15.6565 14.0857 15.5H7.91434C7.9698 15.6564 8 15.8248 8 16C8 16.8271 7.32711 17.5 6.5 17.5C5.67289 17.5 5 16.8271 5 16C5 15.5183 5.2282 15.089 5.58216 14.8143C5.39546 14.568 5.26019 14.2794 5.19962 13.9905L4.80856 12.1269L2 1.5H0.457618C0.204824 1.5 0 1.21822 0 0.962647C0 0.707075 0.204824 0.5 0.457618 0.5H2.56171C2.77221 0.5 2.95559 0.645345 3.00603 0.852063L4 4.5Z" 
              :fill="isCartEmpty ? 'white' : 'lightgreen'"
            />
          </svg>          
          <span class="button-text">Cart</span>
          <span class="button-text cart-count"></span>
        </button>
      </div>
    </div>
  </header>

</template>

<script setup>
const links = ref([
  {id: 1, route: {path: '/products', query: {field: 'gender', name: 'womens'}}, text: 'Womens'},
  {id: 2, route: {path: '/products', query: {field: 'gender', name: 'mens'}}, text: 'Mens'},
  {id: 3, route: {path: '/products', query: {field: 'category', name: 'clothing'}}, text: 'Clothing'},
  {id: 4, route: {path: '/products', query: {field: 'category', name: 'accessories'}}, text: 'Accessories'},
  {id: 5, route: {path: '/products', query: {field: 'category', name: 'shoes'}}, text: 'Shoes'},
  {id: 6, route: {path: '/products'}, text: 'All'},
]);

const searchQuery = ref('');

const searchProducts = async () => {
  console.log('searchProducts:', searchQuery.value);
  if (!searchQuery.value) {
    await navigateTo({
      path: '/products',
    });
  } else {
    await navigateTo({
      path: '/products',
      query: {field: 'search', name: searchQuery.value.trim()}
    });
  }
};

const viewCart = useViewCart();
const cartItems = useCart()
const isCartEmpty = computed(() => cartItems.value.length === 0)

const openCart = () => {
  // const old = viewCart.value
  viewCart.value = true
  // viewCart.value = !viewCart.value
  // console.log('openCart', old, '->', viewCart.value);
};

// const changeLinks = () => {
//   console.log('changeLinks');
//   links.value = [
//     {id: 6, route: {path: '/products'}, text: 'All'},
//   ];
// };
</script>