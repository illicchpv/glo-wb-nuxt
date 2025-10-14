import { Product } from "~/models/product.model";

interface Query {
  field: keyof Product
  name: string
}

const getFilteredProducts = (products: Product[],
  query: Query
) => {
  console.log('getFilteredProducts query.field: ', query.field);
  if (query.field && query.name) {
    console.log('(query.field && query.name)');
    if (query.field.toString() === 'search') {
      return products.filter((c) => c.name.toLowerCase().includes(query.name.toLowerCase()))
    }
    return products.filter((c) => {
      if (query.field === 'offer') return c[query.field] === !!query.name
      return c[query.field].toLowerCase() === query.name.toLowerCase()
    }
    )
  }
  console.log('NOT (query.field && query.name)');
  return products
}

export default defineEventHandler(async (event) => {
  const query: Query = getQuery(event)

  // const products: Product[] = await $fetch('https://wb-nuxt-default-rtdb.firebaseio.com/data.json')
  const products: Product[] = await $fetch('https://mytest-4d899-default-rtdb.firebaseio.com/db.json')
  return getFilteredProducts(products, query)
})

