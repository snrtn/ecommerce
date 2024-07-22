"use client";

import React from "react";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Product } from "./types";
import { button } from "@/components/common/styles";

interface ProductModalProps {
  selectedProduct: Product;
  setSelectedProduct: (product: Product | null) => void;
  selectedColor: string | null;
  selectedSize: number | null;
  quantity: number;
  currentSlide: number;
  handleColorClick: (color: string) => void;
  handleSizeClick: (size: number) => void;
  handleIncreaseQuantity: () => void;
  handleDecreaseQuantity: () => void;
  handlePrevSlide: () => void;
  handleNextSlide: () => void;
  handleAddToCart: (product: Product) => void;
}

const ProductModal: React.FC<ProductModalProps> = ({
  selectedProduct,
  setSelectedProduct,
  selectedColor,
  selectedSize,
  quantity,
  currentSlide,
  handleColorClick,
  handleSizeClick,
  handleIncreaseQuantity,
  handleDecreaseQuantity,
  handlePrevSlide,
  handleNextSlide,
  handleAddToCart,
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div
        className="absolute h-full w-full bg-black bg-opacity-50"
        onClick={() => setSelectedProduct(null)}
      />
      <div className="z-50 max-h-screen max-w-2xl overflow-auto rounded-md bg-white p-4 shadow-lg">
        <div className="flex w-80 flex-col md:w-96">
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
                    width={400}
                    height={600}
                  />
                </div>
              ))}
            </div>
            <div className="absolute left-0 top-1/2 flex h-full w-full -translate-y-1/2 transform items-center justify-between">
              <button
                onClick={handlePrevSlide}
                className="text-gray absolute left-0 h-full w-1/2 cursor-pointer p-2"
              >
                <IoIosArrowBack size={16} />
              </button>
              <button
                onClick={handleNextSlide}
                className="absolute right-0 h-full w-1/2 cursor-pointer p-2 text-black"
              >
                <IoIosArrowForward
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
          <h1 className="text-md mt-4 truncate overflow-ellipsis whitespace-nowrap font-medium">
            {selectedProduct.name}
          </h1>

          <p className="mt-2 text-sm text-gray-700">${selectedProduct.price}</p>
          <div>
            <div className="mt-4 flex items-center gap-4">
              <span className="text-sm font-medium">Color :</span>
              <div className="grid grid-cols-8 gap-2">
                {selectedProduct.colors.map((colorObj, index) => (
                  <div
                    key={index}
                    className={
                      "relative h-6 w-6 cursor-pointer rounded-full border-2 border-gray-200"
                    }
                    style={{ backgroundColor: colorObj }}
                    onClick={() => handleColorClick(colorObj)}
                  >
                    {selectedColor === colorObj && (
                      <span
                        className="absolute inset-0 flex items-center justify-center"
                        style={{ color: "black" }}
                      >
                        <FaCheck size={10} />
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-2 flex flex-col">
              <span className="text-sm font-medium">Sizes</span>
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
            </div>
          </div>

          <div className="flex items-center justify-between pt-4">
            <div className="flex items-center gap-2">
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
            <button
              onClick={() => handleAddToCart(selectedProduct)}
              className={button.save}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
