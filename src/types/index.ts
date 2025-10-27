export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  hoverImage?: string;
  description?: string;
  category: string;
  brand: string;
  color?: string;
  rating: number;
  inStock: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Category {
  id: number;
  name: string;
  image: string;
  priceFrom: number;
}

export interface Brand {
  id: string;
  name: string;
}

export interface Color {
  id: string;
  name: string;
  value: string;
}

export interface PriceRange {
  min: number;
  max: number;
}

export interface CheckoutForm {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  country: string;
  address: string;
  city: string;
  zipCode: string;
  phoneNumber: string;
  comment: string;
  createAccount: boolean;
  shipToDifferentAddress: boolean;
}

export interface PaymentMethod {
  type: 'cod' | 'paypal';
  label: string;
}
