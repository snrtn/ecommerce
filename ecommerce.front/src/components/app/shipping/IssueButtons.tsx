import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { issueButtons } from "@/data/shipping.data";
import IssueButtonItem from "./IssueButtonItem";

const IssueButtons: React.FC = () => {
  const [activeButton, setActiveButton] = useState<string | null>(null);

  const handleButtonClick = (button: string) => {
    setActiveButton(activeButton === button ? null : button);
  };

  return (
    <div className="mt-10 flex flex-col rounded-lg border px-8 py-16 shadow-sm md:flex-row md:px-16 lg:px-24 xl:px-32">
      <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-1">
        {issueButtons.map((button) => (
          <IssueButtonItem
            key={button.id}
            button={button}
            activeButton={activeButton}
            handleButtonClick={handleButtonClick}
          />
        ))}
      </div>
    </div>
  );
};

export default IssueButtons;
