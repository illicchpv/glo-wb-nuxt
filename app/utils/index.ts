// export const { format: formatCurrency } = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })

export const titleFormat = (title: string) => {
  return title.at(0)?.toUpperCase() + title.slice(1)?.toLowerCase() 
}