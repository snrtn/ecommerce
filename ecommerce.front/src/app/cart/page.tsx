"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Product 1",
      price: 30,
      quantity: 1,
      image: "/path/to/image1.jpg",
    },
    {
      id: 2,
      name: "Product 2",
      price: 50,
      quantity: 2,
      image: "/path/to/image2.jpg",
    },
    {
      id: 3,
      name: "Product 3",
      price: 20,
      quantity: 1,
      image: "/path/to/image3.jpg",
    },
  ]);

  const handleQuantityChange = (id: number, amount: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + amount } : item,
      ),
    );
  };

  const handleRemoveItem = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
  };

  return (
    <div className="container mx-auto mt-24 p-4">
      <h1 className="mb-8 text-center text-3xl font-semibold">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-center text-xl">Your cart is empty.</p>
      ) : (
        <div className="flex flex-col lg:flex-row lg:space-x-8">
          <div className="w-full lg:w-2/3">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="mb-4 flex items-center justify-between rounded-lg bg-white p-4 shadow-md"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={100}
                  height={100}
                  className="rounded-lg"
                />
                <div className="ml-4 flex-1">
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p className="text-lg">${item.price}</p>
                  <div className="mt-2 flex items-center">
                    <button
                      className="rounded bg-gray-200 px-2 py-1"
                      onClick={() => handleQuantityChange(item.id, -1)}
                      disabled={item.quantity === 1}
                    >
                      -
                    </button>
                    <span className="px-4">{item.quantity}</span>
                    <button
                      className="rounded bg-gray-200 px-2 py-1"
                      onClick={() => handleQuantityChange(item.id, 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  className="ml-4 rounded bg-red-500 px-4 py-2 text-white"
                  onClick={() => handleRemoveItem(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="mt-8 w-full lg:mt-0 lg:w-1/3">
            <div className="rounded-lg bg-white p-4 shadow-md">
              <h2 className="mb-4 text-2xl font-semibold">Order Summary</h2>
              <p className="text-lg">Total: ${getTotalPrice()}</p>
              <Link href="/checkout">Proceed to Checkout</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
