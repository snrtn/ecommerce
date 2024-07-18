"use client";

import React, { useState, useEffect } from "react";
import useMediaQuery from "@/hooks/useMediaQuery";
import ProductCard from "@/components/app/category/ProductCard";
import { Product } from "@/components/app/cart/types";

const generateProducts = (count: number, prefix: string): Product[] =>
  Array(count)
    .fill(null)
    .map((_, index) => ({
      id: index + 1,
      name: `${prefix} Item ${index + 1}`,
      images: [
        `https://via.placeholder.com/150?text=${prefix}+${index + 1}`,
        `https://via.placeholder.com/150?text=${prefix}+${index + 1}+Alt1`,
        `https://via.placeholder.com/150?text=${prefix}+${index + 1}+Alt2`,
      ],
      price: 100 + index,
      quantity: 1,
      color: "#000",
      category: "category",
      colors: ["#000", "#FFF"],
      sizes: [36, 38, 40, 42],
      size: 36,
    }));

const initialWishlistItems = generateProducts(50, "Wishlist");
const initialRecommendations = generateProducts(50, "Recommended");

const WishlistPage: React.FC = () => {
  const isMobile = useMediaQuery(768);
  const initialItemsToLoad = isMobile ? 14 : 15;

  const [wishlistItems, setWishlistItems] = useState<Product[]>([]);
  const [recommendations, setRecommendations] = useState<Product[]>([]);
  const [showMoreWishlistItems, setShowMoreWishlistItems] =
    useState(initialItemsToLoad);
  const [showMoreRecommendations, setShowMoreRecommendations] =
    useState(initialItemsToLoad);

  useEffect(() => {
    const itemsToLoad = isMobile ? 14 : 15;
    setWishlistItems(initialWishlistItems.slice(0, itemsToLoad));
    setRecommendations(initialRecommendations.slice(0, itemsToLoad));
    setShowMoreWishlistItems(itemsToLoad);
    setShowMoreRecommendations(itemsToLoad);
  }, [isMobile]);

  const loadMoreWishlistItems = () => {
    setShowMoreWishlistItems((prev) => prev + (isMobile ? 14 : 15));
  };

  const loadMoreRecommendations = () => {
    setShowMoreRecommendations((prev) => prev + (isMobile ? 14 : 15));
  };

  useEffect(() => {
    setWishlistItems(initialWishlistItems.slice(0, showMoreWishlistItems));
  }, [showMoreWishlistItems]);

  useEffect(() => {
    setRecommendations(
      initialRecommendations.slice(0, showMoreRecommendations),
    );
  }, [showMoreRecommendations]);

  return (
    <div className="xl:px-34 relative left-0 top-0 mt-14 min-h-screen bg-white px-4 md:mt-24 md:px-8 lg:px-24 2xl:px-64">
      <div className="container py-5">
        <h1 className="text-md mx-auto mb-10 w-full text-center font-semibold md:text-xl">
          Wishlist
        </h1>
        <div className="flex flex-col gap-2 md:flex-row md:justify-between">
          <div className="md:w-full">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {wishlistItems.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
            {showMoreWishlistItems < initialWishlistItems.length && (
              <div className="my-10 text-center">
                <button
                  className="text-gray-500"
                  onClick={loadMoreWishlistItems}
                >
                  See More
                </button>
              </div>
            )}
          </div>
        </div>
        <h2 className="mx-auto mb-10 mt-40 w-full text-center text-2xl font-semibold">
          Recommended Items
        </h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {recommendations.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
        {showMoreRecommendations < initialRecommendations.length && (
          <div className="my-10 text-center">
            <button className="text-gray-500" onClick={loadMoreRecommendations}>
              See More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default WishlistPage;
