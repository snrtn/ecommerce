"use client";

import { useState } from "react";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { IoTime } from "react-icons/io5";
import { FaTruckFast } from "react-icons/fa6";
import Link from "next/link";
import navIcons from "./navIcons.styles";
import SideMenu from "./SideMenu";

const NavIcons = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const openSideMenu = () => {
    setIsSideMenuOpen(true);
  };

  const closeSideMenu = () => {
    setIsSideMenuOpen(false);
  };

  return (
    <div className={navIcons.container}>
      <Link href={"/user"}>
        <FaUser className={navIcons.icon} />
      </Link>

      <Link href={"/"} className={navIcons.iconContainer}>
        <FaTruckFast className={`${navIcons.icon} text-xl md:!text-3xl`} />
      </Link>

      <Link href={"/cart"} className={navIcons.iconContainer}>
        <FaShoppingCart className={navIcons.icon} />
      </Link>

      <button onClick={openSideMenu} className={navIcons.iconContainer}>
        <IoTime className={`${navIcons.icon} text-xl md:!text-3xl`} />
      </button>

      <SideMenu isOpen={isSideMenuOpen} onClose={closeSideMenu} />
    </div>
  );
};

export default NavIcons;
