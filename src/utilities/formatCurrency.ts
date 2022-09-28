const CURRENCY_fORMATTER = new Intl.NumberFormat(undefined, { currency: 'USD', style: 'currency' })


export function formatCurrency(number: number) {
  return CURRENCY_fORMATTER.format(number)
}