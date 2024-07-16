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
    </div>
  );
};

export default CartPage;
