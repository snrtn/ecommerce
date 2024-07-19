"use client";

import React, { useState, useEffect } from "react";
import Stepper from "@/components/app/shipping/Stepper";
import Image from "next/image";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Order, IssueButton, Location } from "@/types/shipping.type";
import { generateOrders, issueButtons } from "@/data/shipping.data";
import Link from "next/link";

const ShippingStatusPage: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [activeButton, setActiveButton] = useState<string | null>(null);

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

  const handleButtonClick = (button: string) => {
    setActiveButton(activeButton === button ? null : button);
  };

  return (
    <div className="xl:px-34 relative left-0 top-0 min-h-screen bg-white px-4 md:px-8 lg:px-24 2xl:px-64">
      <div className="container">
        <h1 className="text-md mx-auto mb-10 mt-10 w-full text-center font-medium md:text-xl">
          Shipping Status
        </h1>
        <div className="flex flex-col gap-8">
          {orders
            .map((order) => ({
              ...order,
              locations: sortByDateDescending(order.locations),
            }))
            .sort((a, b) => {
              const latestDateA = new Date(
                a.locations[0].date.split(".").reverse().join("-"),
              ).getTime();
              const latestDateB = new Date(
                b.locations[0].date.split(".").reverse().join("-"),
              ).getTime();
              return latestDateB - latestDateA;
            })
            .map((order) => (
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
                    <p className="md:text-md text-sm">
                      Latest Shipment Date: {order.locations[0].date}
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
                      {order.locations.map((location, index) => (
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
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <h2 className="text-md mb-4 mt-20 text-center font-medium md:text-xl">
          Shipping Issues?
        </h2>
        <div className="mt-10 flex flex-col rounded-lg border px-8 py-16 shadow-sm md:flex-row md:px-16 lg:px-24 xl:px-32">
          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-1">
            {issueButtons.map((button) => (
              <div key={button.id} className="col-span-1">
                <button
                  className={`font-base flex w-full items-center justify-between rounded-lg bg-gray-100 px-8 py-4 text-left text-xs text-black md:px-12 md:py-8 ${
                    activeButton === button.id ? "font-bold" : ""
                  }`}
                  onClick={() => handleButtonClick(button.id)}
                >
                  <span>{button.title}</span>
                  {activeButton === button.id ? (
                    <FaChevronUp />
                  ) : (
                    <FaChevronDown />
                  )}
                </button>
                {activeButton === button.id && (
                  <div className="px-8 py-4 md:px-12 md:py-8">
                    <p className="mt-4 text-sm text-gray-600">
                      {button.description}
                    </p>
                    <Link
                      href={button.link}
                      className="mt-2 inline-block text-sm text-blue-500"
                    >
                      {button.title}
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingStatusPage;
