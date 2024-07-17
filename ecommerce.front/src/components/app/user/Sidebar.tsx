"use client";

import React from "react";
import {
  FaUser,
  FaAddressCard,
  FaHistory,
  FaImages,
  FaCreditCard,
} from "react-icons/fa";
import useMediaQuery from "@/hooks/useMediaQuery";

type SidebarProps = {
  setActiveSection: (section: string) => void;
  activeSection: string;
};

const Sidebar: React.FC<SidebarProps> = ({
  setActiveSection,
  activeSection,
}) => {
  const isMobile = useMediaQuery(768);
  const isVerySmallScreen = useMediaQuery(480);
  const SideBaseBtn =
    "w-full justify-center items-center flex-col text-sm p-3 rounded-md transition";
  const SideActiveBtn = "bg-gray-100 font-medium";
  const SideInactiveBtn = "text-black hover:bg-gray-100";

  return (
    <div className="h-full w-full px-4 py-10 md:p-2">
      <div className="mb-6 flex w-full flex-col items-start justify-center px-3 md:items-center md:px-0">
        <button
          onClick={() => setActiveSection("default")}
          className={
            "w-full flex-col items-start justify-center px-3 md:items-center md:px-0"
          }
        >
          <FaUser className="mb-2 mr-2 hidden text-lg md:inline-block" />
          <p className="mr-2 text-sm font-medium">Profiles</p>
        </button>
      </div>
      <ul
        className={`grid gap-2 ${isVerySmallScreen ? "grid-cols-2" : isMobile ? "grid-cols-4" : "md:grid-cols-1"}`}
      >
        <li>
          <button
            onClick={() => setActiveSection("personal-info")}
            className={`${SideBaseBtn} ${
              activeSection === "personal-info"
                ? SideActiveBtn
                : !isMobile && SideInactiveBtn
            }`}
          >
            <FaAddressCard className="mb-2 mr-2 inline-block text-lg" />
            <p className="text-xs">My Addresses</p>
          </button>
        </li>
        <li>
          <button
            onClick={() => setActiveSection("order-history")}
            className={`${SideBaseBtn} ${
              activeSection === "order-history"
                ? SideActiveBtn
                : !isMobile && SideInactiveBtn
            }`}
          >
            <FaHistory className="mb-2 mr-2 inline-block text-lg" />
            <p className="text-xs">My Orders</p>
          </button>
        </li>
        <li>
          <button
            onClick={() => setActiveSection("reviews-ratings")}
            className={`${SideBaseBtn} ${
              activeSection === "reviews-ratings"
                ? SideActiveBtn
                : !isMobile && SideInactiveBtn
            }`}
          >
            <FaImages className="mb-2 mr-2 inline-block text-lg" />
            <p className="text-xs">My Gallery</p>
          </button>
        </li>
        <li>
          <button
            onClick={() => setActiveSection("payment-info")}
            className={`${SideBaseBtn} ${
              activeSection === "payment-info"
                ? SideActiveBtn
                : !isMobile && SideInactiveBtn
            }`}
          >
            <FaCreditCard className="mb-2 mr-2 inline-block text-lg" />
            <p className="text-xs">My Payment</p>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
