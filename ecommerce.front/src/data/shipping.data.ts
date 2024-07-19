import { Order, IssueButton } from "@/types/shipping.type";

export const generateOrders = (): Order[] => [
  {
    id: 1,
    product: "Product 1",
    status: "Shipped",
    estimatedDelivery: "20.7.2024",
    trackingNumber: "1234567890",
    currentLocation: "Warehouse A",
    locations: [
      { date: "24.7.2024", location: "Warehouse A" },
      { date: "16.7.2024", location: "Distribution Center" },
      { date: "15.7.2024", location: "Warehouse A" },
      { date: "16.7.2024", location: "Distribution Center" },
      { date: "15.7.2024", location: "Warehouse A" },
      { date: "16.7.2024", location: "Distribution Center" },
      { date: "15.7.2024", location: "Warehouse A" },
      { date: "16.7.2024", location: "Distribution Center" },
      { date: "26.7.2024", location: "Warehouse A" },
      { date: "16.7.2024", location: "Distribution Center" },
      { date: "15.7.2024", location: "Warehouse A" },
      { date: "11.7.2024", location: "Distribution Center" },
      { date: "15.7.2024", location: "Warehouse A" },
      { date: "16.7.2024", location: "Distribution Center" },
    ],
  },
  {
    id: 2,
    product: "Product 2",
    status: "In Transit",
    estimatedDelivery: "22.7.2024",
    trackingNumber: "0987654321",
    currentLocation: "Distribution Center",
    locations: [
      { date: "16.7.2024", location: "Warehouse B" },
      { date: "18.7.2024", location: "Distribution Center" },
    ],
  },
  {
    id: 3,
    product: "Product 3",
    status: "Out for Delivery",
    estimatedDelivery: "23.7.2024",
    trackingNumber: "1122334455",
    locations: [
      { date: "17.7.2024", location: "Warehouse C" },
      { date: "20.7.2024", location: "Local Delivery Hub" },
    ],
  },
  {
    id: 4,
    product: "Product 4",
    status: "Delivered",
    estimatedDelivery: "18.7.2024",
    trackingNumber: "5566778899",
    locations: [
      { date: "14.7.2024", location: "Warehouse D" },
      { date: "17.7.2024", location: "Customer's Address" },
    ],
  },
];

export const issueButtons: IssueButton[] = [
  {
    id: "reportLostPackage",
    title: "Report Lost Package",
    description:
      "If you have lost your package, please report it here. Our support team will help you track it down. You will need to provide the tracking number and any relevant details about the package and its contents.",
    link: "/report-lost-package",
  },
  {
    id: "requestCompensation",
    title: "Request Compensation",
    description:
      "If you need to request compensation for a damaged or lost package, click here to fill out the compensation form. Make sure to include photos of any damage and a detailed description of the issue.",
    link: "/request-compensation",
  },
  {
    id: "contactSupport",
    title: "Contact Support",
    description:
      "For any other issues or inquiries, please contact our support team by clicking here. Our team is available 24/7 to assist you with any concerns you may have.",
    link: "/contact-support",
  },
  {
    id: "schedulePickup",
    title: "Schedule Pickup",
    description:
      "Need to schedule a pickup for a return or exchange? Click here to arrange a convenient time for our courier to pick up your package.",
    link: "/schedule-pickup",
  },
  {
    id: "trackShipment",
    title: "Track Shipment",
    description:
      "Want to track your shipment in real-time? Click here to view the latest updates and status of your delivery.",
    link: "/track-shipment",
  },
  {
    id: "modifyOrder",
    title: "Modify Order",
    description:
      "Need to make changes to your order? Click here to update your shipping address, change items, or modify other details.",
    link: "/modify-order",
  },
  {
    id: "cancelOrder",
    title: "Cancel Order",
    description:
      "If you need to cancel your order, please click here. Note that cancellation is only possible before the order has been shipped.",
    link: "/cancel-order",
  },
  {
    id: "refundStatus",
    title: "Check Refund Status",
    description:
      "Waiting for a refund? Click here to check the status of your refund request and see the expected processing time.",
    link: "/refund-status",
  },
];
