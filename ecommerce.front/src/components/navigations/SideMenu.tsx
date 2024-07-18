"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { IoMdClose, IoIosArrowForward } from "react-icons/io";

interface Product {
  id: number;
  name: string;
  image: string;
  date: string;
}

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const getRandomDate = () => {
  const start = new Date(2023, 0, 1);
  const end = new Date();
  const date = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime()),
  );
  return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
};

const initialProducts: Product[] = [
  { id: 1, name: "Product 1", image: "/product1.jpg", date: getRandomDate() },
  { id: 2, name: "Product 2", image: "/product2.jpg", date: getRandomDate() },
  { id: 3, name: "Product 3", image: "/product3.jpg", date: getRandomDate() },
  { id: 4, name: "Product 4", image: "/product4.jpg", date: getRandomDate() },
  { id: 5, name: "Product 5", image: "/product5.jpg", date: getRandomDate() },
  { id: 6, name: "Product 6", image: "/product6.jpg", date: getRandomDate() },
  { id: 7, name: "Product 7", image: "/product7.jpg", date: getRandomDate() },
  { id: 8, name: "Product 8", image: "/product8.jpg", date: getRandomDate() },
];

const SideMenu: React.FC<SideMenuProps> = ({ isOpen, onClose }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // 클라이언트에서만 초기 데이터를 설정
    setProducts(initialProducts);
  }, []);

  const handleRemove = (id: number) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const groupedProducts = products.reduce(
    (acc, product) => {
      if (!acc[product.date]) {
        acc[product.date] = [];
      }
      acc[product.date].push(product);
      return acc;
    },
    {} as { [date: string]: Product[] },
  );

  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? "block" : "hidden"}`}>
      <div
        className="absolute left-[-15px] h-full w-full bg-gray-800 bg-opacity-10"
        onClick={onClose}
      />
      <div className="absolute right-0 h-full w-96 bg-white shadow-lg">
        <nav className="flex items-center justify-between border-b p-4 py-10">
          <div className="flex items-center gap-4">
            <h2 className="text-lg font-semibold">Recently Viewed</h2>

            <Link
              href="/wishlist"
              className="flex items-center gap-2 text-xs"
              onClick={onClose}
            >
              <span>Wishlist</span>
              <IoIosArrowForward />
            </Link>
          </div>
          <button className="text-gray-600" onClick={onClose}>
            <IoMdClose size={24} />
          </button>
        </nav>
        <div className="h-[85vh] overflow-y-auto p-4">
          {Object.keys(groupedProducts).map((date) => (
            <div key={date} className="mb-6">
              <h3 className="mb-2 text-sm font-semibold text-gray-700">
                {date}
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {groupedProducts[date].map((product) => (
                  <div
                    key={product.id}
                    className="h-30 w-30 relative flex cursor-pointer flex-col items-center justify-between border p-2 hover:border-black"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-20 w-20 object-cover"
                    />
                    <button
                      className="absolute right-2 top-2 text-gray-600"
                      onClick={() => handleRemove(product.id)}
                    >
                      <IoMdClose size={16} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
