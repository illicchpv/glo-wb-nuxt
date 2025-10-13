import { useFetch } from "nuxt/app"

export default defineEventHandler(async (event) => {
  return { 
    hello: 'world'
  }
  // const { data } = await useFetch('/db.json')
  // return data.filter((item: any) => item.label === 'new')
})