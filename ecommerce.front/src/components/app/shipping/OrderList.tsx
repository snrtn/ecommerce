import React from "react";
import { Order, Location } from "@/types/shipping.type";
import OrderItem from "./OrderItem";

interface OrderListProps {
  orders: Order[];
}

const sortByDateDescending = (locations: Location[]) => {
  return locations.sort((a, b) => {
    const dateA = new Date(a.date.split(".").reverse().join("-")).getTime();
    const dateB = new Date(b.date.split(".").reverse().join("-")).getTime();
    return dateB - dateA;
  });
};

const OrderList: React.FC<OrderListProps> = ({ orders }) => {
  return (
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
          <OrderItem key={order.id} order={order} />
        ))}
    </div>
  );
};

export default OrderList;
