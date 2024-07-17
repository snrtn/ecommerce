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
  FaCheck,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import CartCard from "@/components/app/cart/CartCard";
import { initialProducts } from "@/components/app/infiniteView.data";
import { button } from "@/components/common/styles";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Dress",
      price: 30,
      quantity: 1,
      size: "M",
      color: "#75A69C",
      category: "clothing",
      colors: ["#75A69C", "#ffffff"],
      images: [
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/846d5a72-a372-425f-9cb3-f5e8051e4c2e/sweat-ultra-oversize-a-col-ras-du-cou-sportswear-phoenix-fleece-pour-G0d3Rc.png",
      ],
    },
    {
      id: 2,
      name: "Shirt",
      price: 50,
      quantity: 2,
      size: "L",
      color: "#75A69C",
      category: "clothing",
      colors: ["#75A69C", "#ffffff"],
      images: [
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/846d5a72-a372-425f-9cb3-f5e8051e4c2e/sweat-ultra-oversize-a-col-ras-du-cou-sportswear-phoenix-fleece-pour-G0d3Rc.png",
      ],
    },
    {
      id: 3,
      name: "Pants",
      price: 20,
      quantity: 1,
      size: "S",
      color: "#75A69C",
      category: "clothing",
      colors: ["#75A69C", "#ffffff"],
      images: [
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/846d5a72-a372-425f-9cb3-f5e8051e4c2e/sweat-ultra-oversize-a-col-ras-du-cou-sportswear-phoenix-fleece-pour-G0d3Rc.png",
      ],
    },
  ]);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleQuantityChange = (id, amount) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + amount } : item,
      ),
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleAddToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (cartItem) => cartItem.id === item.id,
      );
      if (existingItem) {
        return prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? {
                ...cartItem,
                quantity: cartItem.quantity + quantity,
                size: selectedSize || cartItem.size,
                color: selectedColor || cartItem.color,
              }
            : cartItem,
        );
      } else {
        return [
          ...prevItems,
          {
            ...item,
            quantity,
            size: selectedSize,
            color: selectedColor,
          },
        ];
      }
    });
    setSelectedProduct(null);
    setQuantity(1);
    setCurrentSlide(0);
  };

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
  };

  const getRecommendations = () => {
    return initialProducts.slice(0, 10);
  };

  const recommendations = getRecommendations();

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? selectedProduct.images.length - 1 : prevSlide - 1,
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === selectedProduct.images.length - 1 ? 0 : prevSlide + 1,
    );
  };

  return (
    <div className="xl:px-34 relative left-0 top-0 z-50 min-h-screen bg-white px-4 md:px-8 lg:px-24 2xl:px-64">
      <div className="container py-5">
        <div className="mb-8 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="Logo" width={36} height={36} />
            <div className="text-lg font-semibold">KIM</div>
          </Link>
        </div>
        <h1 className="mx-auto mb-10 w-full text-center text-2xl font-semibold">
          Shopping Cart
        </h1>
        <div className="flex flex-col gap-2 md:flex-row md:justify-between">
          <div className="md:w-3/4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="mb-2 flex w-full rounded-lg border bg-white p-2 shadow-md"
              >
                <Image
                  src={item.images[0]}
                  alt={item.name}
                  width={100}
                  height={100}
                  className="mb-2 rounded-md md:mb-0"
                />
                <div className="ml-2 flex flex-1 items-center justify-between md:pl-4 md:pr-6">
                  <div className="ml-4 flex flex-1 flex-col items-start md:ml-0 md:flex-row md:items-center">
                    <h2 className="flex flex-1 text-sm">{item.name}</h2>
                    <div className="flex flex-1 flex-col gap-0 md:flex-row md:items-center md:gap-8">
                      <p className="flex flex-1 text-sm text-gray-600">
                        Color: <span>{item.color}</span>
                      </p>
                      <p className="flex flex-1 text-sm text-gray-600">
                        Size: {item.size}
                      </p>
                      <p className="flex flex-1 text-sm text-gray-600">
                        ${item.price}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleQuantityChange(item.id, -1)}
                      className="p-1"
                      disabled={item.quantity === 1}
                    >
                      <FaMinus />
                    </button>
                    <span className="w-8 text-center text-sm">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => handleQuantityChange(item.id, 1)}
                      className="p-1"
                    >
                      <FaPlus />
                    </button>
                  </div>
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="ml-6 mr-4 rounded bg-red-500 p-1 text-white md:ml-8 md:mr-0"
                  >
                    <FaTrashAlt />
                  </button>
                </div>
              </div>
            ))}
            <div className="border-t pt-2">
              <h2 className="text-lg font-semibold">Similar Products</h2>
              <div className="mt-2 grid grid-cols-2 gap-2 md:grid-cols-2 lg:grid-cols-3">
                {recommendations.map((item, index) => (
                  <CartCard
                    key={index}
                    product={item}
                    handleAddToCart={handleAddToCart}
                    setSelectedProduct={setSelectedProduct}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="mt-4 md:mt-0 md:w-1/4">
            <div className="rounded-lg border bg-white p-2 shadow-md">
              <h2 className="mb-2 text-lg font-semibold">Order Summary</h2>
              <p className="text-sm">Total Price: ${getTotalPrice()}</p>
              <Link
                href="/checkout"
                className="mt-2 block w-full rounded bg-blue-500 py-2 text-center text-white"
              >
                Proceed to Checkout
              </Link>
              <div className="mt-2 text-center">
                <p className="text-xs">
                  By placing your order, you agree to our Terms and Conditions.
                </p>
                <div className="mt-2 flex justify-center space-x-2">
                  <FaCcVisa size={32} />
                  <FaCcMastercard size={32} />
                  <FaCcPaypal size={32} />
                </div>
              </div>
            </div>
            <div className="mt-4 rounded-lg border bg-white p-2 shadow-md">
              <h2 className="mb-2 text-lg font-semibold">Need Assistance?</h2>
              <p className="text-sm">
                Contact our support team for help with your order.
              </p>
              <button className="mt-2 rounded bg-green-500 px-2 py-1 text-sm text-white">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>

      {selectedProduct && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div
            className="absolute h-full w-full bg-black bg-opacity-50"
            onClick={() => setSelectedProduct(null)}
          />
          <div className="z-50 max-h-screen max-w-2xl overflow-auto rounded-md bg-white p-4 shadow-lg">
            <div className="flex w-80 flex-col">
              <div className="relative w-full">
                <div className="overflow-hidden">
                  {selectedProduct.images.map((src, index) => (
                    <div
                      key={index}
                      className={`relative h-[40vh] w-full transition-transform ${
                        index === currentSlide
                          ? "translate-x-0"
                          : "translate-x-full"
                      }`}
                      style={{
                        display: index === currentSlide ? "block" : "none",
                      }}
                    >
                      <Image
                        src={src}
                        alt={`Product Image ${index + 1}`}
                        className="object-cover"
                        width={350}
                        height={500}
                      />
                    </div>
                  ))}
                </div>
                <div className="absolute left-0 top-1/2 flex h-full w-full -translate-y-1/2 transform items-center justify-between">
                  <button
                    onClick={handlePrevSlide}
                    className="text-gray absolute left-0 h-full w-1/2 p-2"
                  >
                    <FaArrowLeft size={16} />
                  </button>
                  <button
                    onClick={handleNextSlide}
                    className="absolute right-0 h-full w-1/2 p-2 text-black"
                  >
                    <FaArrowRight
                      size={16}
                      className="absolute right-2 top-1/2 -translate-y-1/2 transform"
                    />
                  </button>
                </div>
                <div className="mt-2 flex justify-center">
                  {selectedProduct.images.map((_, index) => (
                    <div
                      key={index}
                      className={`mx-1 h-2 w-2 rounded-full ${
                        index === currentSlide ? "bg-black" : "bg-gray-300"
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
              <h1 className="text-md mt-4 font-medium">
                {selectedProduct.name}
              </h1>

              <p className="mt-2 text-sm text-gray-700">
                ${selectedProduct.price}
              </p>
              <span className="mt-4 text-sm font-medium">Color</span>
              <div className="mt-2 grid grid-cols-8 gap-2">
                {selectedProduct.colors.map((colorObj, index) => (
                  <div
                    key={index}
                    className={
                      "relative h-8 w-8 cursor-pointer rounded-full border-2 border-gray-200"
                    }
                    style={{ backgroundColor: colorObj }}
                    onClick={() => handleColorClick(colorObj)}
                  >
                    {selectedColor === colorObj && (
                      <span
                        className="absolute inset-0 flex items-center justify-center"
                        style={{ color: "white" }}
                      >
                        <FaCheck size={16} />
                      </span>
                    )}
                  </div>
                ))}
              </div>
              <span className="mt-4 text-sm font-medium">Sizes</span>
              <div className="mt-2 grid grid-cols-6 gap-2">
                {selectedProduct.sizes.map((size) => (
                  <button
                    key={size}
                    className={`border p-2 text-xs ${
                      selectedSize === size ? "bg-black text-white" : ""
                    }`}
                    onClick={() => handleSizeClick(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>

              <div className="flex items-center justify-between py-2">
                <span></span>
                <div className="flex items-center gap-4">
                  <button
                    onClick={handleDecreaseQuantity}
                    className="flex h-10 w-10 items-center justify-center text-xl font-bold"
                  >
                    −
                  </button>
                  <span className="w-6 text-center text-sm">{quantity}</span>
                  <button
                    onClick={handleIncreaseQuantity}
                    className="flex h-10 w-10 items-center justify-center text-xl font-bold"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => handleAddToCart(selectedProduct)}
                className={button.save}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
