export interface Product {
  id: number;
  price: number;
  rate: number;
  amount: number;
  title: string;
  image: string;
  owner: string;
}

export interface CheckoutProduct extends Product {
  count: number;
}
