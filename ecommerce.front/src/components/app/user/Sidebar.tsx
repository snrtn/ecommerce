"use client";

import React, { useState } from "react";
import {
  FaUser,
  FaBars,
  FaAddressCard,
  FaHistory,
  FaImages,
  FaCreditCard,
  FaBell,
  FaShieldAlt,
  FaEnvelope,
  FaQuestionCircle,
  FaSignOutAlt,
  FaTicketAlt,
  FaFileAlt,
} from "react-icons/fa";
import useMediaQuery from "@/hooks/useMediaQuery";
import SidebarItem from "./SidebarItem";

type SidebarProps = {
  setActiveSection: (section: string) => void;
  activeSection: string;
};

const Sidebar: React.FC<SidebarProps> = ({
  setActiveSection,
  activeSection,
}) => {
  const isMobile = useMediaQuery(486);
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu((prev) => !prev);
  };

  const items = [
    { id: "personal-info", title: "Addresses", icon: <FaAddressCard /> },
    { id: "coupons", title: "Coupons", icon: <FaTicketAlt /> },
    { id: "order-history", title: "Orders", icon: <FaHistory /> },
    {
      id: "documents-receipts",
      title: "Receipts",
      icon: <FaFileAlt />,
    },
    { id: "payment-info", title: "Payment", icon: <FaCreditCard /> },
    {
      id: "security-settings",
      title: "Security",
      icon: <FaShieldAlt />,
    },
    { id: "reviews-ratings", title: "Gallery", icon: <FaImages /> },
    { id: "consulting", title: "Consulting", icon: <FaEnvelope /> },
    { id: "notifications", title: "Notifications", icon: <FaBell /> },
    { id: "help-support", title: "Support", icon: <FaQuestionCircle /> },
    { id: "logout", title: "Logout", icon: <FaSignOutAlt /> },
  ];

  return (
    <div className="h-full w-full px-4 md:p-2">
      <div className="mb-6 flex w-full flex-row items-center justify-center px-3 md:flex-col md:px-0">
        <button
          onClick={() => setActiveSection("default")}
          className="flex w-full flex-1 flex-row items-center justify-end px-3 md:flex-col md:px-0"
        >
          <FaUser className="mb-2 mr-2 hidden text-lg md:inline-block" />
          <p className="text-md mr-2 font-medium md:text-sm">Profile</p>
        </button>
        {isMobile && (
          <button
            onClick={handleMenuToggle}
            className="flex w-full flex-1 items-center justify-start text-lg"
          >
            <FaBars />
          </button>
        )}
      </div>
      {(!isMobile || showMenu) && (
        <ul
          className={`grid gap-2 ${isMobile ? "absolute z-50 w-full grid-cols-4 bg-white px-4 py-10 shadow-sm" : "md:grid-cols-1"}`}
        >
          {items.map((item) => (
            <SidebarItem
              key={item.id}
              title={item.title}
              icon={item.icon}
              isActive={activeSection === item.id}
              onClick={() => {
                setActiveSection(item.id);
                setShowMenu(false); // Hide menu on item click
              }}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Sidebar;
