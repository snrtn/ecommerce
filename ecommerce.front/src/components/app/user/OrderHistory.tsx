"use client";

import React, { useState } from "react";
import OrderDetail from "./form/OrderDetail";
import Modal from "./form/Modal";
import { ordersData, Order } from "./data/ordersData";
import useMediaQuery from "@/hooks/useMediaQuery";
import Image from "next/image";

const OrderHistory: React.FC = () => {
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedYear, setSelectedYear] = useState<string>("all");

  const isMobile = useMediaQuery(768);

  const handleOrderClick = (order: Order) => {
    setSelectedOrder(order);
    if (!isMobile) {
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedOrder(null);
  };

  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(event.target.value);
  };

  const getUniqueYears = () => {
    const years = ordersData.map((order) => new Date(order.date).getFullYear());
    return Array.from(new Set(years)).sort((a, b) => b - a);
  };

  const filteredOrders =
    selectedYear === "all"
      ? ordersData
      : ordersData.filter(
          (order) =>
            new Date(order.date).getFullYear().toString() === selectedYear,
        );

  const groupedOrders = filteredOrders.reduce<{ [key: string]: Order[] }>(
    (acc, order) => {
      const year = new Date(order.date).getFullYear().toString();
      if (!acc[year]) {
        acc[year] = [];
      }
      acc[year].push(order);
      return acc;
    },
    {},
  );

  return (
    <div className="min-h-[70vh] px-4 md:px-0">
      <h1 className="text-xl font-semibold">Order History</h1>
      <div className="mb-4">
        <label htmlFor="year-select" className="mr-2">
          Filter by year:
        </label>
        <select
          id="year-select"
          value={selectedYear}
          onChange={handleYearChange}
          className="rounded border p-1"
        >
          <option value="all">All</option>
          {getUniqueYears().map((year) => (
            <option key={year} value={year.toString()}>
              {year}
            </option>
          ))}
        </select>
      </div>
      <div className="h-96 overflow-y-auto md:h-[70vh]">
        {Object.keys(groupedOrders)
          .map((year) => (
            <div key={year}>
              <h3 className="mb-4 text-xl font-semibold">{year}</h3>
              {groupedOrders[year].map((order) => (
                <div
                  key={order.id}
                  className="mb-4 w-full cursor-pointer border-b py-4"
                  onClick={() => handleOrderClick(order)}
                >
                  <div className="flex items-center justify-between">
                    <div className="mr-2 flex flex-1 space-x-2 overflow-x-auto">
                      {order.items.map((item, idx) => (
                        <div
                          key={idx}
                          className="relative h-16 w-16 flex-shrink-0"
                        >
                          <Image
                            src={item.image}
                            alt={item.name}
                            className="object-cover"
                            fill
                            style={{
                              objectFit: "cover",
                              objectPosition: "center",
                            }}
                          />
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-1 flex-col md:flex-row">
                      <div className="flex flex-1">
                        <p>Order #{order.id}</p>
                      </div>
                      <div className="flex flex-1">
                        <p>Status: {order.status}</p>
                      </div>
                      <div className="flex flex-1">
                        <p className="text-lg font-semibold">
                          {order.totalPrice}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))
          .reverse()}
      </div>
      {isModalOpen && selectedOrder && (
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <OrderDetail order={selectedOrder} onClose={handleCloseModal} />
        </Modal>
      )}
      {isMobile && selectedOrder && (
        <div className="relative mb-4 rounded-md bg-white p-6 shadow-md">
          <OrderDetail order={selectedOrder} onClose={handleCloseModal} />
        </div>
      )}
    </div>
  );
};

export default OrderHistory;
