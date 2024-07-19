export interface Location {
  date: string;
  location: string;
}

export interface Order {
  id: number;
  product: string;
  status: string;
  estimatedDelivery: string;
  trackingNumber: string;
  currentLocation?: string;
  locations: Location[];
}

export interface IssueButton {
  id: string;
  title: string;
  description: string;
  link: string;
}
