"use client";

import { FaUser, FaShoppingCart, FaHeart } from "react-icons/fa";
import NavMenu from "./NavMenu";
import Link from "next/link";
import navIcons from "./navIcons.styles";

const NavIcons = () => {
  return (
    <div className={navIcons.container}>
      <Link href={"/user"}>
        <FaUser className={navIcons.icon} />
      </Link>
      <div className={navIcons.iconContainer}>
        <FaHeart className={navIcons.icon} />
        <span className={navIcons.text}>5</span>
      </div>

      <Link href={"/cart"} className={navIcons.iconContainer}>
        <FaShoppingCart className={navIcons.icon} />
        <span className={navIcons.text}>3</span>
      </Link>
    </div>
  );
};

export default NavIcons;
