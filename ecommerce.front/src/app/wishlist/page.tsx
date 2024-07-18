"use client";

import React, { useState, useEffect } from "react";

const initialWishlistItems = Array(50)
  .fill(null)
  .map((_, index) => ({
    id: index + 1,
    name: `Wishlist Item ${index + 1}`,
    image: `https://via.placeholder.com/150?text=Item+${index + 1}`,
  }));

const initialRecommendations = Array(50)
  .fill(null)
  .map((_, index) => ({
    id: index + 1,
    name: `Recommended Item ${index + 1}`,
    image: `https://via.placeholder.com/150?text=Recommended+Item+${index + 1}`,
  }));

const WishlistPage: React.FC = () => {
  const [wishlistItems, setWishlistItems] = useState(
    initialWishlistItems.slice(0, 15),
  );
  const [recommendations, setRecommendations] = useState(
    initialRecommendations.slice(0, 15),
  );
  const [showMoreWishlistItems, setShowMoreWishlistItems] = useState(15);
  const [showMoreRecommendations, setShowMoreRecommendations] = useState(15);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth <= 768);

      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const loadMoreWishlistItems = () => {
    const itemsToLoad = isMobile ? 14 : 15;
    setShowMoreWishlistItems((prev) => prev + itemsToLoad);
    setWishlistItems(
      initialWishlistItems.slice(0, showMoreWishlistItems + itemsToLoad),
    );
  };

  const loadMoreRecommendations = () => {
    const itemsToLoad = isMobile ? 14 : 15;
    setShowMoreRecommendations((prev) => prev + itemsToLoad);
    setRecommendations(
      initialRecommendations.slice(0, showMoreRecommendations + itemsToLoad),
    );
  };

  return (
    <div className="xl:px-34 relative left-0 top-0 z-30 mt-10 min-h-screen bg-white px-4 md:mt-24 md:px-8 lg:px-24 2xl:px-64">
      <div className="container py-5">
        <h1 className="mx-auto mb-10 w-full text-center text-2xl font-semibold">
          Wishlist
        </h1>
        <div className="flex flex-col gap-2 md:flex-row md:justify-between">
          <div className="md:w-full">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {wishlistItems.map((item) => (
                <div key={item.id} className="border p-2">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-70 mb-2 w-full object-cover"
                  />
                  <p className="text-center">{item.name}</p>
                </div>
              ))}
            </div>
            {showMoreWishlistItems < initialWishlistItems.length && (
              <div className="mb-10 mt-20 text-center">
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
        <h2 className="mx-auto mb-10 mt-20 w-full text-center text-2xl font-semibold">
          Recommended Items
        </h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {recommendations.map((item) => (
            <div key={item.id} className="border p-2">
              <img
                src={item.image}
                alt={item.name}
                className="h-70 mb-2 w-full object-cover"
              />
              <p className="text-center">{item.name}</p>
            </div>
          ))}
        </div>
        {showMoreRecommendations < initialRecommendations.length && (
          <div className="mb-10 mt-20 text-center">
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
