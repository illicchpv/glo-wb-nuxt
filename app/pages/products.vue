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
            <span class="label">{{ card.label }}</span>
            <!-- <img src="/images/image-119.jpg" alt="image: Hoodie" class="goods-image"> -->
            <img :src="card.img" :alt="`Image: ${card.name}`" class="goods-image">

            <h3 class="goods-title">{{ card.name }}</h3>
            <p class="goods-description">{{ card.description }}</p>
            <button class="button goods-card-btn add-to-cart" :data-id="card.id">
              <span class="button-price">${{ card.price }}</span>
            </button>
          </div>
        </div>

        <!-- <div class="col-lg-3 col-sm-6">
          <div class="goods-card">
            <span class="label">New</span>
            <img src="/images/image-120.jpg" alt="image: Faded Beach Trousers" class="goods-image">
            <h3 class="goods-title">Faded Beach Trousers</h3>
            
            <p class="goods-description">Navy/Ochre/Black/Khaki</p>
            
            <button class="button goods-card-btn add-to-cart" data-id="007">
              <span class="button-price">$139</span>
            </button>
            
          </div>
          
        </div>
        
        <div class="col-lg-3 col-sm-6">
          <div class="goods-card">
            <span class="label">New</span>
            <img src="/images/image-121.jpg" alt="image: Text T-Shirt" class="goods-image">
            <h3 class="goods-title">Text T-Shirt</h3>
            
            <p class="goods-description">White</p>
            
            <button class="button goods-card-btn add-to-cart" data-id="007">
              <span class="button-price">$59</span>
            </button>
            
          </div>
          
        </div>
        
        <div class="col-lg-3 col-sm-6">
          <div class="goods-card">
            <span class="label">New</span>
            <img src="/images/image-122.jpg" alt="image: Striped Long Sleeve Shirt" class="goods-image">
            <h3 class="goods-title">Striped Long Sleeve Shirt</h3>
            
            <p class="goods-description">Red/Sky Blue</p>
            
            <button class="button goods-card-btn add-to-cart" data-id="001">
              <span class="button-price">$119</span>
            </button>
            
          </div>
          
        </div>
        
        <div class="col-lg-3 col-sm-6">
          <div class="goods-card">
            <span class="label">New</span>
            <img src="/images/image-119.jpg" alt="image: Hoodie" class="goods-image">
            <h3 class="goods-title">Embroidered Hoodie</h3>
            
            <p class="goods-description">Yellow/Lilac/Fuchsia/Orange</p>
            
            
            <button class="button goods-card-btn add-to-cart" data-id="007">
              <span class="button-price">$89</span>
            </button>
          </div>
          
        </div>
        
        <div class="col-lg-3 col-sm-6">
          <div class="goods-card">
            <span class="label">New</span>
            <img src="/images/image-120.jpg" alt="image: Faded Beach Trousers" class="goods-image">
            <h3 class="goods-title">Faded Beach Trousers</h3>
            
            <p class="goods-description">Navy/Ochre/Black/Khaki</p>
            
            <button class="button goods-card-btn add-to-cart" data-id="007">
              <span class="button-price">$139</span>
            </button>
            
          </div>
          
        </div>
        
        <div class="col-lg-3 col-sm-6">
          <div class="goods-card">
            <span class="label">New</span>
            <img src="/images/image-121.jpg" alt="image: Text T-Shirt" class="goods-image">
            <h3 class="goods-title">Text T-Shirt</h3>
            
            <p class="goods-description">White</p>
            
            <button class="button goods-card-btn add-to-cart" data-id="007">
              <span class="button-price">$59</span>
            </button>
            
          </div>
          
        </div>
        
        <div class="col-lg-3 col-sm-6">
          <div class="goods-card">
            <span class="label">New</span>
            <img src="/images/image-122.jpg" alt="image: Striped Long Sleeve Shirt" class="goods-image">
            <h3 class="goods-title">Striped Long Sleeve Shirt</h3>
            
            <p class="goods-description">Red/Sky Blue</p>
            
            <button class="button goods-card-btn add-to-cart" data-id="001">
              <span class="button-price">$119</span>
            </button>
            
          </div>
          
        </div>
        
        <div class="col-lg-3 col-sm-6">
          <div class="goods-card">
            <span class="label">New</span>
            <img src="/images/image-119.jpg" alt="image: Hoodie" class="goods-image">
            <h3 class="goods-title">Embroidered Hoodie</h3>
            
            <p class="goods-description">Yellow/Lilac/Fuchsia/Orange</p>
            
            
            <button class="button goods-card-btn add-to-cart" data-id="007">
              <span class="button-price">$89</span>
            </button>
          </div>
          
        </div>
        
        <div class="col-lg-3 col-sm-6">
          <div class="goods-card">
            <span class="label">New</span>
            <img src="/images/image-120.jpg" alt="image: Faded Beach Trousers" class="goods-image">
            <h3 class="goods-title">Faded Beach Trousers</h3>
            
            <p class="goods-description">Navy/Ochre/Black/Khaki</p>
            
            <button class="button goods-card-btn add-to-cart" data-id="007">
              <span class="button-price">$139</span>
            </button>
            
          </div>
          
        </div>
        
        <div class="col-lg-3 col-sm-6">
          <div class="goods-card">
            <span class="label">New</span>
            <img src="/images/image-121.jpg" alt="image: Text T-Shirt" class="goods-image">
            <h3 class="goods-title">Text T-Shirt</h3>
            
            <p class="goods-description">White</p>
            
            <button class="button goods-card-btn add-to-cart" data-id="007">
              <span class="button-price">$59</span>
            </button>
            
          </div>
          
        </div>
        
        <div class="col-lg-3 col-sm-6">
          <div class="goods-card">
            <span class="label">New</span>
            <img src="/images/image-122.jpg" alt="image: Striped Long Sleeve Shirt" class="goods-image">
            <h3 class="goods-title">Striped Long Sleeve Shirt</h3>
            
            <p class="goods-description">Red/Sky Blue</p>
            
            <button class="button goods-card-btn add-to-cart" data-id="001">
              <span class="button-price">$119</span>
            </button>
            
          </div>
          
        </div> -->

      </div>
    </div>
  </section>

  {{ route.query.field }} / {{ route.query.name }}
</template>

<script setup lang="ts">
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

</script>