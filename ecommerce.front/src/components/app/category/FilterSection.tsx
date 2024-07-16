"use client";

import { FC, useState, ChangeEvent } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface FilterProps {
  filters: { sort: string; minPrice: string; maxPrice: string };
  handleFilterChange: (
    e: ChangeEvent<HTMLSelectElement | HTMLInputElement>,
  ) => void;
}

const FilterSection: FC<FilterProps> = ({ filters, handleFilterChange }) => {
  const [isSortExpanded, setIsSortExpanded] = useState(false);
  const [isMinPriceExpanded, setIsMinPriceExpanded] = useState(false);
  const [isMaxPriceExpanded, setIsMaxPriceExpanded] = useState(false);

  const toggleSortExpand = () => {
    setIsSortExpanded(!isSortExpanded);
  };

  const toggleMinPriceExpand = () => {
    setIsMinPriceExpanded(!isMinPriceExpanded);
  };

  const toggleMaxPriceExpand = () => {
    setIsMaxPriceExpanded(!isMaxPriceExpanded);
  };

  return (
    <div className="absolute mt-2 h-full w-full bg-white p-6 md:top-0">
      <h2 className="mb-10 text-xl font-semibold">Filters</h2>

      <div className="mb-4">
        <button
          onClick={toggleSortExpand}
          className="mb-2 flex w-full items-center justify-between text-gray-700 focus:outline-none"
        >
          <label htmlFor="sort" className="text-sm font-medium text-gray-700">
            Sort By
          </label>
          {isSortExpanded ? <FaChevronUp /> : <FaChevronDown />}
        </button>
        <div
          className={`transition-max-height duration-500 ease-in-out ${
            isSortExpanded ? "max-h-screen" : "max-h-0 overflow-hidden"
          }`}
        >
          <select
            id="sort"
            name="sort"
            className="w-full rounded-md border p-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleFilterChange}
            value={filters.sort}
          >
            <option value="price_asc">Price: Low to High</option>
            <option value="price_desc">Price: High to Low</option>
          </select>
        </div>
        <hr className="mt-4" />
      </div>

      <div className="mb-4">
        <button
          onClick={toggleMinPriceExpand}
          className="mb-2 flex w-full items-center justify-between text-gray-700 focus:outline-none"
        >
          <label
            htmlFor="minPrice"
            className="text-sm font-medium text-gray-700"
          >
            Min Price
          </label>
          {isMinPriceExpanded ? <FaChevronUp /> : <FaChevronDown />}
        </button>
        <div
          className={`transition-max-height duration-500 ease-in-out ${
            isMinPriceExpanded ? "max-h-screen" : "max-h-0 overflow-hidden"
          }`}
        >
          <input
            type="number"
            id="minPrice"
            name="minPrice"
            className="w-full rounded-md border p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleFilterChange}
            value={filters.minPrice}
          />
        </div>
        <hr className="mt-4" />
      </div>

      <div className="mb-4">
        <button
          onClick={toggleMaxPriceExpand}
          className="mb-2 flex w-full items-center justify-between text-gray-700 focus:outline-none"
        >
          <label
            htmlFor="maxPrice"
            className="text-sm font-medium text-gray-700"
          >
            Max Price
          </label>
          {isMaxPriceExpanded ? <FaChevronUp /> : <FaChevronDown />}
        </button>
        <div
          className={`transition-max-height duration-500 ease-in-out ${
            isMaxPriceExpanded ? "max-h-screen" : "max-h-0 overflow-hidden"
          }`}
        >
          <input
            type="number"
            id="maxPrice"
            name="maxPrice"
            className="w-full rounded-md border p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleFilterChange}
            value={filters.maxPrice}
          />
        </div>
        <hr className="mt-4" />
      </div>
    </div>
  );
};

export default FilterSection;
