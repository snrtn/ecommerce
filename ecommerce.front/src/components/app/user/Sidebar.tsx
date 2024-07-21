"use client";

import React from "react";
import {
  FaUser,
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
  const isMobile = useMediaQuery(768);
  const isVerySmallScreen = useMediaQuery(480);

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
      <div className="mb-6 flex w-full flex-col items-start justify-center px-3 md:items-center md:px-0">
        <button
          onClick={() => setActiveSection("default")}
          className={"w-full flex-col items-center justify-center px-3 md:px-0"}
        >
          <FaUser className="mb-2 mr-2 hidden text-lg md:inline-block" />
          <p className="text-md mr-2 font-medium md:text-sm">Profiles</p>
        </button>
      </div>
      <ul
        className={`grid gap-2 ${isVerySmallScreen ? "grid-cols-2" : isMobile ? "grid-cols-4" : "md:grid-cols-1"} `}
      >
        {items.map((item) => (
          <SidebarItem
            key={item.id}
            title={item.title}
            icon={item.icon}
            isActive={activeSection === item.id}
            onClick={() => setActiveSection(item.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
