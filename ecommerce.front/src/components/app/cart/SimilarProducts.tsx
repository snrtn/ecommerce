"use client";

import React, { useState, useEffect } from "react";
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
  const [isMobile, setIsMobile] = useState(false);
  const [itemsToShow, setItemsToShow] = useState(isMobile ? 4 : 6);
  const [items, setItems] = useState<Product[]>(
    recommendations.slice(0, itemsToShow),
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth <= 768);

      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
        setItemsToShow(window.innerWidth <= 768 ? 4 : 6);
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  useEffect(() => {
    setItems(recommendations.slice(0, itemsToShow));
  }, [itemsToShow, recommendations]);

  const loadMore = () => {
    const moreItems = isMobile ? 4 : 6;
    setItemsToShow((prev) => prev + moreItems);
  };

  return (
    <div className="border-t pt-8">
      <h2 className="text-lg font-semibold">Similar Products</h2>
      <div className="mt-2 grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-6">
        {items.map((item, index) => (
          <CartCard
            key={index}
            product={item}
            handleAddToCart={handleAddToCart}
            setSelectedProduct={setSelectedProduct}
          />
        ))}
      </div>
      {itemsToShow < recommendations.length && (
        <div className="mt-20 text-center">
          <button className="text-gray-500" onClick={loadMore}>
            See More
          </button>
        </div>
      )}
    </div>
  );
};

export default SimilarProducts;
