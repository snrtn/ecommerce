import React, { useState } from "react";
import Stepper from "@/components/app/shipping/Stepper";
import Image from "next/image";
import { Order } from "@/types/shipping.type";
import { formatDate, getStatusText } from "./dateUtils";

interface OrderItemProps {
  order: Order;
}

const OrderItem: React.FC<OrderItemProps> = ({ order }) => {
  const [showAddress, setShowAddress] = useState<string | null>(null);

  const handleAddressClick = (orderId: string) => {
    setShowAddress(showAddress === orderId ? null : orderId);
  };

  const showDeliveryIssueButton = () => {
    const nonDisplayStatuses = [
      "Delivered",
      "Return Requested",
      "Return Completed",
      "Return Rejected",
      "Refund Requested",
      "Refund Completed",
      "Refund Rejected",
      "Objection",
    ];
    return !nonDisplayStatuses.includes(order.status);
  };

  const showReturnButton = () => {
    const displayStatuses = ["Delivered"];
    const nonDisplayStatuses = [
      "Refund Requested",
      "Refund Completed",
      "Refund Rejected",
      "Return Requested",
    ];
    return (
      displayStatuses.includes(order.status) &&
      !nonDisplayStatuses.includes(order.status)
    );
  };

  const showRefundButton = () => {
    const displayStatuses = ["Delivered"];
    const nonDisplayStatuses = [
      "Return Requested",
      "Return Completed",
      "Return Rejected",
      "Refund Requested",
    ];
    return (
      displayStatuses.includes(order.status) &&
      !nonDisplayStatuses.includes(order.status)
    );
  };

  const showObjectionButton = () => {
    const displayStatuses = ["Return Rejected", "Refund Rejected"];
    return displayStatuses.includes(order.status);
  };

  const showConfirmPurchaseButton = () => {
    return order.status === "Delivered";
  };

  return (
    <div className="relative rounded-lg border py-10 shadow-sm">
      <Stepper status={order.status} currentLocation={order.currentLocation} />
      <div className="mt-10 flex flex-col gap-8 px-8 sm:px-10 md:flex-row md:px-16 lg:px-24 xl:px-32">
        <div className="flex flex-1 flex-col">
          <div className="flex flex-col justify-between">
            <p className="flex flex-col text-sm md:flex-row">
              Order Number :<p className="md:ml-1">{order.orderNumber}</p>
            </p>
            <button className="flex py-2 text-sm text-blue-500">
              Consultation
            </button>
          </div>

          <div className="mt-4 flex flex-col">
            <p className="flex flex-col text-lg font-semibold md:flex-row">
              {getStatusText(order.status, order.estimatedDelivery)}
            </p>
            <p className="mt-4 text-sm md:mt-0">
              Order Date: {formatDate(order.orderDate)}
            </p>
            <button className="flex py-2 text-sm text-blue-500">
              Order Details
            </button>
          </div>

          <div className="mt-2 flex h-20 w-full flex-wrap gap-1 overflow-y-auto">
            {order.products.map((product, index) => (
              <div key={index}>
                <Image
                  src={
                    "https://images.unsplash.com/photo-1678801868975-32786ae5aeeb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdvbWFuJTIwZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D"
                  }
                  alt={product.title}
                  className="relative h-16 w-16 object-cover"
                  width={200}
                  height={200}
                />
              </div>
            ))}
          </div>

          <div className="flex flex-col">
            {order.paidPrice !== undefined && (
              <p className="text-md font-medium">
                Total Price: ${order.paidPrice.toFixed(2)}
              </p>
            )}
            <div className="flex gap-6">
              {showDeliveryIssueButton() && (
                <button className="flex py-2 text-sm text-blue-500">
                  Delivery Issue
                </button>
              )}
              {showReturnButton() && (
                <button className="flex py-2 text-sm text-blue-500">
                  Return
                </button>
              )}
              {showRefundButton() && (
                <button className="flex py-2 text-sm text-blue-500">
                  Refund
                </button>
              )}
              {showObjectionButton() && (
                <button className="flex py-2 text-sm text-blue-500">
                  Objection
                </button>
              )}
              {showConfirmPurchaseButton() && (
                <button className="flex py-2 text-sm text-blue-500">
                  Confirm Purchase
                </button>
              )}
            </div>
          </div>

          <div className="mt-2 h-10 py-2">
            <button
              className="text-sm font-medium text-blue-500"
              onClick={() => handleAddressClick(order.id.toString())}
              onMouseEnter={() => handleAddressClick(order.id.toString())}
              onMouseLeave={() => handleAddressClick(order.id.toString())}
            >
              Delivery Address :
            </button>
            <span className="ml-2 text-sm">
              {order.deliveryAddress.split(",")[0]},
            </span>
            {showAddress === order.id.toString() && (
              <div className="mt-2 text-sm font-medium text-gray-600">
                <p>
                  {order.deliveryAddress.split(",")[0]},
                  {order.deliveryAddress.split(",").slice(1).join(",")}
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-1 flex-col">
          <h3 className="text-md">Tracking Number: {order.trackingNumber}</h3>
          <ul className="max-h-72 overflow-y-auto">
            {order.locations.map((location, index) => (
              <li
                key={index}
                className="jtext-sm md:text-md ustify-left mb-2 mt-4 flex border-b py-2"
              >
                <span className="md:text-md text-sm">{location.date}: </span>
                <span className="md:text-md ml-4 text-sm">
                  {location.location ? location.location : location.status}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
