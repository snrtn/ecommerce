import React from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { IssueButton } from "@/types/shipping.type";
import Link from "next/link";

interface IssueButtonItemProps {
  button: IssueButton;
  activeButton: string | null;
  handleButtonClick: (button: string) => void;
}

const IssueButtonItem: React.FC<IssueButtonItemProps> = ({
  button,
  activeButton,
  handleButtonClick,
}) => {
  return (
    <div className="col-span-1">
      <button
        className={`font-base flex w-full items-center justify-between rounded-lg bg-gray-100 px-8 py-4 text-left text-xs text-black md:px-12 md:py-8 ${
          activeButton === button.id ? "font-bold" : ""
        }`}
        onClick={() => handleButtonClick(button.id)}
      >
        <span>{button.title}</span>
        {activeButton === button.id ? <FaChevronUp /> : <FaChevronDown />}
      </button>
      <div
        className={`${
          activeButton === button.id
            ? "ease-out-in max-h-96 opacity-100 transition-all duration-1000"
            : "max-h-0 overflow-hidden opacity-0 transition-all duration-500 ease-in-out"
        }`}
      >
        {activeButton === button.id && (
          <div className="px-8 py-4 md:px-12 md:py-8">
            <p className="mt-4 text-sm text-gray-600">{button.description}</p>
            <Link
              href={button.link}
              className="mt-2 inline-block text-sm text-blue-500"
            >
              {button.title}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default IssueButtonItem;
