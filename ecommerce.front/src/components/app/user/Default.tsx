"use client";

import React from "react";
import Image from "next/image";
import {
  FaShoppingCart,
  FaTruck,
  FaHeart,
  FaMedal,
  FaGift,
  FaRegClock,
} from "react-icons/fa";

const Default: React.FC = () => {
  const userName = "Jared Diamond";
  const userRank = "VIP Member"; // 유저 등급 예시 데이터
  const recentPurchases = [
    {
      image:
        "https://images.pexels.com/photos/22944590/pexels-photo-22944590.jpeg",
      name: "Product 1",
      date: "2024-07-01",
    },
    {
      image:
        "https://images.pexels.com/photos/23172134/pexels-photo-23172134.jpeg",
      name: "Product 2",
      date: "2024-06-15",
    },
  ];

  return (
    <div className="min-h-[70vh] px-8 md:px-0">
      <div className="mb-6 rounded-md bg-purple-100 p-10 shadow-md">
        <h1 className="text-2xl font-bold">Salut, {userName}!</h1>
        <div className="mt-2">
          <h2 className="mb-4 flex items-center text-xl font-semibold">
            <span className="inline-flex items-center rounded bg-blue-600 px-2 py-1 text-sm font-medium text-white">
              <FaMedal className="mr-1" /> {userRank}
            </span>
          </h2>
        </div>
      </div>

      <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="flex items-center justify-center rounded-md bg-yellow-100 p-6">
          <FaGift className="mr-2 text-2xl text-yellow-600" />
          <div className="flex items-center gap-2">
            <p className="text-xl font-bold">3</p>
            <p className="text-sm text-gray-600">
              Offres spéciales disponibles
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center rounded-md bg-blue-100 p-6">
          <FaRegClock className="mr-2 text-2xl text-blue-600" />
          <div className="flex items-center gap-2">
            <p className="text-xl font-bold">2</p>
            <p className="text-sm text-gray-600">Livraisons en attente</p>
          </div>
        </div>
        <div className="flex items-center justify-center rounded-md bg-pink-100 p-6">
          <FaHeart className="mr-2 text-2xl text-pink-600" />
          <div className="flex items-center gap-2">
            <p className="text-xl font-bold">10</p>
            <p className="text-sm text-gray-600">
              Articles dans votre liste de souhaits
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Default;
