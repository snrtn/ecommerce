"use client";

import React, { useState } from "react";
import Addresse from "@/components/app/user/Addresse";
import OrderHistory from "@/components/app/user/OrderHistory";
import Gallery from "@/components/app/user/Gallery";
import Payment from "@/components/app/user/Payment";
import Sidebar from "@/components/app/user/Sidebar";
import useMediaQuery from "@/hooks/useMediaQuery";

const UserPage = () => {
  const isMobile = useMediaQuery(768);
  const [activeSection, setActiveSection] = useState("personal-info");
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const handleSectionClick = (section: string) => {
    setActiveSection(section);
    if (isMobile) {
      setIsSidebarVisible(false);
    }
  };

  return (
    <div className="mt-0 flex flex-col px-4 md:mt-24 md:flex-row md:px-8 lg:px-16 xl:px-32 2xl:px-48">
      {(!isMobile || isSidebarVisible) && (
        <div className="mb-10 w-full md:mb-0 md:w-1/6">
          <Sidebar
            setActiveSection={handleSectionClick}
            activeSection={activeSection}
          />
        </div>
      )}
      {isMobile && !isSidebarVisible && (
        <div className="mb-6 flex justify-start px-4">
          <button
            onClick={() => setIsSidebarVisible(true)}
            className="text-md font-medium md:hidden"
          >
            Back
          </button>
        </div>
      )}
      <div
        className={`h-full w-full ${isSidebarVisible && isMobile ? "hidden" : "block"} md:block md:w-5/6`}
      >
        {activeSection === "personal-info" && (
          <section id="personal-info">
            <Addresse />
          </section>
        )}
        {activeSection === "order-history" && (
          <section id="order-history">
            <OrderHistory />
          </section>
        )}
        {activeSection === "reviews-ratings" && (
          <section id="reviews-ratings">
            <Gallery />
          </section>
        )}
        {activeSection === "payment-info" && (
          <section id="payment-info">
            <Payment />
          </section>
        )}
      </div>
    </div>
  );
};

export default UserPage;
