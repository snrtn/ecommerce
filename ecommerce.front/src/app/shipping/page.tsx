'use client';

import React, { useState, useEffect } from 'react';
import { Order } from '@/types/shipping.type';
import { generateOrders } from '@/data/shipping.data';
import OrderList from '@/components/app/shipping/OrderList';
import IssueButtons from '@/components/app/shipping/IssueButtons';
import { RiDeleteBack2Fill } from 'react-icons/ri';
import { CiSearch } from 'react-icons/ci';

const ShippingStatusPage: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [filteredOrders, setFilteredOrders] = useState<Order[]>([]);
  const [selectedYear, setSelectedYear] = useState<string>('2024');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const orders = generateOrders();
    setOrders(orders);
    setFilteredOrders(
      orders.filter((order) => order.orderDate.split('.')[2] === selectedYear),
    );
  }, [selectedYear]);

  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(event.target.value);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleClear = () => {
    setSearchTerm('');
  };

  const getUniqueYears = () => {
    const years = orders.map((order) => order.orderDate.split('.')[2]);
    return Array.from(new Set(years));
  };

  return (
    <div className="xl:px-34 relative left-0 top-0 min-h-screen bg-white px-4 md:px-8 lg:px-24 2xl:px-64">
      <div className="container">
        <div className="mb-10 mt-10 flex items-center justify-center">
          <h1 className="text-md font-medium md:text-xl">Shipping Status</h1>
        </div>
        <div className="mb-10 mt-10 flex items-center justify-center gap-10">
          <form
            className="flex w-60 items-center justify-between rounded-md border border-transparent bg-gray-100 px-4 py-2 transition-colors focus-within:border-black md:w-96"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input
              type="text"
              name="name"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Product"
              className="md:text-md flex-1 bg-transparent text-sm outline-none"
            />
            {searchTerm && (
              <button
                type="button"
                className="flex cursor-pointer items-center"
                onClick={handleClear}
              >
                <RiDeleteBack2Fill className="mr-2 text-xl text-black md:mr-4" />
              </button>
            )}
            <button type="submit" className="flex cursor-pointer items-center">
              <CiSearch className="text-xl text-gray-400" />
            </button>
          </form>
          <select
            value={selectedYear}
            onChange={handleYearChange}
            className="rounded border p-2"
          >
            {getUniqueYears().map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <OrderList orders={filteredOrders} />
        <h2 className="text-md mb-4 mt-20 text-center font-medium md:text-xl">
          Shipping Issues?
        </h2>
        <IssueButtons />
      </div>
    </div>
  );
};

export default ShippingStatusPage;
