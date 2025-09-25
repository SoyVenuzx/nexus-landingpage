type PriceType = {
  monthly: string,
  anual: string
}

export type CardType = {
  name: string
  price: string | PriceType | null,
  popular: boolean,
  features: string[],
  button: {
    text: string,
    link: string
  }
}