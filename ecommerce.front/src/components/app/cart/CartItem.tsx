"use client";

import React from "react";
import Image from "next/image";
import { FaTrashAlt, FaMinus, FaPlus } from "react-icons/fa";
import { Product } from "./types";

interface CartItemProps {
  item: Product;
  handleQuantityChange: (
    id: number,
    amount: number,
    size: number,
    color: string,
  ) => void;
  handleRemoveItem: (id: number, size: number, color: string) => void;
}

const CartItem: React.FC<CartItemProps> = ({
  item,
  handleQuantityChange,
  handleRemoveItem,
}) => {
  return (
    <div className="mb-2 flex w-full rounded-lg border bg-white p-2 shadow-md">
      <Image
        src={item.images[0]}
        alt={item.name}
        width={100}
        height={100}
        className="mb-2 rounded-md md:mb-0"
      />
      <div className="ml-2 flex flex-1 items-center justify-between md:pl-4 md:pr-6">
        <div className="ml-4 flex flex-1 flex-col items-start md:ml-0 md:flex-row md:items-center">
          <h2 className="flex flex-1 text-xs md:text-sm">{item.name}</h2>
          <div className="mt-2 flex flex-1 flex-col gap-0 md:mt-0 md:flex-row md:items-center md:gap-8">
            <p className="flex flex-1 items-center gap-2 text-xs text-gray-600 md:gap-1 md:text-sm">
              Color:
              <span
                className="inline-block h-4 w-4 rounded-full ring-2 ring-gray-300"
                style={{ backgroundColor: item.color }}
              ></span>
            </p>
            <p className="mt-1 flex flex-1 gap-2 text-xs text-gray-600 md:mt-0 md:gap-1 md:text-sm">
              Size: <span>{item.size}</span>
            </p>
            <p className="mt-2 flex flex-1 text-xs text-gray-600 md:mt-0 md:text-sm">
              ${item.price * item.quantity}
            </p>
          </div>
        </div>
        <div className="mr-8 flex flex-col items-center gap-8 md:mr-0 md:flex-row md:gap-5">
          <div className="flex">
            <button
              onClick={() =>
                handleQuantityChange(item.id, -1, item.size, item.color)
              }
              disabled={item.quantity === 1}
            >
              <FaMinus />
            </button>
            <span className="w-8 text-center text-xs md:text-sm">
              {item.quantity}
            </span>
            <button
              onClick={() =>
                handleQuantityChange(item.id, 1, item.size, item.color)
              }
            >
              <FaPlus />
            </button>
          </div>
          <button
            onClick={() => handleRemoveItem(item.id, item.size, item.color)}
            className="rounded bg-red-500 p-1 text-white"
          >
            <FaTrashAlt />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
