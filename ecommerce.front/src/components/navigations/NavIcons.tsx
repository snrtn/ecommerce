"use client";

import { useState } from "react";
import {
  CiUser,
  CiTimer,
  CiShoppingCart,
  CiDeliveryTruck,
} from "react-icons/ci";

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
        <CiUser className={navIcons.icon} />
      </Link>

      <Link href={"/shipping"} className={navIcons.iconContainer}>
        <CiDeliveryTruck className={navIcons.icon} />
      </Link>

      <Link href={"/cart"} className={navIcons.iconContainer}>
        <CiShoppingCart className={navIcons.icon} />
      </Link>

      <button onClick={openSideMenu} className={navIcons.iconContainer}>
        <CiTimer className={navIcons.icon} />
      </button>

      <SideMenu isOpen={isSideMenuOpen} onClose={closeSideMenu} />
    </div>
  );
};

export default NavIcons;
