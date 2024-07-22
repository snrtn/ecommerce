"use client";

import React, { useState } from "react";
import {
  FaGift,
  FaClock,
  FaHome,
  FaTruck,
  FaCheck,
  FaExchangeAlt,
  FaUndoAlt,
  FaRegMoneyBillAlt,
  FaDollarSign,
} from "react-icons/fa";
import Addresse from "@/components/app/user/Addresse";
import Coupons from "@/components/app/user/Coupons";
import OrderHistory from "@/components/app/user/OrderHistory";
import Receipts from "@/components/app/user/Receipts";
import Payment from "@/components/app/user/Payment";
import Security from "@/components/app/user/Security";
import Gallery from "@/components/app/user/Gallery";
import Consulting from "@/components/app/user/Consulting";
import Notifications from "@/components/app/user/Notifications";
import Support from "@/components/app/user/Support";
import Logout from "@/components/app/user/Logout";
import Sidebar from "@/components/app/user/Sidebar";
import Default from "@/components/app/user/Default";

const UserPage = () => {
  const [activeSection, setActiveSection] = useState("default");
  const [selectedYear, setSelectedYear] = useState("2024");

  const handleSectionClick = (section: string) => {
    setActiveSection(section);
  };

  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(event.target.value);
  };

  const activeCoupons = 5;
  const expiringCoupons = 2;
  const defaultAddress = "123 Main St 123 Main St,";

  const orderStatusCounts = {
    inTransit: 2,
    delivered: 3,
    returnRequested: 1,
    returnCompleted: 1,
    refundRequested: 1,
    refundCompleted: 1,
  };

  const years = ["2022", "2023", "2024"];

  return (
    <div className="flex flex-col gap-4 md:flex-row md:px-8 lg:px-16 xl:px-32 2xl:px-48">
      <div className="mt-10 w-full md:my-10 md:w-1/6">
        <Sidebar
          setActiveSection={handleSectionClick}
          activeSection={activeSection}
        />
      </div>

      <div className="mt-0 h-full w-full md:mt-10 md:w-5/6">
        {activeSection === "default" && (
          <>
            <div className="px-4 md:px-0">
              <div className="mb-6 flex flex-col items-center justify-between rounded-md bg-gray-50 px-10 py-12 md:flex-row md:px-12">
                <div className="flex flex-col items-center justify-center md:items-start md:gap-2">
                  <p className="text-md font-medium md:text-lg">
                    Hello, Naoya Fujita
                  </p>
                  <span className="mt-2 flex items-center gap-1 text-xs md:mt-0">
                    <FaHome size={12} />
                    <span className="hidden md:flex">
                      Default Address :
                    </span>{" "}
                    <span>{defaultAddress}</span>
                  </span>
                </div>
                <div className="mt-10 flex items-center md:mt-0">
                  <label
                    htmlFor="year-select"
                    className="mr-2 text-xs md:text-sm"
                  >
                    Select Year :
                  </label>
                  <select
                    id="year-select"
                    value={selectedYear}
                    onChange={handleYearChange}
                    className="border-none bg-transparent text-xs md:text-sm"
                  >
                    {years.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <h1 className="mb-10 mt-16 w-full text-center text-xl font-semibold md:mt-20">
              Coupons
            </h1>
            <div className="mb-6 grid grid-cols-2 gap-4 px-4 md:grid-cols-3 md:px-0">
              <div className="flex cursor-pointer flex-col items-center justify-center gap-4 rounded-md border py-10 transition-colors duration-500 hover:bg-gray-200 hover:font-medium hover:text-black md:py-20">
                <div className="flex flex-col items-center gap-2">
                  <FaGift size={30} className="transition-colors" />
                  <p className="md:text-md text-sm transition-colors">
                    Active Coupons
                  </p>
                </div>
                <p className="md:text-md text-sm">{activeCoupons}</p>
              </div>
              <div className="flex cursor-pointer flex-col items-center justify-center gap-4 rounded-md border py-10 transition-colors duration-500 hover:bg-gray-200 hover:font-medium hover:text-black md:py-20">
                <div className="flex flex-col items-center gap-2">
                  <FaClock size={30} className="transition-colors" />
                  <p className="md:text-md text-sm transition-colors">
                    Expiring Coupons
                  </p>
                </div>
                <p className="md:text-md text-sm">{expiringCoupons}</p>
              </div>
            </div>

            <h1 className="mb-10 mt-20 w-full text-center text-xl font-semibold">
              Shipping
            </h1>
            <div className="mb-6 grid grid-cols-2 gap-4 px-4 md:grid-cols-3 md:px-0">
              <div className="flex cursor-pointer flex-col items-center justify-center gap-4 rounded-md border py-10 transition-colors duration-500 hover:bg-gray-200 hover:font-medium hover:text-black md:py-20">
                <div className="flex flex-col items-center gap-2">
                  <FaTruck size={30} className="transition-colors" />
                  <p className="md:text-md text-sm transition-colors">
                    In Transit
                  </p>
                </div>
                <p className="md:text-md text-sm">
                  {orderStatusCounts.inTransit}
                </p>
              </div>
              <div className="flex cursor-pointer flex-col items-center justify-center gap-4 rounded-md border py-10 transition-colors duration-500 hover:bg-gray-200 hover:font-medium hover:text-black md:py-20">
                <div className="flex flex-col items-center gap-2">
                  <FaCheck size={30} className="transition-colors" />
                  <p className="md:text-md text-sm transition-colors">
                    Delivered
                  </p>
                </div>
                <p className="md:text-md text-sm">
                  {orderStatusCounts.delivered}
                </p>
              </div>
            </div>

            <h1 className="mb-10 mt-20 w-full text-center text-xl font-semibold">
              Return & Refund
            </h1>
            <div className="mb-6 grid grid-cols-2 gap-4 px-4 md:grid-cols-4 md:px-0">
              <div className="flex cursor-pointer flex-col items-center justify-center gap-4 rounded-md border py-10 transition-colors duration-500 hover:bg-gray-200 hover:font-medium hover:text-black md:py-20">
                <div className="flex flex-col items-center gap-2">
                  <FaExchangeAlt size={30} className="transition-colors" />
                  <p className="md:text-md text-sm transition-colors">
                    Return Requested
                  </p>
                </div>
                <p className="md:text-md text-sm">
                  {orderStatusCounts.returnRequested}
                </p>
              </div>
              <div className="flex cursor-pointer flex-col items-center justify-center gap-4 rounded-md border py-10 transition-colors duration-500 hover:bg-gray-200 hover:font-medium hover:text-black md:py-20">
                <div className="flex flex-col items-center gap-2">
                  <FaUndoAlt size={30} className="transition-colors" />
                  <p className="md:text-md text-sm transition-colors">
                    Return Completed
                  </p>
                </div>
                <p className="md:text-md text-sm">
                  {orderStatusCounts.returnCompleted}
                </p>
              </div>
              <div className="flex cursor-pointer flex-col items-center justify-center gap-4 rounded-md border py-10 transition-colors duration-500 hover:bg-gray-200 hover:font-medium hover:text-black md:py-20">
                <div className="flex flex-col items-center gap-2">
                  <FaRegMoneyBillAlt size={30} className="transition-colors" />
                  <p className="md:text-md text-sm transition-colors">
                    Refund Requested
                  </p>
                </div>
                <p className="md:text-md text-sm">
                  {orderStatusCounts.refundRequested}
                </p>
              </div>
              <div className="flex cursor-pointer flex-col items-center justify-center gap-4 rounded-md border py-10 transition-colors duration-500 hover:bg-gray-200 hover:font-medium hover:text-black md:py-20">
                <div className="flex flex-col items-center gap-2">
                  <FaDollarSign size={30} className="transition-colors" />
                  <p className="md:text-md text-sm transition-colors">
                    Refund Completed
                  </p>
                </div>
                <p className="md:text-md text-sm">
                  {orderStatusCounts.refundCompleted}
                </p>
              </div>
            </div>
            <h1 className="mb-10 mt-20 w-full text-center text-xl font-semibold">
              User Log
            </h1>
          </>
        )}

        {activeSection === "default" && (
          <section id="default">
            <Default setActiveSection={setActiveSection} />
          </section>
        )}
        {activeSection === "personal-info" && (
          <section id="personal-info">
            <Addresse />
          </section>
        )}
        {activeSection === "coupons" && (
          <section id="coupons">
            <Coupons />
          </section>
        )}
        {activeSection === "order-history" && (
          <section id="order-history">
            <OrderHistory />
          </section>
        )}
        {activeSection === "documents-receipts" && (
          <section id="documents-receipts">
            <Receipts />
          </section>
        )}
        {activeSection === "payment-info" && (
          <section id="payment-info">
            <Payment />
          </section>
        )}
        {activeSection === "security-settings" && (
          <section id="security-settings">
            <Security />
          </section>
        )}
        {activeSection === "reviews-ratings" && (
          <section id="reviews-ratings">
            <Gallery />
          </section>
        )}
        {activeSection === "consulting" && (
          <section id="consulting">
            <Consulting />
          </section>
        )}
        {activeSection === "notifications" && (
          <section id="notifications">
            <Notifications />
          </section>
        )}
        {activeSection === "help-support" && (
          <section id="help-support">
            <Support />
          </section>
        )}
        {activeSection === "logout" && (
          <section id="logout">
            <Logout />
          </section>
        )}
      </div>
    </div>
  );
};

export default UserPage;
