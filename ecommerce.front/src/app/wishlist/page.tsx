"use client";

import React from "react";

const WishlistPage: React.FC = () => {
  return (
    <div className="xl:px-34 relative left-0 top-0 z-50 min-h-screen bg-white px-4 md:px-8 lg:px-24 2xl:px-64">
      <div className="container py-5">
        <h1 className="mx-auto mb-10 w-full text-center text-2xl font-semibold">
          Wishlist
        </h1>
        <div className="flex flex-col gap-2 md:flex-row md:justify-between">
          <div className="md:w-3/4"></div>
        </div>
      </div>
    </div>
  );
};

export default WishlistPage;
