"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaTrashAlt,
  FaMinus,
  FaPlus,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
} from "react-icons/fa";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Dress",
      price: 30,
      quantity: 1,
      category: "clothing",
      image:
        "https://i.pinimg.com/564x/5b/0e/51/5b0e51db0a4b144e37c7492a20722828.jpg",
    },
    {
      id: 2,
      name: "Shirt",
      price: 50,
      quantity: 2,
      category: "clothing",
      image:
        "https://i.pinimg.com/564x/5b/0e/51/5b0e51db0a4b144e37c7492a20722828.jpg",
    },
    {
      id: 3,
      name: "Pants",
      price: 20,
      quantity: 1,
      category: "clothing",
      image:
        "https://i.pinimg.com/564x/5b/0e/51/5b0e51db0a4b144e37c7492a20722828.jpg",
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

  const handleAddToCart = (item: any) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (cartItem) => cartItem.id === item.id,
      );
      if (existingItem) {
        return prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem,
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
  };

  const getRecommendations = () => {
    const categories = cartItems.map((item) => item.category);
    return [
      {
        id: 4,
        name: "Skirt",
        price: 25,
        category: "clothing",
        image:
          "https://i.pinimg.com/564x/5b/0e/51/5b0e51db0a4b144e37c7492a20722828.jpg",
      },
      {
        id: 5,
        name: "Hat",
        price: 15,
        category: "clothing",
        image:
          "https://i.pinimg.com/564x/5b/0e/51/5b0e51db0a4b144e37c7492a20722828.jpg",
      },
      {
        id: 6,
        name: "Blouse",
        price: 35,
        category: "clothing",
        image:
          "https://i.pinimg.com/564x/5b/0e/51/5b0e51db0a4b144e37c7492a20722828.jpg",
      },
      {
        id: 7,
        name: "Shoes",
        price: 45,
        category: "clothing",
        image:
          "https://i.pinimg.com/564x/5b/0e/51/5b0e51db0a4b144e37c7492a20722828.jpg",
      },
    ];
  };

  const recommendations = getRecommendations();

  return (
    <div className="relative left-0 top-0 z-50 min-h-screen bg-gray-100 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <div className="container py-5">
        <div className="mb-8 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="Logo" width={36} height={36} />
            <div className="text-xl font-semibold">KIM</div>
          </Link>
        </div>
        <h1 className="mx-auto mb-10 w-full text-center text-3xl font-semibold">
          Shopping Cart
        </h1>
        <div className="flex flex-col gap-4 md:flex-row md:justify-between">
          <div className="md:w-3/4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="mb-4 w-full rounded-lg border bg-white p-4 shadow-md"
              >
                <div className="flex items-center">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={100}
                    height={100}
                    className="rounded-md"
                  />
                  <div className="ml-4 flex flex-1 flex-row items-center justify-evenly">
                    <h2 className="flex flex-1 text-lg font-semibold">
                      {item.name}
                    </h2>
                    <p className="flex flex-1 text-gray-600">${item.price}</p>
                    <div className="mt-2 flex flex-1 items-center">
                      <button
                        onClick={() => handleQuantityChange(item.id, -1)}
                        className="mr-2 p-3"
                        disabled={item.quantity === 1}
                      >
                        <FaMinus />
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(item.id, 1)}
                        className="ml-2 p-3"
                      >
                        <FaPlus />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="ml-4 rounded bg-red-500 p-2 text-white"
                  >
                    <FaTrashAlt />
                  </button>
                </div>
              </div>
            ))}
            <div className="border-t pt-4">
              <h2 className="text-xl font-semibold">Similar Products</h2>
              <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {recommendations.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-lg border p-10 shadow-md"
                  >
                    <div className="flex flex-col items-center">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={100}
                        height={100}
                        className="rounded-md"
                      />
                      <div className="mt-2 text-center">
                        <h2 className="text-lg font-semibold">{item.name}</h2>
                        <p className="text-gray-600">${item.price}</p>
                      </div>
                      <button
                        onClick={() => handleAddToCart(item)}
                        className="mt-2 rounded bg-blue-500 px-2 py-1 text-white"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8 md:mt-0 md:w-1/4">
            <div className="rounded-lg border bg-white p-4 shadow-md">
              <h2 className="mb-4 text-xl font-semibold">Order Summary</h2>
              <p className="text-lg">Total Price: ${getTotalPrice()}</p>
              <Link
                href="/checkout"
                className="mt-4 block w-full rounded bg-blue-500 py-2 text-center text-white"
              >
                Proceed to Checkout
              </Link>
              <div className="mt-4 text-center">
                <p className="text-sm">
                  By placing your order, you agree to our Terms and Conditions.
                </p>
                <div className="mt-2 flex justify-center space-x-2">
                  <FaCcVisa size={40} />
                  <FaCcMastercard size={40} />
                  <FaCcPaypal size={40} />
                </div>
              </div>
            </div>
            <div className="mt-8 rounded-lg border bg-white p-4 shadow-md">
              <h2 className="mb-4 text-xl font-semibold">Need Assistance?</h2>
              <p>Contact our support team for help with your order.</p>
              <button className="mt-2 rounded bg-green-500 px-2 py-1 text-white">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
