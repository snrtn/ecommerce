import React from "react";

type SidebarItemProps = {
  title: string;
  icon: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
};

const SidebarItem: React.FC<SidebarItemProps> = ({
  title,
  icon,
  isActive,
  onClick,
}) => {
  const SideBaseBtn =
    "w-full justify-center items-center flex-col text-sm p-3 rounded-md transition";
  const SideActiveBtn = "bg-gray-100 font-medium";
  const SideInactiveBtn = "text-black hover:bg-gray-100";

  return (
    <li>
      <button
        onClick={onClick}
        className={`${SideBaseBtn} ${isActive ? SideActiveBtn : SideInactiveBtn} pr-5`}
      >
        <span className="inline-block text-lg">{icon}</span>
        <p className="text-xs">{title}</p>
      </button>
    </li>
  );
};

export default SidebarItem;
