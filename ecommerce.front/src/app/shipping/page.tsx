"use client";

import React, { useState, useEffect } from "react";
import Stepper from "@/components/app/shipping/Stepper";
import Image from "next/image";

interface Location {
  date: string;
  location: string;
}

interface Order {
  id: number;
  product: string;
  status: string;
  estimatedDelivery: string;
  trackingNumber: string;
  currentLocation?: string;
  locations: Location[];
}

const generateOrders = (): Order[] => [
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

const ShippingStatusPage: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    setOrders(generateOrders());
  }, []);

  const sortByDateDescending = (locations: Location[]) => {
    return locations.sort((a, b) => {
      const dateA = new Date(a.date.split(".").reverse().join("-")).getTime();
      const dateB = new Date(b.date.split(".").reverse().join("-")).getTime();
      return dateB - dateA;
    });
  };

  return (
    <div className="xl:px-34 relative left-0 top-0 mt-20 min-h-screen bg-white px-4 md:mt-24 md:px-8 lg:px-24 2xl:px-64">
      <div className="container py-5">
        <h1 className="text-md mx-auto mb-10 w-full text-center font-semibold md:text-xl">
          Shipping Status
        </h1>
        <div className="flex flex-col gap-8">
          {orders.map((order) => (
            <div key={order.id} className="rounded-lg border py-10 shadow-sm">
              <Stepper
                status={order.status}
                currentLocation={order.currentLocation}
              />
              <div className="mt-10 flex flex-col gap-8 px-8 sm:px-10 md:flex-row md:px-16 lg:px-24 xl:px-32">
                <div className="flex flex-1 flex-col">
                  <div className="flex items-end gap-2">
                    <Image
                      src={
                        "https://images.unsplash.com/photo-1678801868975-32786ae5aeeb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdvbWFuJTIwZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D"
                      }
                      alt={""}
                      className="h-16 w-16 object-cover"
                      width={200}
                      height={200}
                    />
                    <p className="text-xs text-gray-500">3 more</p>
                  </div>
                  <p className="md:text-md mt-4 text-sm">
                    Status: {order.status}
                  </p>
                  <p className="md:text-md text-sm">
                    Estimated Delivery: {order.estimatedDelivery}
                  </p>
                  <p className="md:text-md text-sm">
                    Tracking Number: {order.trackingNumber}
                  </p>
                  <div className="mt-2">
                    <button className="md:text-md text-sm text-blue-500">
                      Order Detail
                    </button>
                  </div>
                </div>

                <div className="flex flex-1 flex-col">
                  <h3 className="md:text-md text-sm font-semibold">
                    Tracking History
                  </h3>
                  <ul className="mt-2 h-60 overflow-y-auto">
                    {sortByDateDescending(order.locations).map(
                      (location, index) => (
                        <li
                          key={index}
                          className="jtext-sm md:text-md ustify-left mb-2 mt-4 flex border-b py-2"
                        >
                          <span className="md:text-md text-sm">
                            {location.date}:{" "}
                          </span>
                          <span className="md:text-md ml-4 text-sm">
                            {location.location}
                          </span>
                        </li>
                      ),
                    )}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        <h2 className="mb-4 mt-20 text-center text-xl font-semibold">
          Shipping Issues?
        </h2>
        <div className="mt-10 flex flex-col rounded-lg border px-8 py-20 shadow-sm md:flex-row md:px-16 lg:px-24 xl:px-32">
          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            <button className="w-full rounded-lg bg-gray-100 py-28 text-xs font-medium text-black hover:bg-red-500 hover:text-white">
              Report Lost Package
            </button>
            <button className="w-full rounded-lg bg-gray-100 py-28 text-xs font-medium text-black hover:bg-yellow-500 hover:text-white">
              Request Compensation
            </button>
            <button className="w-full rounded-lg bg-gray-100 py-28 text-xs font-medium text-black hover:bg-blue-500 hover:text-white">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingStatusPage;
