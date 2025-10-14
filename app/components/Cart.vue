<template>
  <!-- <h1 style="background-color: aquamarine;">Cart  viewCart: {{ viewCart }}</h1>
  <div class="overlay" :class="{'show': viewCart}"  id="modal-cart"></div> -->

  <div class="overlay" :class="{ 'show': viewCart }" id="modal-cart"
    @click.self="closeCart"
  >

    <div class="modal">
      <header class="modal-header">
        <h2 class="modal-title">Cart</h2>
        <button class="modal-close" @click="closeCart">&times;</button>
      </header>

      <table class="cart-table">
        <colgroup>
          <col class="col-goods">
          <col class="col-price">
          <col class="col-minus">
          <col class="col-qty">
          <col class="col-plus">
          <col class="col-total-price">
          <col class="col-delete">
        </colgroup>
        <thead>
          <tr>
            <th>Good(s)</th>
            <th>Price</th>
            <th colspan="3">Qty.</th>
            <th colspan="2">Total</th>
          </tr>
        </thead>
        <tbody class="cart-table__goods">

          <tr v-if="!total">
            <td colspan="7">
              <h2 style="text-align: center;color: coral;">Cart is empty!</h2>

            </td>
          </tr>

          <tr class="cart-item" v-for="cartItem in cartItems" :key="cartItem.id">
            <td>{{ cartItem.name }}</td>
            <td>{{ cartItem.price }}$</td>
            <td><button class="cart-btn-minus" :disabled="cartItem.count === 1" @click="decr(cartItem)">-</button></td>
            <td>{{ cartItem.count }}</td>
            <td><button class="cart-btn-plus" @click="incr(cartItem)">+</button></td>
            <td>{{ cartItem.count * cartItem.price }}$</td>
            <td><button class="cart-btn-delete" @click="remove(cartItem)">&times;</button></td>
          </tr>

        </tbody>
        <tfoot v-if="!!total">
          <tr>
            <th colspan=" 5">Total:</th>
            <th class="card-table__total" colspan="2">{{ total }}$</th>
          </tr>

        </tfoot>
      </table>

      <div>
        <h3 v-if="error" style="color: red; margin: 0;text-align: center;">{{ error }}</h3>
        <h3 v-if="success" style="color: green; margin: 0;text-align: center;">{{ success }}</h3>
      </div>

      <form v-if="!!total" class="modal-form" @submit.prevent="submitForm">
        <input autocomplete="none" class="modal-input" type="text" placeholder="Имя" v-model="form.name">
        <input autocomplete="none" class="modal-input" type="text" placeholder="Телефон" v-model="form.phone">
        <button class="button cart-buy" type="submit">
          <span class="button-text">Checkout</span>
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CartItem } from '~/models/cart-item.model';

const viewCart = useViewCart();
const cartItems = useCart();
const total = computed(() => cartItems.value.reduce((acc, el) => acc + (el.count * el.price), 0))

const closeCart = () => {
  // const old = viewCart.value
  viewCart.value = false;
  // viewCart.value = !viewCart.value
  // console.log('openCart', old, '->', viewCart.value);
};

const findItem = (id: string): CartItem | undefined => {
  return cartItems.value.find(el => el.id === id);
};

const incr = (item: CartItem) => {
  const cartItem = findItem(item.id);
  if (cartItem) {
    cartItem.count++;
  }
};
const decr = (item: CartItem) => {
  const cartItem = findItem(item.id);
  if (cartItem && cartItem.count > 1) {
    cartItem.count--;
  }
};
const remove = (item: CartItem) => {
  const cartItem = findItem(item.id);
  if (cartItem) {
    cartItems.value = cartItems.value.filter(el => el.id !== cartItem.id);
    // cartItems.value.splice(cartItems.value.indexOf(cartItem), 1);
  }
};
const clear = () => {
  cartItems.value = []
};


// ------------------
const form = ref({ name: '', phone: '' })
const success = ref<string>('')
const error = ref<string>('')

const submitForm = async () => {
  if (!form.value.name || !form.value.phone) {
    error.value = 'Заполните обязательные поля'
    setTimeout(() => {
      error.value = ''
    }, 2_000)
    return
  }
  error.value = ''
  success.value = ''
  const dataToSend = {
    ...form.value,
    cartObj: cartItems.value.map(el => ({ ...el })),
  }
  console.log('dataToSend: ', dataToSend);
  const url = 'https://jsonplaceholder.typicode.com/posts';
  try {
    const data = await $fetch<any>(url, {
      method: 'POST',
      body: JSON.stringify(dataToSend)
    })
    success.value = data.message || 'Данные отправлены!'
    form.value = { name: '', phone: '' }
    clear()
    setTimeout(() => {
      success.value = ''
      closeCart()
    }, 2_000)
  } catch (err: any) {
    error.value = err.data?.message || 'Ошибка отправки'
    setTimeout(() => {
      error.value = ''
    }, 3_000)
  }
}

</script>
