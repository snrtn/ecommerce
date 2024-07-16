"use client";

import React from "react";
import { button } from "@/components/common/styles";
import Image from "next/image";

type OrderItem = {
  image: string;
  name: string;
  price: string;
  selectedSize: string;
  quantity: number;
  disabled?: boolean;
};

type Order = {
  id: number;
  date: string;
  status: string;
  items: OrderItem[];
  totalPrice: string;
};

type OrderDetailProps = {
  order: Order;
  onClose: () => void;
};

const OrderDetail: React.FC<OrderDetailProps> = ({ order, onClose }) => {
  return (
    <div className="w-full">
      <h2 className="mb-6 text-2xl font-semibold">Order Details</h2>
      <p className="mb-4">
        <strong>Order ID:</strong> {order.id}
      </p>
      <p className="mb-4">
        <strong>Date:</strong> {order.date}
      </p>
      <p className="mb-4">
        <strong>Address:</strong> 19 Rés la Courtillière,
      </p>
      <p className="mb-4">
        <strong>Status:</strong> {order.status}
      </p>
      <div className="h-80 space-y-4 overflow-y-auto">
        {order.items.map((item, index) => (
          <div
            key={index}
            className={`mt-4 flex items-center justify-between border-b p-2 ${
              item.disabled ? "relative cursor-not-allowed" : "cursor-pointer"
            }`}
          >
            <Image
              src={item.image}
              alt={item.name}
              className="mr-4 h-16 w-16 object-cover"
              fill
            />
            <div className="flex flex-1">
              <div className="flex flex-1">
                <p>{item.name}</p>
              </div>
              <div className="flex flex-1 flex-col md:flex-row">
                <div className="flex flex-1">
                  <p className="text-gray-500">Size: {item.selectedSize}</p>
                </div>
                <div className="flex flex-1">
                  <p className="text-gray-500">Quantity: {item.quantity}</p>
                </div>
                <div className="flex flex-1">
                  <p className="text-gray-500">{item.price}</p>
                </div>
              </div>
            </div>
            {item.disabled && (
              <span className="absolute left-0 top-0 bg-red-500 px-2 py-1 text-xs text-white">
                Sold Out
              </span>
            )}
          </div>
        ))}
      </div>
      <p className="mt-4 text-lg font-semibold">
        Total Price: {order.totalPrice}
      </p>
      <div className="mt-6 hidden justify-end md:flex">
        <button onClick={onClose} className={button.cancel}>
          Close
        </button>
      </div>
    </div>
  );
};

export default OrderDetail;
