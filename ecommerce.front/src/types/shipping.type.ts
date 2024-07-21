export interface Location {
  date: string;
  location?: string;
  status?: string;
}

export interface Product {
  title: string;
  size: string;
  quantity: number;
  price: number;
}

export interface Order {
  id: number;
  orderNumber: string;
  product: string;
  status: string;
  estimatedDelivery: string;
  trackingNumber: string;
  currentLocation?: string;
  locations: Location[];
  paidPrice: number;
  orderDate: string;
  deliveryAddress: string;
  products: Product[];
}

export interface IssueButton {
  id: string;
  title: string;
  description: string;
  link: string;
}
