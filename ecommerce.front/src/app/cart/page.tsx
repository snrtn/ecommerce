"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CartItem from "@/components/app/cart/CartItem";
import OrderSummary from "@/components/app/cart/OrderSummary";
import SimilarProducts from "@/components/app/cart/SimilarProducts";
import ProductModal from "@/components/app/cart/ProductModal";
import { initialProducts } from "@/components/app/infiniteView.data";
import { Product } from "@/components/app/cart/types";

const CartPage = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleQuantityChange = (
    id: number,
    amount: number,
    size: number,
    color: string,
  ) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.size === size && item.color === color
          ? { ...item, quantity: item.quantity + amount }
          : item,
      ),
    );
  };

  const handleRemoveItem = (id: number, size: number, color: string) => {
    setCartItems((prevItems) =>
      prevItems.filter(
        (item) =>
          !(item.id === id && item.size === size && item.color === color),
      ),
    );
  };

  const handleAddToCart = (item: Product) => {
    if (selectedSize !== null && selectedColor !== null) {
      setCartItems((prevItems) => {
        const existingItem = prevItems.find(
          (cartItem) =>
            cartItem.id === item.id &&
            cartItem.size === selectedSize &&
            cartItem.color === selectedColor,
        );
        if (existingItem) {
          return prevItems.map((cartItem) =>
            cartItem.id === item.id &&
            cartItem.size === selectedSize &&
            cartItem.color === selectedColor
              ? {
                  ...cartItem,
                  quantity: cartItem.quantity + quantity,
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
    }
  };

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
  };

  const getRecommendations = () => {
    return initialProducts
      .slice(0, 10)
      .map((product) => ({ ...product, size: product.sizes[0] })); // size 속성을 추가합니다.
  };

  const recommendations = getRecommendations();

  const handleColorClick = (color: string) => {
    setSelectedColor(color);
  };

  const handleSizeClick = (size: number) => {
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
      prevSlide === 0 ? selectedProduct!.images.length - 1 : prevSlide - 1,
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === selectedProduct!.images.length - 1 ? 0 : prevSlide + 1,
    );
  };

  return (
    <div className="xl:px-34 z-50min-h-screen relative left-0 top-0 bg-white px-4 py-2 pb-40 md:px-8 lg:px-24 2xl:px-64">
      <div className="container py-5">
        <div className="mb-8 flex items-center justify-between">
          <Link href="/" className="ml-4 flex items-center">
            <div className="text-xl font-semibold">KIM</div>
          </Link>
        </div>
        <h1 className="mx-auto my-20 w-full text-center text-2xl font-semibold">
          Shopping Cart
        </h1>
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div className="md:w-3/4">
            {cartItems.length === 0 ? (
              <p className="md:text-md py-20 text-center text-xs">
                No items in the cart. Please select products to purchase.
              </p>
            ) : (
              cartItems.map((item) => (
                <CartItem
                  key={`${item.id}-${item.size}-${item.color}`}
                  item={item}
                  handleQuantityChange={(id, amount) =>
                    handleQuantityChange(id, amount, item.size, item.color)
                  }
                  handleRemoveItem={() =>
                    handleRemoveItem(item.id, item.size, item.color)
                  }
                />
              ))
            )}
            <SimilarProducts
              recommendations={recommendations}
              handleAddToCart={handleAddToCart}
              setSelectedProduct={setSelectedProduct}
            />
          </div>
          <div className="mt-4 md:mt-0 md:w-1/4">
            <OrderSummary totalPrice={getTotalPrice()} />
            <div className="mt-4 flex flex-col items-center rounded-lg border bg-white p-2 px-8 py-8 text-center shadow-md md:px-8">
              <h2 className="mb-2 text-lg font-semibold">Need Assistance?</h2>
              <p className="text-sm">
                Contact our support team for help with your order.
              </p>
              <button className="mt-2 rounded bg-black px-2 py-1 text-sm text-white">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>

      {selectedProduct && (
        <ProductModal
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
          selectedColor={selectedColor}
          selectedSize={selectedSize}
          quantity={quantity}
          currentSlide={currentSlide}
          handleColorClick={handleColorClick}
          handleSizeClick={handleSizeClick}
          handleIncreaseQuantity={handleIncreaseQuantity}
          handleDecreaseQuantity={handleDecreaseQuantity}
          handlePrevSlide={handlePrevSlide}
          handleNextSlide={handleNextSlide}
          handleAddToCart={handleAddToCart}
        />
      )}
    </div>
  );
};

export default CartPage;
