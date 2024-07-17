"use client";

import React from "react";
import CartCard from "@/components/app/cart/CartCard";
import { Product } from "./types";

interface SimilarProductsProps {
  recommendations: Product[];
  handleAddToCart: (item: Product) => void;
  setSelectedProduct: (item: Product | null) => void;
}

const SimilarProducts: React.FC<SimilarProductsProps> = ({
  recommendations,
  handleAddToCart,
  setSelectedProduct,
}) => {
  return (
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
  );
};

export default SimilarProducts;
