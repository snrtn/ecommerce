"use client";

import React from "react";
import { FaCheckCircle, FaTruck, FaBoxOpen } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";

interface StepperProps {
  status: string;
  currentLocation?: string;
}

const Stepper: React.FC<StepperProps> = ({ status, currentLocation }) => {
  const steps = [
    { label: "Shipped", icon: <FaBoxOpen size={40} /> },
    { label: "In Transit", icon: <MdLocalShipping size={40} /> },
    { label: "Out for Delivery", icon: <FaTruck size={40} /> },
    { label: "Delivered", icon: <FaCheckCircle size={40} /> },
  ];

  const currentStep = steps.findIndex((step) => step.label === status);

  return (
    <div className="flex items-center justify-between">
      {steps.map((step, index) => (
        <div key={index} className="flex flex-1 flex-col items-center">
          <div
            className={`${
              index <= currentStep ? "text-blue-600" : "text-gray-300"
            }`}
          >
            {step.icon}
          </div>
          <p className="mt-2 text-xs">{step.label}</p>
          {step.label === "In Transit" && currentLocation && (
            <p className="mt-1 text-xs text-gray-500">{currentLocation}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Stepper;