"use client";

import React, { useState } from "react";
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

  const handleSectionClick = (section: string) => {
    setActiveSection(section);
  };

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
