"use client";

import React from "react";
import {
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

export interface RecentItem {
  title: string;
  date: string;
}

type DefaultProps = {
  setActiveSection: (section: string) => void;
};

const Default: React.FC<DefaultProps> = ({ setActiveSection }) => {
  const userName = "Jared Diamond";
  const userRank = "VIP Member";

  const recentData: { [key: string]: RecentItem[] } = {
    "personal-info": [
      { title: "Added New Address", date: "2024-07-01" },
      { title: "Removed Old Address", date: "2024-06-25" },
      { title: "Updated Phone Number", date: "2024-06-20" },
      { title: "Changed Profile Picture", date: "2024-06-15" },
    ],
    coupons: [
      { title: "Applied Coupon", date: "2024-07-02" },
      { title: "Received New Coupon", date: "2024-06-28" },
      { title: "Expired Coupon", date: "2024-06-25" },
      { title: "Discount Applied", date: "2024-06-20" },
    ],
    "order-history": [
      { title: "Ordered Product 1", date: "2024-07-01" },
      { title: "Ordered Product 2", date: "2024-06-15" },
      { title: "Cancelled Order", date: "2024-06-10" },
      { title: "Reviewed Order", date: "2024-06-05" },
    ],
    "documents-receipts": [
      { title: "Uploaded Document", date: "2024-07-04" },
      { title: "Downloaded Receipt", date: "2024-06-29" },
      { title: "Reviewed Document", date: "2024-06-26" },
      { title: "Updated Receipt Info", date: "2024-06-21" },
    ],
    "payment-info": [
      { title: "Updated Credit Card Info", date: "2024-07-05" },
      { title: "Removed Expired Card", date: "2024-06-20" },
      { title: "Added New Bank Account", date: "2024-06-15" },
      { title: "Reviewed Payment Methods", date: "2024-06-10" },
    ],
    notifications: [
      { title: "New Promo Code", date: "2024-07-01" },
      { title: "Sale Alert", date: "2024-06-25" },
      { title: "App Update Available", date: "2024-06-20" },
      { title: "New Feature Announcement", date: "2024-06-15" },
    ],
    subscriptions: [
      { title: "Subscribed to Newsletter", date: "2024-07-02" },
      { title: "Unsubscribed from Promotions", date: "2024-06-28" },
      { title: "Renewed Subscription", date: "2024-06-25" },
      { title: "Cancelled Subscription", date: "2024-06-20" },
    ],
    "reviews-ratings": [
      { title: "Reviewed Product 1", date: "2024-07-03" },
      { title: "Rated Product 2", date: "2024-06-29" },
      { title: "Commented on Review", date: "2024-06-25" },
      { title: "Updated Review", date: "2024-06-20" },
    ],
    "help-support": [
      { title: "Contacted Support", date: "2024-07-07" },
      { title: "Opened Ticket", date: "2024-06-26" },
      { title: "Resolved Issue", date: "2024-06-20" },
      { title: "Received Feedback", date: "2024-06-15" },
    ],
    logout: [
      { title: "Logged Out", date: "2024-07-09" },
      { title: "Logged In", date: "2024-06-30" },
      { title: "Session Expired", date: "2024-06-25" },
      { title: "Password Changed", date: "2024-06-20" },
    ],
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
    { id: "subscriptions", title: "Subscriptions", icon: <FaEnvelope /> },
    { id: "notifications", title: "Notifications", icon: <FaBell /> },
    { id: "help-support", title: "Support", icon: <FaQuestionCircle /> },
    { id: "logout", title: "Logout", icon: <FaSignOutAlt /> },
  ];

  return (
    <div className="min-h-[70vh] px-8 md:px-0">
      <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
        {items.map((item) => (
          <div
            key={item.id}
            className="mb-6 flex-1 gap-4 rounded-md border p-4"
          >
            <div className="items-left flex w-full flex-col">
              <div className="flex items-center">
                {item.icon}
                <h2 className="ml-2 text-lg font-semibold">{item.title}</h2>
                <button
                  onClick={() => setActiveSection(item.id)}
                  className="ml-auto text-blue-500"
                >
                  Go to Menu
                </button>
              </div>
              <div className="mt-6 grid w-full gap-4 md:grid-cols-1">
                {recentData[item.id]?.map((recentItem, index) => (
                  <div
                    key={index}
                    className="flex w-full items-center justify-between gap-4"
                  >
                    <p className="text-sm font-medium">{recentItem.title}</p>
                    <p className="text-xs text-gray-600">{recentItem.date}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Default;
