"use client";

import React from "react";
import {
  FaCheckCircle,
  FaTruck,
  FaBoxOpen,
  FaExclamationCircle,
  FaTimesCircle,
} from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";

interface StepperProps {
  status: string;
  currentLocation?: string;
}

const Stepper: React.FC<StepperProps> = ({ status, currentLocation }) => {
  const steps = [
    { label: "Shipped", icon: <FaBoxOpen size={30} />, isRequest: false },
    {
      label: "In Transit",
      icon: <MdLocalShipping size={30} />,
      isRequest: false,
    },
    {
      label: "Out for Delivery",
      icon: <FaTruck size={30} />,
      isRequest: false,
    },
    { label: "Delivered", icon: <FaCheckCircle size={30} />, isRequest: false },
    {
      label: "Refund Requested",
      icon: <FaExclamationCircle size={30} />,
      color: "text-yellow-500",
      isRequest: true,
    },
    {
      label: "Refund Completed",
      icon: <FaCheckCircle size={30} />,
      color: "text-green-500",
      isRequest: true,
    },
    {
      label: "Refund Rejected",
      icon: <FaTimesCircle size={30} />,
      color: "text-red-500",
      isRequest: true,
    },
    {
      label: "Return Requested",
      icon: <FaExclamationCircle size={30} />,
      color: "text-yellow-500",
      isRequest: true,
    },
    {
      label: "Return Completed",
      icon: <FaCheckCircle size={30} />,
      color: "text-green-500",
      isRequest: true,
    },
    {
      label: "Return Rejected",
      icon: <FaTimesCircle size={30} />,
      color: "text-red-500",
      isRequest: true,
    },
  ];

  const currentStep = steps.findIndex((step) => step.label === status);
  const isRequestStatus = steps[currentStep]?.isRequest;

  return (
    <div className="flex items-center justify-between">
      {!isRequestStatus ? (
        steps
          .filter((step) => !step.isRequest)
          .map((step, index) => {
            const isActive = index <= currentStep;
            return (
              <div key={index} className="flex flex-1 flex-col items-center">
                <div
                  className={`${isActive ? "text-blue-600" : "text-gray-300"}`}
                >
                  {step.icon}
                </div>
                <p className="mt-2 text-[10px] md:text-xs">{step.label}</p>
                {step.label === "In Transit" && currentLocation && (
                  <p className="mt-1 text-center text-[10px] text-gray-500 md:text-xs">
                    {currentLocation}
                  </p>
                )}
              </div>
            );
          })
      ) : (
        <div className="flex flex-1 flex-col items-center">
          <div className={steps[currentStep].color}>
            {steps[currentStep].icon}
          </div>
          <p className="mt-2 text-[10px] md:text-xs">
            {steps[currentStep].label}
          </p>
        </div>
      )}
    </div>
  );
};

export default Stepper;
