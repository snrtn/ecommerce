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
import useMediaQuery from "@/hooks/useMediaQuery";
import Default from "@/components/app/user/Default";

const UserPage = () => {
  const isMobile = useMediaQuery(768);
  const [activeSection, setActiveSection] = useState("default");
  const [selectedYear, setSelectedYear] = useState("2024");

  const handleSectionClick = (section: string) => {
    setActiveSection(section);
  };

  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(event.target.value);
  };

  const activeCoupons = 5; // Example data
  const expiringCoupons = 2; // Example data
  const defaultAddress = "123 Main St, Springfield, IL 62701, USA"; // Example data

  const orderStatusCounts = {
    inTransit: 2,
    delivered: 3,
    returnRequested: 1,
    returnCompleted: 1,
    refundRequested: 1,
    refundCompleted: 1,
  };

  const years = ["2022", "2023", "2024"]; // Example years

  return (
    <div className="flex flex-col gap-4 md:flex-row md:px-8 lg:px-16 xl:px-32 2xl:px-48">
      <div className="mt-10 w-full md:w-1/6">
        <Sidebar
          setActiveSection={handleSectionClick}
          activeSection={activeSection}
        />
      </div>

      <div className="mt-10 h-full w-full md:w-5/6">
        {activeSection === "default" && (
          <>
            <div className="mb-6 flex items-center justify-between px-8 md:px-0">
              <p className="text-lg font-medium">Hello, Name</p>
              <div className="flex items-center">
                <label htmlFor="year-select" className="mr-2 text-xs">
                  Select Year :
                </label>
                <select
                  id="year-select"
                  value={selectedYear}
                  onChange={handleYearChange}
                  className="border p-2"
                >
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mb-6 grid grid-cols-2 gap-4 px-8 md:px-0">
              <div className="flex flex-col items-center justify-center gap-2 border py-10 md:flex-row md:gap-4">
                <div className="flex flex-col items-center gap-0 md:flex-row md:gap-2">
                  <FaGift size={20} />
                  <p className="md:text-md text-sm font-medium">
                    Active Coupons
                  </p>
                </div>
                <p className="md:text-md text-sm">{activeCoupons}</p>
              </div>
              <div className="flex flex-col items-center justify-center gap-2 border py-10 md:flex-row md:gap-4">
                <div className="flex flex-col items-center gap-0 md:flex-row md:gap-2">
                  <FaClock size={20} />
                  <p className="md:text-md text-sm font-medium">
                    Expiring Soon Coupons
                  </p>
                </div>
                <p className="md:text-md text-sm">{expiringCoupons}</p>
              </div>
            </div>

            <div className="px-8 md:px-0">
              <div className="mb-6 flex flex-col items-center justify-center gap-2 border py-10 md:flex-row md:gap-4">
                <div className="flex flex-col items-center gap-0 md:flex-row md:gap-2">
                  <FaHome size={20} />
                  <p className="md:text-md text-sm font-medium">
                    Default Address
                  </p>
                </div>
                <p className="md:text-md text-sm">{defaultAddress}</p>
              </div>
            </div>

            <div className="mb-6 grid grid-cols-2 gap-4 px-8 md:px-0">
              <div className="flex flex-col items-center justify-center gap-2 border py-10 md:flex-row md:gap-4">
                <div className="flex flex-col items-center gap-0 md:flex-row md:gap-2">
                  <FaTruck size={20} />
                  <p className="md:text-md text-sm font-medium">In Transit</p>
                </div>
                <p className="md:text-md text-sm">
                  {orderStatusCounts.inTransit}
                </p>
              </div>
              <div className="flex flex-col items-center justify-center gap-2 border py-10 md:flex-row md:gap-4">
                <div className="flex flex-col items-center gap-0 md:flex-row md:gap-2">
                  <FaCheck size={20} />
                  <p className="md:text-md text-sm font-medium">Delivered</p>
                </div>
                <p className="md:text-md text-sm">
                  {orderStatusCounts.delivered}
                </p>
              </div>
              <div className="flex flex-col items-center justify-center gap-2 border py-10 md:flex-row md:gap-4">
                <div className="flex flex-col items-center gap-0 md:flex-row md:gap-2">
                  <FaExchangeAlt size={20} />
                  <p className="md:text-md text-sm font-medium">
                    Return Requested
                  </p>
                </div>
                <p className="md:text-md text-sm">
                  {orderStatusCounts.returnRequested}
                </p>
              </div>
              <div className="flex flex-col items-center justify-center gap-2 border py-10 md:flex-row md:gap-4">
                <div className="flex flex-col items-center gap-0 md:flex-row md:gap-2">
                  <FaUndoAlt size={20} />
                  <p className="md:text-md text-sm font-medium">
                    Return Completed
                  </p>
                </div>
                <p className="md:text-md text-sm">
                  {orderStatusCounts.returnCompleted}
                </p>
              </div>
              <div className="flex flex-col items-center justify-center gap-2 border py-10 md:flex-row md:gap-4">
                <div className="flex flex-col items-center gap-0 md:flex-row md:gap-2">
                  <FaRegMoneyBillAlt size={20} />
                  <p className="md:text-md text-sm font-medium">
                    Refund Requested
                  </p>
                </div>
                <p className="md:text-md text-sm">
                  {orderStatusCounts.refundRequested}
                </p>
              </div>
              <div className="flex flex-col items-center justify-center gap-2 border py-10 md:flex-row md:gap-4">
                <div className="flex flex-col items-center gap-0 md:flex-row md:gap-2">
                  <FaDollarSign size={20} />
                  <p className="md:text-md text-sm font-medium">
                    Refund Completed
                  </p>
                </div>
                <p className="md:text-md text-sm">
                  {orderStatusCounts.refundCompleted}
                </p>
              </div>
            </div>
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
