"use client";

import React, { useState } from "react";
import Addresse from "@/components/app/user/Addresse";
import OrderHistory from "@/components/app/user/OrderHistory";
import Gallery from "@/components/app/user/Gallery";
import Payment from "@/components/app/user/Payment";
import Sidebar from "@/components/app/user/Sidebar";
import useMediaQuery from "@/hooks/useMediaQuery";
import Default from "@/components/app/user/Default"; // 기본 페이지 컴포넌트 import

const UserPage = () => {
  const isMobile = useMediaQuery(768);
  const [activeSection, setActiveSection] = useState("default");

  const handleSectionClick = (section: string) => {
    setActiveSection(section);
  };

  return (
    <div className="mt-10 flex flex-col md:mt-24 md:flex-row md:px-8 lg:px-16 xl:px-32 2xl:px-48">
      <div className="w-full md:w-1/6">
        <Sidebar
          setActiveSection={handleSectionClick}
          activeSection={activeSection}
        />
      </div>
      <div className="h-full w-full md:w-5/6">
        {activeSection === "default" && (
          <section id="default">
            <Default />
          </section>
        )}
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
