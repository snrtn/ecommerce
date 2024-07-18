"use client";

import React from "react";
import Link from "next/link";
import { FaCcVisa, FaCcMastercard, FaCcPaypal } from "react-icons/fa";

interface OrderSummaryProps {
  totalPrice: number;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ totalPrice }) => {
  return (
    <div className="mt-10 rounded-lg border bg-white p-2 px-8 py-6 shadow-md md:mt-0 md:px-4">
      <h2 className="mb-2 text-lg font-semibold">Order Summary</h2>
      <div className="text-md flex items-center justify-between border-t py-4 font-medium">
        <p>Total TTC:</p>
        <p>${totalPrice}</p>
      </div>
      <Link
        href="/checkout"
        className="mt-2 block w-full rounded bg-black py-2 text-center text-white"
      >
        Proceed to Checkout
      </Link>
      <div className="mt-2 text-center">
        <p className="text-xs">
          By placing your order, you agree to our Terms and Conditions.
        </p>
        <div className="mt-2 flex justify-center space-x-2">
          <FaCcVisa size={32} />
          <FaCcMastercard size={32} />
          <FaCcPaypal size={32} />
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
