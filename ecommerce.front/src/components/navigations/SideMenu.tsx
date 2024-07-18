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
  const dates = [
    "1.1.2024",
    "15.2.2024",
    "3.3.2024",
    "10.4.2024",
    "20.5.2024",
    "5.6.2024",
    "18.6.2024",
    "29.6.2024",
  ];
  return dates[Math.floor(Math.random() * dates.length)];
};

const generateProducts = (count: number): Product[] =>
  Array(count)
    .fill(null)
    .map((_, index) => ({
      id: index + 1,
      name: `Product ${index + 1}`,
      image: `https://via.placeholder.com/150?text=Product+${index + 1}`,
      date: getRandomDate(),
    }));

const initialProducts = generateProducts(50);

const SideMenu: React.FC<SideMenuProps> = ({ isOpen, onClose }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
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
                {groupedProducts[date]
                  .slice(0, Math.random() < 0.5 ? 10 : 16)
                  .map((product) => (
                    <div
                      key={product.id}
                      className="h-30 w-30 group relative flex cursor-pointer flex-col items-center justify-between border hover:border-black"
                    >
                      <Link href={"/slug"}>
                        <img
                          src={product.image}
                          alt={product.name}
                          className="object-cover"
                          onClick={onClose}
                        />
                      </Link>
                      <button
                        className="absolute right-2 top-2 text-gray-600 opacity-0 group-hover:opacity-100"
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
