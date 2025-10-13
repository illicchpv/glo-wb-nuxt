import { Product } from "~/models/product.model";

export default defineEventHandler(async (event) => {
  'https://wb-nuxt-default-rtdb.firebaseio.com/data.json'
  // const products: Product[] = await $fetch('https://wb-nuxt-default-rtdb.firebaseio.com/data.json')
  const products: Product[] = await $fetch('https://mytest-4d899-default-rtdb.firebaseio.com/db.json')
  // products.forEach(el => {
  //   el.img = el.img.replace('img/', '/images/')
  //   console.log('el.img: ', el.img);
  // });
  return products
})

