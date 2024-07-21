export interface Location {
  date: string;
  location: string;
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
}

export interface IssueButton {
  id: string;
  title: string;
  description: string;
  link: string;
}
