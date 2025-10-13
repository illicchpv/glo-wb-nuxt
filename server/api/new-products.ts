// import { Product } from "../../app/models/product.model";
import { Product } from "~/models/product.model";

const getNewProducts = (products: Product[]) => {
  return products.filter((c) => c.label.toLowerCase() === 'new').splice(0, 4)
}

export default defineEventHandler(async (event) => {
  // 'https://wb-nuxt-default-rtdb.firebaseio.com/data.json'
  // const products: Product[] = await $fetch('https://wb-nuxt-default-rtdb.firebaseio.com/data.json')
  const products: Product[] = await $fetch('https://mytest-4d899-default-rtdb.firebaseio.com/db.json')
  // products.forEach(el => {
  //   el.img = el.img.replace('img/', '/images/')
  // });
  // await new Promise(resolve => setTimeout(resolve, 3_000))
  return getNewProducts(products)
})

// export default defineEventHandler(async (event) => {
//   'https://wb-nuxt-default-rtdb.firebaseio.com/data.json'
//   const products: any = await $fetch('https://wb-nuxt-default-rtdb.firebaseio.com/data.json')
//   const rez = products.filter((item: any) => item.label.toLowerCase() === 'new')
//   rez.forEach(el => {
//     el.img = el.img.replace('img/', '/images/')
//   });
//   return rez
// })